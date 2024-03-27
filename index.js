const port = 3000;

const app = require('./app');
const db = require('./database/db');


app.get('/', (req, res)=> {
    res.send("Welcome to PocketID Backend");
})

app.get('/test', (req, res)=> {
    res.send("Test API");
})

app.get('/about', (req, res)=> {
    res.send("About API");
})


app.listen(port, ()=> {
    console.log(`Server is running on port http://localhost:${port}`);
})