const UserModel = require('../Models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.create = async (req, res) => {


    try {
        const checkUser = await UserModel.findOne({ email: req.body.data.email })

        if (checkUser) {
            return res.json({ status: false, msg: "User Already Exists" })
        } else {

            const password = bcrypt.hashSync(req.body.data.password, 10)
            const User = UserModel.create({
                name: req.body.data.name,
                email: req.body.data.email,
                phone: req.body.data.phone,
                password: password,
            })

            return res.status(200).json({ status: true, msg: "Registered Successfully! Now Login" })
        }

    } catch (error) {
        console.log(error);
        return res.json({ status: false, msg: "Something Went Wrong! Try Again" })
    }

}

exports.login = async (req, res) => {


    try {

        const checkUser = await UserModel.findOne({ email: req.body.data.email })

        if (!checkUser) {
            return res.json({ status: false, msg: "Wrong Credentials.." })
        } else {

            const checkPass = await bcrypt.compare(req.body.data.password, checkUser.password)
            if (!checkPass) {
                return res.json({ status: false, msg: "Wrong Credentials" })
            } else {
                const token = jwt.sign({ id: checkUser._id }, process.env.secret_key)
                console.log(token);
                res.cookie('jwtToken', token, {
                    expires: new Date(Date.now() + 259200000),
                    httpOnly: true
                })
            }
        }

        return res.status(200).json({ status: true, msg: "LOgin Successfull!", user: { id: checkUser._id, email: checkUser.email } })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, msg: "Something Went Wrong! Try Again" + error })
    }

}