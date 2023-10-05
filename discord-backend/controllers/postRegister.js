const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postRegister = async (req, res) => {
    try {
        const { username, mail, password } = req.body;

        //check if user exists
        const userExists = await User.exists({ mail: mail.toLowerCase() });

        if (userExists) {
            return res.status(409).send("User Already Exists");
        }

        // Encrypt Password
        const encryptedpassword = await bcrypt.hash(password, 10);

        // Create User document and Save it to database

        const user = await User.create({
            username,
            mail: mail.toLowerCase(),
            password: encryptedpassword,
        })

        // Create JWT token
        const token = jwt.sign({
            uesrId: user._id,
            mail
        },
            process.env.TOKEN_KEY,
            {
                expiresIn: '24h',
            }
        );

        res.status(201).json({
            userDetails: {
                mail: user.mail,
                token: token,
                username: user.username
            },
        });
    } catch (error) {
        res.status(500).send("Error occured, Please try again")
    }
}

module.exports = postRegister;