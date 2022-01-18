app.get('/download', (req, res) => {
    res.sendFile(__dirname + '/Pflanzen oder Tierzelle.pdf')
})