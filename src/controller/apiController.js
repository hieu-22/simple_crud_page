const pool = require('../configs/connectDB')

let getAllUser = async (req, res) => {

    const [rows, fields] = await pool.execute(
        `select * from users`, []
    )
    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

let createNewUser = async (req, res) => {
    let {firstName, middleName, lastName, age, gender, ID, email} = req.body
    let numtypeAge = Number(age)
    if(!firstName || !lastName || !age || !gender || !ID || !email) {
        return res.status(200).json({
            message: "missing required params"
        })
    }
    await pool.execute(
        `insert into users(firstName, middleName, lastName, age, gender, ID, email)
        values(?,?,?,?,?,?,?)`, [firstName, middleName, lastName, numtypeAge, gender, ID, email]
    )
    return res.status(200).json({
        message: 'succeeded'
    })
}

let updateUser = async (req, res) => {
    let {userId, firstName, middleName, lastName, age, gender, ID, email} = req.body
    let numAge = Number(age)
    if(!userId || !firstName || !lastName || !numAge || !ID || !email) {
        return res.status(200).json({
            message: "missing required params"
        })
    }
    await pool.execute(
        `update users 
        set user_id = ?, firstName = ?, middleName = ?, lastName = ?, age =?, gender = ?, ID =?, email =?
        where user_id = ?`,
        [userId, firstName, middleName, lastName, numAge, gender, ID, email, userId]
    )
    return res.status(200).json({
        message: 'updated'
    })
}

let deleteUser = async (req, res) => {
    let {userId, firstName, middleName, lastName, age, gender, ID, email} = req.body
    if( !(firstName && ID && email)) {
        return res.status(200).json({
            message: "missing required params"
        })
    }
    await pool.execute(
        `delete from users where firstName=? and ID=? and email=?`,
        [firstName, ID, email]
    )
    return res.status(200).json({
        message: 'deleted'
    })
}

module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUser
}