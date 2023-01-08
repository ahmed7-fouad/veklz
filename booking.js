let counter=0;
heart_shape=document.querySelectorAll(".heart_shape");
let customer=document.querySelector(".person");

heart_shape.forEach(heart=>{
    heart.addEventListener("click",function(){
        if(counter==0){
        heart.children[1].style.cssText="display:block !important";
        counter=1;
        ++heart.parentElement.parentElement.parentElement.children[2].children[0].children[0].children[1].innerHTML;
        }
        else{
            counter=0;
            heart.children[1].style.cssText="display:none !important";
            --heart.parentElement.parentElement.parentElement.children[2].children[0].children[0].children[1].innerHTML;
        }
    })
})
category=document.getElementById("category");
car_category=Array.from(category);
car_cards=document.querySelectorAll(".cars_gallery .container .box");

category.onchange=function(){
car_cards.forEach((card)=>{
    card.style.cssText="display:none";
})
if(category.value=="Merc"){
document.querySelectorAll('.mercedes').forEach((car)=>{
    car.style.cssText="display:block";
})
}
else if(category.value=="Audi"){
    document.querySelectorAll('.audi').forEach((car)=>{
        car.style.cssText="display:block";
    })
}
else if(category.value=="Dezire"){
    document.querySelectorAll('.dezire').forEach((car)=>{
        car.style.cssText="display:block";
    })
}
else{
    document.querySelectorAll('.toyota').forEach((car)=>{
        car.style.cssText='display:block';
    })
}
}

