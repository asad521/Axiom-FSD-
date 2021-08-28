const songBtn=document.getElementById('songBtn');
const artistBtn=document.getElementById('artistBtn');
const bothBtn=document.getElementById('bothBtn');
const user1=document.querySelector('.userI');
const user2=document.querySelector('.user2');


songBtn.addEventListener('click',e =>{
    user2.classList.remove('show');


})


artistBtn.addEventListener('click',e =>{
    user2.classList.remove('show');


})


bothBtn.addEventListener('click',e =>{
    user2.classList.add('show');

    
})








const first=document.getElementById('first');
const next=document.getElementById('next');
const last=document.getElementById('last');
const previous=document.getElementById('previous');
// const taskList=document.querySelector('.task-list');
const taskList=document.querySelector('.lyricsContainer');

let arrayList=[];
let page=0;
for(let i=1; i<=100; i++){
    let li=document.createElement('div');
    li.textContent =`This is example text. It grabs first 10 data entries from array and print it here.
    .Second Entry will be added in the Second Page.User can Select no of data entries per page${i}`
    arrayList.push(li);
}
console.log(arrayList)

for (let i=0; i<page+1; i++) {
    taskList.appendChild(arrayList[i])
}

next.addEventListener('click', e=>{
console.log("in inext")

page== (arrayList.length -1)|| (page===100)? (page=0):(page+=1);
taskList.innerHTML ="";
console.log("false");

for (let i=page; i<page+1;i++){
    console.log("true")
    taskList.appendChild(arrayList[i])
}

})
// previous buttion
previous.addEventListener('click', e=>{
    console.log("in inext")
    
    page== (0) ? (page=arrayList.length-1):(page-=1);
    taskList.innerHTML ="";
    console.log("false");
    
    for (let i=page; i<page+1;i++){
        console.log("true")
        taskList.appendChild(arrayList[i])
    }
    
    })

    // first buttion
first.addEventListener('click', e=>{
    console.log("in inext")
    
    page= 0;
    taskList.innerHTML ="";
    console.log("false");
    
    for (let i=page; i<page+1;i++){
        console.log("true")
        taskList.appendChild(arrayList[i])
    }
    
    })

    last.addEventListener('click', e=>{
        taskList.innerHTML ="";
        console.log("false");
        console.log(arrayList.length + 'this is array length')
        page=arrayList.length;
        console.log(page + 'this is page')
        for (let i=page; i<arrayList.length+1;i++){
            console.log('in loop')
            taskList.appendChild(arrayList[99])
        }
        
        })
