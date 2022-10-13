const wrapper = document.querySelector(".wrapper")
let grid_color = "black"
let grid_size=64

makeGrid(grid_size,grid_color)
function makeGrid(size,color){
    document.querySelector(".btn").innerHTML=size+" x "+size+" Grid"

    wrapper.replaceChildren()
    for(i=0;i<size*size;i++){
    const div = document.createElement("div")
    let shade = 130
    div.addEventListener("mouseenter",function(){
        
        if(color=="black"){
        div.style.backgroundColor=color
        } 
        else if(color=="rgb"){
            let random_color="#"
            random_color += Math.floor(Math.random()*16777215).toString(16)
            div.style.backgroundColor=random_color
        }
        else if(color=="grayscale"){
            shade=(shade-13).toString();
            div.style.backgroundColor="rgb("+shade+","+shade+","+shade+")"
        }
    })
    wrapper.appendChild(div)
    wrapper.style.gridTemplateColumns="repeat("+size+",1fr)"
}}
    
function promptChange(){
   let size = prompt("enter your new grid size(min 2, max 100)");
   if(size>1 && size <100){
    grid_size=size
    makeGrid(size,grid_color)
   } else{
    alert("Use any integer value from 2 to 100")
   }
}
const colorBtns = document.querySelectorAll(".color_btn")
colorBtns.forEach(btn=>{
    btn.addEventListener("click",()=>{
        removeActiveClasses()
        btn.classList.add("active")
        if(btn.classList.contains("black")){
            colorChange("black")
        }
        else if(btn.classList.contains("rgb")){
            colorChange("rgb")
        }
        else if(btn.classList.contains("grayscale")){
            colorChange("grayscale")
        }
    })
}
)
function removeActiveClasses(){
    colorBtns.forEach(btn=>{
        btn.classList.remove("active")
    })
}
function colorChange(str){
    grid_color=str
    makeGrid(grid_size,grid_color)
}
