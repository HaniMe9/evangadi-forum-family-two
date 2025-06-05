function register(req, res) {
    // Logic for registering a user
    res.send(" registered ");
    
}

function login(req, res) {
    // Logic for logging in a user
    res.send(" login ");
    
}

function checkuser(req, res) {
    // Logic for checking user status
    res.send(" check user ");
    
}

module.exports = {register, login, checkuser};
    