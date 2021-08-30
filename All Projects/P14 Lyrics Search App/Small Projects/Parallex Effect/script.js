let sectionOne = document.getElementById("section-one");
let sectionTWO = document.getElementById("section-two");
let s2h2 = document.getElementById("s2h2");


let para = document.getElementById("para");




window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    console.log(offset);
    sectionOne.style.backgroundPositionY=offset *
    0.7 + "px" ;
    para.style.top=-offset * .1 + "px" ;

    
})


window.addEventListener("scroll", function()
{
    let offset = window.scrollY;
    para.style.top=-offset * 2 + "px" ;

    
})

