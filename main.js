// name1="gourav";
// // console.log(name1.length);
// function slice(str,start,end){
//     let newstring="";
//     for(let i=0;i<str.length;i++)
//     {if(i>=start && i<end){
//         newstring=newstring+str[i];

//     }

//     }
//     return newstring;
// }
// const ans=slice("heelo",2,4);
// console.log(ans);



// console.log(parseInt("hellos"));
// console.log(parseFloat("4"));
// const arr=[1,2,3,4];
// arr.push(5);
// console.log(arr);
// var arr1=[45,5];
// arr1.pop();
// console.log(arr1);
// const ar=[45,6,7,4];
// ar.shift();
// console.log(ar);
// const arr2=[0,1,2,3,4];
// arr2.unshift(0);
// console.log(arr2);
// function f1(){
//     console.log("dtr");
// }
// function f2(){
//     console.log("dtr1");
// }
// function caller(fnt){
//     fnt();
// }
// // caller(f1);
// // const arr=[1,2,4,5];
// // function dis(dtr){
// //     console.log(dtr);
// // }
// //  (arr.forEach(dis));


// class Animal{
//     constructor(name,legs,speaks){
//         this.name=name;
//         this.legs=legs;
//         this.speaks=speaks;        

//     }
// spek(){
// console.log(this.speaks);
//     }

// }
// let dog=new Animal("dog",2,"bhenkaoda");
//  dog.spek();

// function sum(){
//     for(let i=0;i<100000;i++){
//         sum=sum+i;

//     }
//     console.log(sum);

// }

// const beforedate=new Date();
// const timebefore=beforedate.getTime();
// sum();
// const afterdate=new Date();
// const timeafter=afterdate.getTime();
// console.log(timeafter-timebefore);


// const str='{"name":"gourav","gender":"male"}'
// const ans=JSON.parse(str);
// console.log(ans);
// const ans1=JSON.stringify(ans);
// console.log(ans["gender"]);
// function sum(){
//     let sum=0;
//     for(let i=0;i<1000;i++){
//         sum=sum+i;
//     }
//     console.log(sum);

// }7
// setTimeout(sum,10000);
// console.log("hello");
// let sum=0;

// function gandu(){
//     for(let i=0;i<1000000000000;i++){
//         sum=sum+i;
//     }
//     console.log(sum);
// }
// gandu();
// console.log("hello")

const fs=require("fs");
const { resolve } = require("path");
// function sum( cb){fs.readFile("file1.txt","utf8",function(err,data){
//     cb(data)
// })}
// function show(data){
//     console.log(data)
// }

// sum(show);
// console.log("hekko");
// const fs=require("fs");
// const { resolve } = require("path");

// function readingfile(){
//     return new Promise((resolve)=>{
//         fs.readFile("file1.txt","utf-8",function(err,data){
//             resolve(data)
//         })
//     })
// }
// function show(data){
//     console.log(data);
// }

// readingfile().then(show);
// let d=new Promise(function(resolve){
//     setTimeout(function(){
//         resolve("hello");

//     },1000)
   
// })
// function show(data){
//     console.log(data)

// // }
// // console.log(d)
// // d.then(show)
// // const d= new Promise(function(resolve){
// //     resolve("helll")
// // })
// // d.then(function(){
// //     console.log()
// // })
// // function calling(){
// //     const d=new Promise(function(resolve){
// //         resolve("brother")
// //     })
// //     return d
// // }
// // const value=calling()
// // console.log(value)
// // value.then(function(){
// //     console.log(value)
// // })

// function calling(data){
//     let p=new Promise (function(resolve){
//         resolve(data)
//     })
//     return p
// }
// async function main() {
//     const value=await calling("hi")
// console.log(value) 
// }
// main()


// // function getdata(data_id,fnt){
// //     fnt(data_id);
// // }
// // // show=(data)=>{
// // // console.log(data);
// // // }
// // // getdata(1,show)



// // getdata=(data,getnext)=>{
// //     setTimeout(()=>{
// //         console.log(data)
// //         if(getnext){
// //             getnext()
// //         }
// //     },2000)

// // }
// // getdata(1,()=>{
// //     getdata(2,()=>{
// //         getdata(3,()=>{
// //             getdata(4);
// //         })
// //     })
// // })

// // const promise=new Promise((resolve,reject)=>{
// // console.log("fffffffffff")
// // reject(123);
// // })
// // console.log(promise);

// givingpromise=()=>{
//     return new Promise((resolve)=>{
//         resolve("hii")
//     })
// }
// givingpromise().then((res)=>{
// console.log(res)
// })
// givingreject=()=>{
//     return new Promise((reject)=>{
//         reject("error");
//     })
// }
// givingreject().then((res)=>{
//     console.log(res)
// })


// function1=()=>{

//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("data1")
//         }, 4000);
// //     })

// }
// function2=()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("data2")
//         },4000)
//     })
// }

// console.log("frting data1")
// function1().then((res)=>{
//     console.log(res);
//     console.log("fetiching data 2")
//     function2().then((res)=>{
//         console.log(res)
//     })
// })



// getdata=(data)=>{
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("data",data)
//             resolve(data)
//         }, 2000);
//     })

// }
// getdata(1).then((res)=>{
//     console.log(res)
//     return getdata(2)
   
// }).then((res)=>{
//     console.log(res)
    
// })
getdata=(data)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{ console.log("data" ,data)
            resolve(data)},2000)
       
    })

}
(async  function (){
    await getdata(1)
    await getdata(2)

})()