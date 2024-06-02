let menucontrol=document.getElementById("menu1")
let menu=document.querySelector('.bur')
menu.addEventListener('click',add)
function add(){
    // alert("hhhhh")
    menucontrol.classList.toggle("controlbtn")
}
let items=[
    {
        image:"images/cover.jpg",
        product:"mobile cover",
        about:" this is the popular mobile cover and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/charger.jpg",
        product:"charger",
        about:" this is the popular mobile cover and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/headphone.jpg",
        product:"headphone",
        about:" this is the popular mobile cover and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/pendrive.jpg",
        product:"pendrive",
        about:" this is the popular mobile cover and it is available to sales product",
        price:"$99 only"
    }
]
let itemmap=[...new Set(items.map((res)=>{
    return res
}))]
document.querySelector(".items").innerHTML=itemmap.map((res)=>{
    var{image,product,about,price}=res
    return(`
    <div class="box">
    <div class="popular"><img src=${image} alt="" id="boximg"></div>
    <p class="footer">
    <h1 id='fh' style='text-transform:capitalize; font-size:100%'>${product}</h1>
    <p>${about}</p>
    <button id='btn1' class="btn">${price}</button>
    </p>
    </div>
    `)
}).join('')

