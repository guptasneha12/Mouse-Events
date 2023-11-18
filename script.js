const mLeave=document.querySelector('.mLeave');
const mOut=document.querySelector('.mOut');
const mOver=document.querySelector('.mOver');
const mEnter=document.querySelector('.mEnter');
const mUp=document.querySelector('.mUp');
const mMove=document.querySelector('.mMove');
const mClick=document.querySelector('.mClick');
const mDblClick=document.querySelector('.mDblClick');
const mWheel=document.querySelector('.mWheel');
const mDown=document.querySelector('.mDown');
const msgEl=document.querySelector('.msg');



mLeave.addEventListener("mouseleave",function(){
  msgEl.textContent="You left the element 😢";
})

mOut.addEventListener("mouseout",function(){
  msgEl.textContent="You Left out the mouse 😔";
})

mOver.addEventListener("mouseover",function(){
    msgEl.textContent="You move over the mouse 🙄";
})

mEnter.addEventListener("mouseenter",function(){
    msgEl.textContent="You entered the element 😃";
})

mUp.addEventListener("mouseup",function(){
    msgEl.textContent="You have released your mouse 😡";
})

mMove.addEventListener("mousemove",function(){
    msgEl.textContent="You are moving the mouse 😠";
})

mClick.addEventListener("click",function(){
    msgEl.textContent="You clicked the mouse 👍";
})


mDblClick.addEventListener("dblclick",function(){
    msgEl.textContent="You double clicked the mouse ✌️";
})

mWheel.addEventListener("mousewheel",function(){
    msgEl.textContent="You are moving the mouse wheel 🤪";
})

mDown.addEventListener("mousedown",function(e){
console.log("Mouse move down", e);
    msgEl.textContent="You are moving mouse down 🤨";
})







