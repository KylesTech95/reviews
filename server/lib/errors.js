module.exports = function(app){
    // error middleware
    app.use((req, res, next) => {
        res.status(404).send("Sorry can't find that!")
      })
      app.use((err, req, res, next) => {
        console.error(err.stack)
        res.status(500).send('Something broke!')
      })
    
    }