const fs = require('fs')

app.get('/', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./data.json'));
    res.render('main', {data: data.data})
})