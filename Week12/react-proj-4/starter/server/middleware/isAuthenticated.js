// below is requesting the token data from the .env file in order to implement the authentication.
// the jwt library is imported to generate and verify the token
//the secret is from the .env file to help witht the verification process

require('dotenv').config()
const jwt = require('jsonwebtoken')
const {SECRET} = process.env

module.exports = {
    isAuthenticated: (req, res, next) => {

        //retireves the value of the authorization header.
        const headerToken = req.get('Authorization')


        //if the authorization header value is empty, then the erroe 401: will be sent saying that it is missing
        if (!headerToken) {
            console.log('ERROR IN auth middleware')
            res.sendStatus(401)
        }

        // sets up the variable token to be used later to store the jwt token
        let token

        //this is the verification process of the token
        try {
            token = jwt.verify(headerToken, SECRET)
        } catch (err) {
            err.statusCode = 500
            throw err
        }
        
        
        if (!token) {
            const error = new Error('Not authenticated.')
            error.statusCode = 401
            throw error
        }

        next()
    }
}