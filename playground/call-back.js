/*setTimeout(()=>{
    console.log('two seconds delay')
},2000)
const names=['Bhargav','Mansi','Sriya']
const shortnames=names.filter((name)=>{
    return name.length<=4
})*/
const sum=(a,b,callback)=>{
    setTimeout(()=>{
        console.log('habu')
        const data=a+b
        callback(data)


    },2000)
    
}
sum(1,4,(data)=>{
    console.log(data)
})