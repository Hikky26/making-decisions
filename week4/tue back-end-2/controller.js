const db = require('./server/db.json')
let h_id = db.length

module.exports= {
    getAllHouses : (req, res) => {
        let allHouses = db;
        res.status(200).send(allHouses)
    },
    deleteHouse : (req, res) => {
        let ind = db.findIndex(va => va.id === +req.params.id);
        a = db.splice(ind, 1)
        // console.log(a)
        res.status(200).send(db)
    },
    createHouse : (req, res) => {
        h_id++
        let {address, price, imageURL} = req.body
        let newHouse = {
            id : h_id,
            address,
            price,
            imageURL
        }
        db.push(newHouse);
        res.status(200).send(db)
    },
    updateHouse : (req, res) => {
        let {id} = req.params;
        let {type} = req.body;
        let ind = db.findIndex(va => va.id === +id);

        if(type === 'plus'){
            db[ind].price += 10000
            res.status(200).send(db)

        }else if(type ==='minus'){
            db[ind].price -= 10000
            gitres.status(200).send(db)
            
        }
    }
}