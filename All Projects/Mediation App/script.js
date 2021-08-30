

text=document.getElementById('text');
let counter=0;
text.innerHTML="";

setInterval(()=> {
if(counter ==65){
    clearInterval();
} else {
counter+=1;
text.innerHTML=counter +"%";
}
},30)
