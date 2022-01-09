const express = require('express');
// const session = require('express-session');

//importing jwt token
const jwt = require('jsonwebtoken')

const  cors=require('cors')

//importing data.service
const dataService = require('./services/data.service')

const app = express();

//To parse json
app.use(express.json())


app.use(cors({
    origin:'http://localhost:4200',
    credentials:true
}))


//Token validation middleware
const jwtMiddleware = (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
        const data = jwt.verify(token, 'supersecretkey123')
        req.currentuname = data.currentNo;
        next()
    }
    catch {
        const rslt = {
            statuscode: 401,
            status: true,
            message: "Please login!!"
        }
        res.status(rslt.statuscode).json(rslt)
    }
}

app.post('/register', (req, res) => {
    console.log(req.body);
    dataService.register(req.body.name,req.body.uname,req.body.password)
    .then(result=>{
        res.status(result.statuscode).json(result)
    })
})


app.post('/login', (req, res) => {
    console.log(req.body);
    dataService.login(req.body.uname, req.body.password)
    .then(result=>{
        res.status(result.statuscode).json(result)
    })
})

app.post('/getAlldata',jwtMiddleware, (req, res) => {
    dataService.getAlldata(req)
    .then(result=>{
        res.status(result.statuscode).json(result)
    })
})

app.post('/checklistname',jwtMiddleware,(req,res)=>{
    console.log(req.body);
    dataService.checklistname(req,req.body.listname)
    .then(result=>{
        res.status(result.statuscode).json(result)
    })
})


app.post('/newlist',jwtMiddleware,(req,res)=>{
    console.log(req.body);
    dataService.createnewlist(req,req.body.listname)
    .then(result=>{
        res.status(result.statuscode).json(result)
    })
})


app.post('/editlist',jwtMiddleware,(req,res)=>{
    console.log(req.body);
    dataService.editListName(req,req.body.oldlistname,req.body.newlistname)
    .then(result=>{
        res.status(result.statuscode).json(result)
    })
})

app.post('/deleteList',jwtMiddleware,(req,res)=>{
    console.log(req.body);
    dataService.deleteList(req,req.body.listname)
    .then(result=>{
        res.status(result.statuscode).json(result)
    })
})


app.post('/newtask',jwtMiddleware,(req,res)=>{
    console.log(req.body);
    dataService.createnewtask(req,req.body.listname,req.body.task)
    .then(result=>{
        res.status(result.statuscode).json(result)
    })
})

app.post('/editTask',jwtMiddleware,(req,res)=>{
    console.log(req.body);
    dataService.editTask(req,req.body.listname,req.body.task)
    .then(result=>{
        res.status(result.statuscode).json(result)
    })
})

app.post('/deleteTask',jwtMiddleware,(req,res)=>{
    console.log(req.body);
    dataService.deleteTask(req,req.body.listname,req.body.task)
    .then(result=>{
        res.status(result.statuscode).json(result)
    })
})


// app.post('/create',jwtMiddleware, (req, res) => {
//     console.log(req.body);
//     dataService.create(req,req.body.event_data, req.body.event_date)
//     .then(result=>{
//         res.status(result.statuscode).json(result)
//     })
// })


// app.post('/view',jwtMiddleware, (req, res) => {
//     console.log(req.body);
//     dataService.view(req)
//     .then(result=>{
//         res.status(result.statuscode).json(result)
//     })
// })

// app.post('/editEvent',jwtMiddleware, (req, res) => {
//     console.log(req.body);
//     dataService.editEvent(req,req.body.eventData,req.body.eventDate,req.body.uid)
//     .then(result=>{
//         res.status(result.statuscode).json(result)
//     })
// })


// app.post('/deleteEvent',jwtMiddleware, (req, res) => {
//     console.log(req.body);
//     dataService.deleteEvent(req,req.body.uid)
//     .then(result=>{
//         res.status(result.statuscode).json(result)
//     })
// })



app.listen(3000, () => {
    console.log("Server started at port 3000");
})