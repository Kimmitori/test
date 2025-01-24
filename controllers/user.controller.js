const userService = require('../services/user.service.js')
exports.userPage = function (request, response) {
    userService.findAll()
        .then((users) => {
            console.log("users = ", users)
            response.render("user.hbs", { users: users });
        }).catch((err) => {
            console.log(err)
        })
};