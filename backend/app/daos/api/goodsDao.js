const con = require('../../config/dbconfig')

const goodsDao = {
    table: 'goods',

    create: (req, res) => {
        if(Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create."
            })
        } else if(!req.body.item){
            res.json({
                "error": true,
                "message": "Must include item name"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `INSERT INTO goods SET ${fields.join(' =?,')}`,
                values,
                (error, dbres)=>{
                    if(!error){
                        res.send(`Last id: ${dbres.insertId}`)
                    } else {
                        console.log(' DAO ERROR ', error)
                        res.send('Error creating record')
                    }
                }
            )
        }
    },

    update: (req, res) => {
        if(isNaN(req.params.id)) {
            res.json({
                "error": true,
                "message": "Id must be a number."
            })
        } else if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to update"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `UPDATE goods SET ${fields.join(' =?, ')} = ? WHERE item_id = ?;`,
                [...values, req.params.id],
                (error, dbres)=> {
                    if(!error){
                        res.send(`Changed ${dbres.changedRows} row(s)`)
                    } else {
                        console.log(' DAO ERROR ', error)
                        res.send('Error updating record')
                    }
                }
            )
        }
    },

    sortBySpecial: (res, table, special) => {
        con.query(
            `SELECT * FROM ${table} WHERE special = '${special}';`,
            [special],
            (error, rows) => {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(' DAO ERROR ', error)
                }
            }
        )
    }
}

module.exports = goodsDao