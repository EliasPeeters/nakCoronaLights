app.get('/dashboard', async (req, res) => {
    let id = req.cookies.id == undefined? '':req.cookies.id;

    if (logins.includes(id)) {
        let data = await connection.asyncquery('SELECT * FROM nakCoronaLights');
        let message = req.query.message == undefined? '': req.query.message;
        for (let i = 0; i < data.length; i++) {
            data[i].red = ''
            data[i].yellow = ''
            data[i].green = ''
            data[i][data[i].color] = 'selected';
            
        }
        res.render('dashboard', {data, message})
    } else {
        res.redirect('/login?message=Nicht angemeldet')
    }
})

app.get('/save', async(req, res) => {
    let id = req.cookies.id == undefined? '':req.cookies.id;

    if (logins.includes(id)) {
        console.log(req.query);
        let queryData = req.query;
        queryData.table = 'nakCoronaLights'
        let queryString = connection.createQueryStringFromObject(queryData);
        connection.asyncquery(`DELETE FROM nakCoronaLights WHERE id=${req.query.id};`)
        connection.asyncquery(queryString)
        res.redirect('/dashboard?message=Gespeichert')
    } else {
        res.redirect('/login?message=Nicht angemeldet')
    }
})

app.get('/new', async(req, res) => {
    let id = req.cookies.id == undefined? '':req.cookies.id;

    if (logins.includes(id)) {
        console.log(req.query);
        let queryData = req.query;
        queryData.table = 'nakCoronaLights'
        let queryString = connection.createQueryStringFromObject(queryData);
        connection.asyncquery(queryString)
        res.redirect('/dashboard?message=Gespeichert')
    } else {
        res.redirect('/login?message=Nicht angemeldet')
    }
})


app.get('/delete', async(req, res) => {
    let id = req.cookies.id == undefined? '':req.cookies.id;

    if (logins.includes(id)) {
        connection.asyncquery(`DELETE FROM nakCoronaLights WHERE id=${req.query.id};`)
        res.redirect('/dashboard?message=Gelöscht')
    } else {
        res.redirect('/login?message=Nicht angemeldet')
    }
})
