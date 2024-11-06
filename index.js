//DB - 0 - install and load lowdb module
import express from 'express'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

const app = express();

//DB - 1 - connect to the DB
const defaultData = { comicTrackerData: [] };
const adapter = new JSONFile('db.json');
const db = new Low(adapter, defaultData);

//to parse JSON
app.use(express.json());

//add a route on server, that is listening for a post request
app.post('/nacomic', (req, res) => {
    console.log(req.body);
    let obj = {
        comic: req.body.name
    }

    //DB - 2 - add value to the DB
    db.data.comicTrackerData.push(obj);
    db.write()
        .then(() => {
            res.json({ task: "success" });
        })
})

app.use('/', express.static('public'));
app.listen(5000, () => {
    console.log('listening at localhost:5000');
})

//add route to get all comic track information
app.get('/getcomic', (req, res) => {
    //DB - 3 - fetch from the DB
    db.read()
    .then(() =>{
        let obj = {data: db.data.comicTrackerData}
        res.json(obj);
    })
})