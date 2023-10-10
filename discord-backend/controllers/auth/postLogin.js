const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const postLogin = async (req, res) => {
    try {
        const { mail, password } = req.body;
        const user = await User.findOne({ mail: mail.toLowerCase() });

        if (user && bcrypt.compare(password, user.password)) {
            // send new token
            const token = jwt.sign({
                uesrId: user._id,
                mail
            },
                process.env.TOKEN_KEY,
                {
                    expiresIn: '24h',
                }
            );

            res.status(200).json({
                userDetails: {
                    mail: user.mail,
                    token: token,
                    username: user.username
                },
            });
            return;
        }

        return res.status(400).send("Invalid Credentials, Please try again");

    } catch (error) {
        res.status(500).send("Somtheing went erong, Please try again");
    }
}

module.exports = postLogin;