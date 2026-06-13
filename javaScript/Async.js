
// callback example

const { reject } = require("async");

function getdata(dataid, getnextData){

    setTimeout(()=>{
        console.log("dataid :"+ dataid)
        if(getnextData){
            getnextData()
        }

    },2000);
}
getdata(1,()=>{
    getdata(8,()=>{

    })

})

// promises 

function getData(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("dataId :"+ dataId)
            resolve()

        },2000)
    })
}
getData(1).then(()=>{
    return getData(8)
}).then(()=>{

}).catch((err)=>{
    console.log(err)
})