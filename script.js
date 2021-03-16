

let sides=window.prompt("Please enter number of squares (maximum 100) per side:", "64");
    
function gridDrawing(sides){
   
    const grid = document.querySelector('#grid');
    let squares=sides*sides;
    for (i = 1; i <= squares; i++) {
        var template = document.createElement('div');
        template.className = 'template';
        grid.appendChild(template);
        grid.style.gridTemplateColumns=`repeat(${sides},1fr)`;
        grid.style.gridTemplateRows=`repeat(${sides},1fr)`;
    }
}

function draw(){
    const templates = document.querySelectorAll('.template');
    templates.forEach(template =>
        template.addEventListener('mouseover', () =>  
            template.classList.add('template-hover')));
}

function clearBoard(){
    const templates = document.querySelectorAll('.template');
    templates.forEach(template=> template.classList.remove('template-hover'));
}

const clear=document.querySelector('#clear');
clear.addEventListener('click', clearBoard);


gridDrawing(sides);
draw();