import UserModel from "./schema.js";
import jwt from "jsonwebtoken";
export default class UserController {
    async register(req, res) {
        try {
            const { name, email, password } = req.body
            //checking user exists or not
            const user = UserModel({ name, email, password })
            const result = await user.save()
            res.status(201).json({
                message: 'User Registered',
                data: result
            })
        } catch (error) {
            console.log(error)
            res.send('user already exists')
        }
    }

    async login(req, res) {
        const { email, password } = req.body
        const user = await UserModel.findOne({ email: email })
        if (user) {
            if (password == user.password) {
                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
                    expiresIn
                        : '1d'
                });
                res.send('logged in')
            }
        } else {
            res.send('register first')
        }
    }

    


}