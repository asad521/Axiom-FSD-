const name = document.querySelectorAll('path');
 console.log(name);

 for (let i=0; i<name.length; i++) {
     console.log(i);
     console.log(name[i].getTotalLength());
 }

// function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
//     let paths = document.querySelectorAll("path");
//     let mode=repeat?'infinite':'forwards'
//     for (let i = 0; i < paths.length; i++) {
//         const path = paths[i];
//         const length = path.getTotalLength();
//         path.style["stroke-dashoffset"] = `${length}px`;
//         path.style["stroke-dasharray"] = `${length}px`;
//         path.style["stroke-width"] = `${strokeWidth}px`;
//         path.style["stroke"] = `${strokeColor}`;
//         path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
//         path.style["animation-delay"] = `${i * delay}s`;
//     }
// }
// setTextAnimation(1,10,2,'linear','#061310',false);

