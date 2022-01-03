const first=document.getElementById('first');
const next=document.getElementById('next');
const last=document.getElementById('last');
const previous=document.getElementById('previous');
const taskList=document.querySelector('.task-list');

let arrayList=[];
let page=0;
for(let i=1; i<=100; i++){
    let li=document.createElement('li');
    li.textContent =`Example Text Here ${i}`
    arrayList.push(li);
}
console.log(arrayList)

for (let i=0; i<page+10; i++) {
    taskList.appendChild(arrayList[i])
}

next.addEventListener('click', e=>{
console.log("in inext")

page== (arrayList.length -10) ? (page=0):(page+=10);
taskList.innerHTML ="";
console.log("false");

for (let i=page; i<page+10;i++){
    console.log("true")
    taskList.appendChild(arrayList[i])
}

})
// previous buttion
previous.addEventListener('click', e=>{
    console.log("in inext")
    
    page== (0) ? (page=arrayList.length-10):(page-=10);
    taskList.innerHTML ="";
    console.log("false");
    
    for (let i=page; i<page+10;i++){
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
    
    for (let i=page; i<page+10;i++){
        console.log("true")
        taskList.appendChild(arrayList[i])
    }
    
    })

    last.addEventListener('click', e=>{
        console.log("in inext")
        page= arrayList.length-10;
        taskList.innerHTML ="";
        console.log("false");
        
        for (let i=page; i<page+10;i++){
            console.log("true")
            taskList.appendChild(arrayList[i])
        }
        
        })