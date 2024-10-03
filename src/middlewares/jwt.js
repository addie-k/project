import jwt from 'jsonwebtoken'
const auth = (req,res,next) => {
    const token = req.headers.authorization
    if (!token) {
        console.log('token not found')
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = payload.userId
        console.log("payload:", payload);
    } catch (error) {
        console.log("err jwt",error)
    }
    next()
}
export default auth