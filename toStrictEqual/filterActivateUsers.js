function filterActivateUsers(users){
    return users.filter(user=>user.activate)
}
module.exports={filterActivateUsers}