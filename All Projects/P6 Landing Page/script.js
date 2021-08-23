const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal-container');
const nav=document.getElementById('navigation-menu');

// toggle event
toggle.addEventListener('click', () => {
document.body.classList.toggle('show-nav');
// nav.classList.toggle('show-nav2');
// toggle.classList.toggle('show-toggle');
// console.log(toggle.innerHTML)
console.log("adsfsd");
});

//model
open.addEventListener('click' , () =>  {
    modal.classList.add('show-modal');


});

close.addEventListener('click' , () =>  {
    modal.classList.remove('show-modal');
});

//hide modal 

window.addEventListener('click', e => 
e.target == modal ? modal.classList.remove('show-modal') : false);