const box=document.querySelectorAll('#box');
const page2=document.getElementById('page');




page2.addEventListener('click', e => {
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
    })
}