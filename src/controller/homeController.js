const express = require('express')
const pool = require('../configs/connectDB')
const app = express()

let getHomepage = async (req, res) => {
    let [data, fields ] = await pool.execute(`select * from users`, [], (err, results, fields) => {  
    })
    res.render('index', {dataUser: data})
}

let createUser = async (req, res) => {
    let {firstName, middleName, lastName, age, gender, ID, email} = req.body
    await pool.execute(
        `insert into users(firstName, middleName, lastName, age, gender, ID, email)
        values(?,?,?,?,?,?,?)`, [firstName, middleName, lastName, age, gender, ID, email]
    )
    res.redirect("/")
}

let deleteUser = async (req, res) =>{
    let {userID} = req.body
    await pool.execute(
        `delete from users where user_id = ?`, [userID]
    )
    res.redirect('/')
}

let getUserDetailsInfor = async (req, res) => {
    let {userId} = req.params
    const [rows, fields] = await pool.execute(
        `select * from users where user_id = ?`,
        [userId]
    )
    res.send(JSON.stringify(rows))
}

module.exports = {
    getHomepage,
    createUser,
    deleteUser,
    getUserDetailsInfor
}