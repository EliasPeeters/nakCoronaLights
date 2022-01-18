app.get('/dashboard', (req, res) => {
    let id = req.cookies.id == undefined? '':req.cookies.id;

    if (logins.includes(id)) {
        res.send('loged in ')
    } else {
        res.redirect('/login?message=Nicht angemeldet')
    }
})


