const box=document.querySelectorAll('#box');
const boddy=document.querySelector('body');


window.addEventListener('load', e => {
    console.log('asdfu')
    
    box.forEach(item =>
        {
            item.classList.add('box-animate');
        })
        setTimeout(removeClass, 4000);

})

function removeClass(){
// const box=document.querySelectorAll('#box');

console.log(box);
box.forEach(item =>
    {
        // console.log('asdppppppp');
        item.classList.remove('box-animate');
        boddy.classList.add('show');
    })
}