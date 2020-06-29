const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcript = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.send(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Serve Error');
	}
});

// @route      POST api/auth
// @decript    Authenticate user & get token
// @access     Public
router.post(
	'/',
	[check('email', 'Please included a valid Email').isEmail(), check('password', 'Password is require').exists()],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;

		try {
			// see if user exist
			let user = await User.findOne({ email });

			if (!user) {
				return res.status(400).json({ errors: [{ msg: 'Invalid Credentials !!!' }] });
			}

			const isMatch = await bcript.compare(password, user.password);

			if (!isMatch) {
				return res.status(400).json({ errors: [{ msg: 'Invalid Credentials !!!' }] });
			}

			const payload = {
				user: {
					id: user.id
				}
			};

			jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (err, token) => {
				if (err) throw err;
				res.json({ token });
			});
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;
