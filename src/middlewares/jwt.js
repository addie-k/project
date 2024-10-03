import jwt from 'jsonwebtoken'
const auth = (req,res,next) => {
    const token = req.headers.authorization
    if (!token) {
        res.send('token expired! login again')
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = payload.userId
        console.log("payload:", payload);
    } catch (error) {
        console.log("err jwt",error)
        res.send('token expired! login again')

    }
    next()
}
export default auth