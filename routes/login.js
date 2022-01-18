let uuid = require('uuid').v4;
const jsSHA = require("jssha");

logins = []

app.get('/login', (req, res) => {
    let id = req.cookies.id == undefined? '':req.cookies.id;
    if (logins.includes(id)) {
        res.redirect('/dashboard')
    } else {
        let message = req.query.message == undefined? '': req.query.message;
        res.render('login', {message})
    }
})

app.post('/login', (req, res) => {
    const shaObj = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8" });
    shaObj.update(credentials.nakCoronaLights.password);
    let passwordHashed = shaObj.getHash("HEX");

    if (req.body.username == credentials.nakCoronaLights.username && req.body.password == passwordHashed) {
        let id = uuid();
        logins.push(id);
        res.cookie('id', id);
        res.redirect('/dashboard');
    } else {
        res.redirect('/login?message=Falscher username und/ oder password');
    }
    
})

