// let img = document.getElementById("image");
// img.src = 'sqi.png'
let see = document.getElementById("names"); 
let names = ['Ayo','Emma','bolaji','Daniel','Olaoluwa'];
console.log(names);
let index = 0;
see.innerHTML = names[index] 

function next() {
    if (index==names.length-1) {
        index = 0
    } else {
        index ++
    }
    see.innerHTML = names[index] 
}

function prev() {
    if (index==0) {
        index = names.length -1
    } else {
        index --
    }
    see.innerHTML = names[index] 
}
