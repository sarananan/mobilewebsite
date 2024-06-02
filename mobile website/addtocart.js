let a=[
    {
       image:'images/mobile.jpg',
       name:"mobile",
       rate:15000,
    }
]
let b=a.map((res)=>{
    return res
})
var i=0;
let c=document.querySelector(".root").innerHTML=b.map((res)=>{
    var{image,name,rate}=res;
    return(`
    <div class="imgcon">
    <img src="${image}" id="img" alt="">
    <h1 class="h1">${name}</h1>
    <button onclick="addtocart(${i++})">Addcart</button>
</div>
    `)
}).join('')

var cart=[];
function addtocart(a){
    cart.push({...b[a]})
    Show()
}

function Show(){
    let test=document.querySelector(".cart").innerHTML=cart.map((res)=>{
        var j=0
         var{image,name,rate}=res
         return(`
         <div class="imgcon1">
         <img src="${image}" id="img" alt="">
         <h1 class="name">${name}</h1>
         <button onclick="removecart(${j++})">removecart</button>
     </div>
         `)
    })
   
}
function removecart(res){
    cart.splice(res,1)
    Show()
}