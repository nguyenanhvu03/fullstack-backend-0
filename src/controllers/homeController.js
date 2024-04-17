
const getHomepage = (req, res) => {
    //process data
    //call model
    res.send('Hello World! nodemon')
}
const getABC = (req, res) => {
    // res.send('Check ABC')
    res.render('xample.ejs')
}

module.exports = {
    getHomepage, getABC
}