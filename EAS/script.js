const wrapper = document.querySelector(".wrapper")

makeGrid(3)
function makeGrid(size){
    wrapper.replaceChildren()
    for(i=0;i<size*size;i++){
    const div = document.createElement("div")
    div.style.border="1px solid red"
    div.addEventListener("mouseenter",hoverBlue(div))
    wrapper.appendChild(div)
    wrapper.style.gridTemplateColumns="repeat("+size+",30px)"
}
}
function hoverBlue(div){
    div.style.backgroundColor="blue"
}
function promptChange(){
   let size = prompt("enter new grid size");
   
   makeGrid(size)
};