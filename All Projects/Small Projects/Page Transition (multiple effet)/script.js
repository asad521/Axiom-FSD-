const box=document.querySelectorAll('#box');
const tmThere=document.getElementById('tmThere');
 




tmThere.onclick = function(e) {
    e.preventDefault();
    // let href = event.target.getAttribute('href');
    // alert( href ); // ...can be loading from the server, UI generation etc
    loadAnmiation();
     setTimeout(load,2000);
  };

function load () {
    window.open('services.html');

}


// tmThere.addEventListener('click', e => {
//     //  e.preventDefault();
//      loadAnmiation();
//      console.log(clickHere);

//  })



function loadAnmiation(){
    
// clickHere.addEventListener('click', e => {
    box.forEach(item =>
        {
            item.classList.add('box-animate');

        })
        setTimeout(removeClass, 4000);


// })

function removeClass(){
// const box=document.querySelectorAll('#box');

console.log(box);
box.forEach(item =>
    {
        // console.log('asdppppppp');
        item.classList.remove('box-animate');
    })
}
}