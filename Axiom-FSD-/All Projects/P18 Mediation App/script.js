

text=document.getElementById('text');
container=document.getElementById('container');
mediate ();
function mediate (){
    text.innerText="BreathIn"
    container.className='container grow'; 
    
    setTimeout(()=>{
        text.innerText="Hold"
    },4000)

    setTimeout(()=>{
        text.innerText="BreathOut"
        container.className='container shrink'; 
        console.log('ture')
    },8000)



}
setInterval(mediate,12000)
// let counter=0;
// text.innerHTML="";

// setInterval(()=> {
// if(counter ==65){
//     clearInterval();
// } else {
// counter+=1;
// text.innerHTML=counter +"%";
// }
// },30)

// const contianer=document.getElementById('container');
// console.log(contianer)

