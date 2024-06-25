require('dotenv').config()
const exp = require('express')
const app = exp()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>')
})

app.get('/twit', (req, res) => {
    res.send('<li>Hello World</li>')
})

app.get('/login', (req, res) => {
    res.send('<h3>Okay Here Is the login page</h3>')
})

app.get('/entry', (req, res) => {
    res.send("<form method='post' target='/entry'><input type='text' id='txt' placeholder='Enter Your name . . .'/><input type='submit' value='Click Here'/></form>")
})

app.listen(port, () => {
    console.log(`I am testing My AppHere on port ${port}`)
})