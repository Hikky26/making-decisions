require ('dotenv').config();

const {CONNECTION_STRING}= process.env;
const Sequelize = require('sequelize');
//sequelize is used to query database
const sequelize = new Sequelize (CONNECTION_STRING,{
    dialect:'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

//hardcode user id and client id to simulate a logged in user named FERN
const userId = 4;
const clientId = 3;

module.exports = {
    getUserInfo: (req, res) => {
        sequelize.query(
            `SELECT * FROM cc_clients AS c 
            JOIN cc_users AS u 
            ON c.user_id = u.user_id
            WHERE u.user_id =${userId}`
            ).then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    }, 
    updateUserInfo: (req, res) => {
        let {first_name, last_name, phone_number,email,address,city,state, zip_code} = req.body;
        let query = `UPDATE cc_users SET
            first_name = '${first_name}',
            last_name = '${last_name}',
            email = '${email},
            phone_number = ${phone_number},
            WHERE user_id = ${userId};

            UPDATE cc_clients SET
            address = '${address}',
            city = '${city}',
            state = '${state}',
            zipcode = ${zip_code},
            WHERE user_id = ${userId};
            `;
        sequelize.query(query)
        .then(dbRes => res.sendStatus(200))
        .catch(err => console.log(err))
    },

    getUserAppt: (req, res) => {
        let query = `
        SELECT * 
        FROM cc_appointments
        WHERE client_id = ${clientId} 
        ORDER BY date desc;`;

        sequelize.query(query)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    }, 
    requestAppointment: (req, res) => {
        const{date, service} = req.body;
        const query = `
        INSERT INTO cc_appointments (
            client_id, date, service_type, notes, approved, completed)
            VALUES (${clientId}, '${date}', '${service}', '', false, false) returning *;`
            ;
            sequelize.query(query)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
        
    }
}