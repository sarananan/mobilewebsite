let form=document.querySelector("#form")
let names=document.querySelector("#sname")
let mail=document.querySelector("#mail")
let pass=document.querySelector("#pass")
let txt1=document.querySelector("#txt")
form.addEventListener('submit',(e)=>{
  e.preventDefault()  
  check()
})

function check(){
   let nameval=names.value.trim();
   let mailval=mail.value.trim();
   let passval=pass.value.trim();
   let txtval=txt1.value.trim();
   if(txtval===''){
      err(txt1,'please enter name')
   }else{
     succes(txt1)
   }

   if(nameval===''){
    err(names,'please enter the value')
   }
   else{
    succes(names)
   }

   if(mailval===''){
    err(mail,"please enter your mail id")
   }
   else{
    succes(mail)
   }

   if(passval==''){
    err(pass,"Enter the password")
    return false
   }
   if(passval.length<8){
    err(pass,"please  provide atleast 8 digit")
   }else if(passval===''){
    err(pass,'please enter the password')
   }
   else{
    succes(pass)
   }
}



function succes(parent){
    let p=parent.parentNode.querySelector("p").innerHTML='succes'
     
}

function err(parent,msg){
   let e= parent.parentNode.querySelector("p").innerHTML=msg
}