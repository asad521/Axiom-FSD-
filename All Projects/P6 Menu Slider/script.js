const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal-container');

// toggle event
toggle.addEventListener('click', () => {
document.body.classList.toggle('show-nav');
console.log(adsfasd);
});

//model
open.addEventListener('click' , () =>  {
    modal.classList.add('show-modal');
    toggle.classList.add('show-toggle');

});

close.addEventListener('click' , () =>  {
    modal.classList.remove('show-modal');
});

//hide modal 

window.addEventListener('click', e => 
e.target == modal ? modal.classList.remove('show-modal') : false);