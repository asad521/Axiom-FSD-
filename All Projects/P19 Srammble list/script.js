const list= document.getElementById('list');
const check=document.getElementById('checkBtn');
console.log(list)
//correct list item
const richestPeople = [
    'Russia',
    'Canada',
    'USA',
    'Brazil',
    'Australia',
    'India',
    'Argentina',
]
//store list items
const listItems =[];

let dragIndex;
createList();

function createList() {
    richestPeople
    .map(a=>({value:a,sort:Math.random()}))
    .sort((a,b)=>a.sort - b.sort)
    .map(a => a.value)
    .forEach((item,index) =>{
        // console.log(item)
        //first method
        // list.innerHTML += `<li data-index="${index}">${item}</li>`;
        //second mehtod 
        
        const listItem=document.createElement('li');
        // listItem.classList.add('over');
        listItem.setAttribute('data-index',index);
        listItem.innerHTML +=  `       
        <span class="number"> ${index+1}</span>
        <div class="drag" draggable="true">
            <p class="personName">${item}</p>
        </div>`;
        list.appendChild(listItem)
        // console.log(list)
        listItems.push(listItem);
        // console.log(listItem)

        addEventListeners();

    })

}

function addEventListeners() {

    const drag=document.querySelectorAll('.drag');
    // console.log(drag)
    const dragList=document.querySelectorAll('li');

    drag.forEach(dragItem => {
        dragItem.addEventListener('dragstart', dragStart);
    })

    dragList.forEach(dragListItem => {
        dragListItem.addEventListener('dragover', dragOver);
        dragListItem.addEventListener('drop', drop);
        dragListItem.addEventListener('dragenter', dragEnter);
        dragListItem.addEventListener('dragleave', dragLeave);
    })
}

// functions

function  dragStart() {
    // console.log('Event=>','dragStart')
    dragStartIndex=this.closest('li').getAttribute('data-index')
    // console.log(dragStartIndex)
}
function  dragOver(e) {
    // console.log('Event=>','dragOver')
    e.preventDefault();
}

function  drop() {
    console.log('Event=>','drop')
    const dragEndIndex =this.getAttribute('data-index');
    swapItems(dragStartIndex,dragEndIndex);
    console.log("start index is+ " + dragStartIndex)
    console.log("end index is+ " + dragEndIndex)
    this.classList.remove('over');
}


 function swapItems(dragStartIndex,dragEndIndex) {

    const itemOne= listItems[dragStartIndex].querySelector('.drag');
    const itemTwo= listItems[dragEndIndex].querySelector('.drag');

    // console.log(itemOne,itemTwo) 
    listItems[dragStartIndex].appendChild(itemTwo)
    listItems[dragEndIndex].appendChild(itemOne)
}
function dragEnter(event) {
    console.log(event.target)
    console.log('this is enter event')
        console.log(34234)
        this.classList.add('over');

          
}

function  dragLeave() {
    console.log('Event=>','dragLeave')
    this.classList.remove('over');

}

//check button event

check.addEventListener('click',e =>{
 console.log(e)
 console.log(listItems);
 listItems.forEach((item,index) => {
     console.log(item)
    const name=item.querySelector('.drag p') .innerText.trim();
    console.log('name is new list ' + name)
    console.log('name is the old list =>' +richestPeople[index])
    if (name != richestPeople[index]) {
        console.log("wrong")
        item.classList.add('wrong');
    } else {
    console.log('True') 
    item.classList.remove('wrong');
    item.classList.add('right');
}
    })


})