document.querySelector(".three-dash").addEventListener("click",function()
{
    document.querySelector(".login").classList.add('remove');
    document.querySelector(".three-dash").classList.add('remove');
    document.querySelector(".sidebar").classList.remove('deactive');
    document.querySelector(".sidebar").classList.add('hide-scrl');
    document.querySelector("html").classList.add('hide-scrl');

});
document.querySelector(".x").addEventListener("click",function()
{
    document.querySelector(".login").classList.remove('remove');
    document.querySelector(".three-dash").classList.remove('remove');
    document.querySelector(".sidebar").classList.add('deactive');
    document.querySelector(".sidebar").classList.remove('hide-scrl');
    document.querySelector("html").classList.remove('hide-scrl');

});
ScrollReveal({ 
    reset: true, 
    distance:'60px',
    duration:2500,
    delay:100        
});
var c1=0; var c2=0;
if(c1===0)
{
ScrollReveal().reveal('.body-1,.body-3',{delay:100,origin:'bottom'});
c1++;
}
if(c2===0)
{
ScrollReveal().reveal('.body-2-desc,.img-2-box,.body-4-desc,.img-4-box',{delay:100,origin:'bottom'});
c2++;
}