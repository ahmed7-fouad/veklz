const dashboard=document.getElementById('dashboard');
const booking=document.getElementById('booking');
const cars_selling=document.getElementById('sell_cars');
const assets=document.getElementById("assets");
const buing_cars=document.getElementById('buy_cars');
const services=document.getElementById('services');
const calender =document.getElementById('calender');
const message=document.getElementById('message');
const setting =document.getElementById('setting');

const url=window.location.pathname;
const url_name=url.substring(1);
if(url_name=='index.html'){

dashboard.classList.add("active");
}
else if(url_name=='assets.html'){
    assets.classList.add("active");
}
else if(url_name=='booking.html'){
    booking.classList.add("active");
}
else if(url_name=="sell.html"){
cars_selling.classList.add("active");
}
else if(url_name=='buy_cars.html'){
    buing_cars.classList.add("active");
}
else if(url_name=='services.html'){
    services.classList.add('active');
}
else if(url_name=='calender.html'){
    calender.classList.add("active");
}
else if(url_name=='message.html'){
message.classList.add('active');
}
else{
    setting.classList.add('active');
}

let aside=document.querySelector("aside");
let bars= document.getElementById("nav_bars");
let aside_links=document.querySelectorAll('aside ul li');
aside_links_array=Array.from(aside_links);

if(window.innerWidth<=768){
aside_links_array.forEach((link)=>{ 

    link.addEventListener("click" , function(){
       aside.style.cssText="visibility:hidden;";
    })
})
}
bars.addEventListener('click' , function(){
    aside.style.cssText="visibility:visible;";
    
})
