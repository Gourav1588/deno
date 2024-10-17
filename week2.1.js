// const express=require('express')
// const port=3000
// const app=express()
// app.get('/',(req,res)=>{
//     res.send('hello')


// })



// app.post('/conversation',(req,res)=>{
//     console.log(req.headers);
//     res.send("hello");
// })
// app.listen(port)


// const express=require("express")
// const app=express()
// const port=3000;
// app.use(express.json())
// app.post('/',(req,res)=>{
//     const ans=req.query
//     console.log(ans)
// res.send("hello")
// })

// app.listen((port))


// const express=require("express")
// const app=express()
// const port=3000

// sumcalculate=(n)=>{
// return n*n;
// }

// app.get('/',(req,res)=>{
//     const s=req.query.n
//     console.log(s)
//     const ans=sumcalculate(s)
//     res.send(ans.toString())

// })

// app.listen(port)


// const express = require("express")
// const app = express()
// const port = 3000


// const patient =
//     [{
//         name: "hari",
//         noofkindney: [{
//             status: true
//         }],


//         age: 10
//     }]


// app.get('/', (req, res) => {
//     const patients = patient[0]
//     const name = patients.name


// const array=[]
// const express=require("express")
// const app=express()
// const port=3000
// app.use(express.json())
// app.post("/",(req,res)=>{
//     const{email,password}=req.body
//     console.log("done")
//     if(!email || !password){
//         return res.status(400).json({
//             message:"fuck you"
//         })
//     }
//     array.push(req.body)
//     res.json({
//         message:"done",
//         email:email,
//         body:array
//     })
// })
// app.listen(port)

Transform=(i)=>{
return i*2
}
let arr=[1,2,3,4]
 const ans=arr.map(Transform)
 console.log(ans)