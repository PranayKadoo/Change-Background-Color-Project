
let colors = ["red", "pink","orange", "yellow", "green", "blue", "black"];
let i= -1;
function bgcolor(){
    i++;
    if(i<7)
   { 
        let container = document.getElementById("container");
        container.style.background = colors[i];
    }
   else{
    container.style.background = "violet";
       i=-1;
   }
}