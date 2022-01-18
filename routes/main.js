const fs = require('fs');

app.get('/', async (req, res) => {
    // let data = JSON.parse(fs.readFileSync('./data.json'));
    let data = await connection.asyncquery('SELECT * FROM nakCoronaLights ORDER BY nakCoronaLights.orderNumber');
    res.render('main', {data: data})
})