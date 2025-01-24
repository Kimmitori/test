module.exports = class User {
    constructor(obj) {
        this.id = obj.id ?? -1;
        this.prof=obj.prof;
        this.name=obj.name;
        this.login=obj.login;
        this.password-obj.password;
    }
};