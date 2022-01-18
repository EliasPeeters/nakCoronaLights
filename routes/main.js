const fs = require('fs');

app.get('/', async (req, res) => {
    // let data = JSON.parse(fs.readFileSync('./data.json'));
    let data = await connection.asyncquery('SELECT * FROM nakCoronaLights');
    console.log(data)
    res.render('main', {data: data})
})