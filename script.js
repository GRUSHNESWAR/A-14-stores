let cart=[];

function addToCart(name,price){

cart.push({name,price});
updateCart();

}

function updateCart(){

const cartItems=document.getElementById("cart-items");
const cartTotal=document.getElementById("cart-total");
const cartCount=document.getElementById("cart-count");

cartItems.innerHTML="";

let total=0;

cart.forEach(item=>{

let li=document.createElement("li");

li.textContent=`${item.name} - $${item.price}`;

cartItems.appendChild(li);

total+=item.price;

});

cartTotal.textContent=total;
cartCount.textContent=cart.length;

}

function toggleCart(){
document.getElementById("cart").classList.toggle("active");
}

function clearCart(){
cart=[];
updateCart();
}


/* CURSOR GLOW */

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{
glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";
});


/* PARTICLES BACKGROUND */

const canvas=document.createElement("canvas");
document.getElementById("particles").appendChild(canvas);

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<60;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
speed:Math.random()*0.5
});

}

function animateParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.y-=p.speed;

if(p.y<0){
p.y=canvas.height;
}

ctx.fillStyle="rgba(0,229,255,0.4)";
ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();

});

requestAnimationFrame(animateParticles);

}

animateParticles();