console.log('hjhj')
var hedi=require("express")
var generator=require('generate-password')
// creating password
var password=generator.generate({
    length:10,
    numbers:true
})
console.log(password)
const he=hedi()
var tt=require("fs")
tt.readFile("welcome.txt",(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data.toString())

})
he.listen(3000,()=>{
    console.log("running")
})
