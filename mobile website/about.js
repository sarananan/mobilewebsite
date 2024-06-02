let product=[
    {
        image:"images/cover.jpg",
        product:"mobile cover",
        about:" this is the popular mobile cover and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/cover1.jpg",
        product:"mobile cover",
        about:" this is the popular mobile cover and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/cover2.jpg",
        product:"mobile cover",
        about:" this is the popular mobile cover and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/cover3.jpg",
        product:"mobile cover",
        about:" this is the popular mobile cover and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/cover4.jpg",
        product:"mobile cover",
        about:" this is the popular mobile cover and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/cover5.jpg",
        product:"mobile cover",
        about:" this is the popular mobile cover and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/cover6.jpg",
        product:"mobile cover",
        about:" this is the popular mobile cover and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/cover7.jpg",
        product:"mobile cover",
        about:" this is the popular mobile cover and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/cover8.jpg",
        product:"mobile cover",
        about:" this is the popular mobile cover and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/cover9.jpg",
        product:"mobile cover",
        about:" this is the popular mobile cover and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/cover10.jpg",
        product:"mobile cover",
        about:" this is the popular mobile cover and it is available to sales product",
        price:"$99 only"
    }

]
let mapproduct=[...new Set(product.map((res)=>{
    return res
}))]
document.getElementById("about1").innerHTML=mapproduct.map((res)=>{
    var{image,product,about,price}=res
    return(`
    <div class="pro">
    <div class="abs">Available Offer</div>
    <img src="${image}" alt="" id="proimg">
    <div class="foot">
        <div class="name">${product}</div>
        <div class="price">${price}</div>
        <a href="tel:+917010998400">Call Now</a>
    </div>
</div>

    `)
}).join("")

let mobile=[
    {
        image:"images/mobile1.jpg",
        product:"mobile",
        about:"It is the popular mobile and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/mobile2.jpg",
        product:"mobile",
        about:"It is the popular mobile and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/mobile3.jpg",
        product:"mobile",
        about:"It is the popular mobile and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/mobile4.jpg",
        product:"mobile",
        about:"It is the popular mobile and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/mobile5.jpg",
        product:"mobile",
        about:"It is the popular mobile and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/mobile6.jpg",
        product:"mobile",
        about:"It is the popular mobile and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/mobile7.jpg",
        product:"mobile",
        about:"It is the popular mobile and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/mobile8.jpg",
        product:"mobile",
        about:"It is the popular mobile and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/mobile9.jpg",
        product:"mobile",
        about:"It is the popular mobile and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/mobile10.jpg",
        product:"mobile",
        about:"It is the popular mobile and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/mobile11.jpg",
        product:"mobile",
        about:"It is the popular mobile and it is available to sales product",
        price:"$99 only"
    },
    {
        image:"images/mobile910.jpg",
        product:"mobile",
        about:"It is the popular mobile and it is available to sales product",
        price:"$99 only"
    }
]
let mobiles=[...new Set(mobile.map((res)=>{
    return res
}))]
document.getElementById("about2").innerHTML=mobiles.map((res)=>{
    var{image,product,about,price}=res
    return(`
    <div class="pro">
    <div class="abs">Available Offer</div>
    <img src="${image}" alt="" id="proimg">
    <div class="foot">
        <div class="name">${product}</div>
        <div class="price">${about}</div>
        <a href="tel:+917010998400">Call Now</a>
    </div>
</div>

    `)
}).join("")

let charger=[
    {
        image:"images/charger.jpg",
        product:"charger",
        about:"It is the popular charger and it is available to sales product",
        price:"$299 only"
    },
    {
        image:"images/charger1.jpg",
        product:"charger",
        about:"It is the popular charger and it is available to sales product",
        price:"$299 only"
    },
    {
        image:"images/charger2.jpg",
        product:"charger",
        about:"It is the popular charger and it is available to sales product",
        price:"$299 only"
    },
    {
        image:"images/charger3.jpg",
        product:"charger",
        about:"It is the popular charger and it is available to sales product",
        price:"$299 only"
    },
    {
        image:"images/charger4.jpg",
        product:"charger",
        about:"It is the popular charger and it is available to sales product",
        price:"$299 only"
    },
    {
        image:"images/charger5.jpg",
        product:"charger",
        about:"It is the popular charger and it is available to sales product",
        price:"$299 only"
    },
    {
        image:"images/charger6.jpg",
        product:"charger",
        about:"It is the popular charger and it is available to sales product",
        price:"$299 only"
    }
]
let chargermap=[...new Set(charger.map((res)=>{
    return res
}))]
document.getElementById("about3").innerHTML=chargermap.map((res)=>{
    var{image,product,about,price}=res
    return(`
    <div class="pro">
    <div class="abs">Available Offer</div>
    <img src="${image}" alt="" id="proimg">
    <div class="foot">
        <div class="name">${product}</div>
        <div class="price">${about}</div>
        <a href="tel:+917010998400">Call Now</a>
    </div>
</div>

    `)
}).join("")

