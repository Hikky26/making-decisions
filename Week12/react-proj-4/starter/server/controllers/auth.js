require('dotenv').config()

const{SECRET} = process.env



const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const createToken = (username, id) =>{
    const payload = {
        username,
        id
    }
    const options = {
        expiresIn : '2 days'
    }
    return jwt.sign(payload, SECRET, options)
}



module.exports = {
    register : async (req, res) => {
        try{
            const {username, password} = req.body
            const foundUser = await User.findOne({where: {username:username}})
            if (foundUser){
                res.status(400).send('User found/exists already')
                
            }else{
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(password, salt)
                const newUser = await User.create({username: username, hashedPass: hash})
                const token = createToken(newUser.dataValues.username, newUser.dataValues.id)
                console.log('Token =>', token)
                const exp = Date.now() + 1000 * 60 * 60 * 48
                res.status(200).send({
                    username: newUser.dataValues.username,
                    userId: newUser.dataValues.id,
                    token,
                    exp
                })
            }
            
        }catch (error){
            console.log('Error with register:' , error)
        }
    },

    login : async (req, res) => {
        try{
            const {username, password} = req.body
            const foundUser = await User.findOne({where: {username:username}})
            if(foundUser){
                const isAuthenticated = bcrypt.compareSync(password, foundUser.hashedPass)
                if(isAuthenticated){
                    const token = createToken(foundUser.dataValues.username, foundUser.dataValues.id)
                    console.log('Token =>', token)
                    const exp = Date.now() + 1000 * 60 * 60 * 48
                    res.status(200).send({
                        username: foundUser.dataValues.username,
                        userId: foundUser.dataValues.id,
                        token,
                        exp
                    })

                }else{
                    res.status(400).send('cannot login')
                }
            }else{
                res.status(400).send('cannot login')

            }
        }catch (error){
            console.log('Error with login' , error)
            res.sendStatus(400)
        }
    },
    
    logout : (req, res) => {
        console.log('logout')
    } 
}