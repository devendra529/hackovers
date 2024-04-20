const left=document.queryselector('.left');
const right=document.queryselector('.right');
const slider=document.queryselector('.slider');
const image=document.queryselector('.image');

let slideNumber=1;
const length = images.length;

const nextSlide= ()=>{
    slider.style.transform = 'translateX(-${slideNumber*800}px)';
    slidenumber++;

};
const prevSlide = ()=>{
    slider.style.transform='translateX(-${(slidenumber*800}px)';
    slidenumber--;

};
const getFirstSlide=()=>{
    slider.style.transform='translateX0(px)';
    slidenumber=1;

};
const getlastSlide=()=>{
    slider.style.transform='translateX(-${(slidenumber-1)*800}px)';
    slidenumber=length;

};
right.addEventListener('click',()=>{
    slidenumber<length? nextSlide ():getFirstSlide();

});
left.addEventListener('click',()=>{
    slidenumber<1? prevSlide ():getLastSlide();

});
alert("devendra");