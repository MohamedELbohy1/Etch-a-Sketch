
let color='black';
const random =document.querySelector('.random');
const reset =document.querySelector('.reset');
const select=document.querySelector('.select');

select.addEventListener('click',function(){
    console.log("The size Selected");
    let size=selectsize();
    setcolor('black');
    createsquares(size);
})

random.addEventListener('click',function(){
    console.log("The color changed");
    setcolor('change');
});
reset.addEventListener('click',function(){
    resetcolor();
})

function createsquares(size){
    let container=document.querySelector('.container');
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns =`repeat(${size},1fr)`;
    container.style.gridTemplateRows =`repeat(${size},1fr)`;
    let numofsquares=size*size;
    for(let i =0 ;i <numofsquares;i++){
        let square =document.createElement('div');
        square.classList.add("cell");
        container.style.backgroundColor = 'white';
        square.addEventListener('mouseover',colordiv);
        setcolor('black');
        
        container.insertAdjacentElement('beforeend',square);
    }


}

createsquares(16);
function selectsize(){
    let input =prompt('What Would like the Size Of the sketch');
    let message=document.querySelector('.message');
    if(input==''){
        message.innerHTML='Please Enter The size';
    }
    else if(input<=0|| input>100){
        message.innerHTML='Please Enter The number between 1 and 100';
    }
    else {
        message.innerHTML='Now You Start';
        return input;
    }
}
function colordiv(){
    if(color=='change'){
        
        this.style.backgroundColor=`hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else {
        this.style.backgroundColor='black';
    }
}

function setcolor(colorchoice){
color=colorchoice;

}
function resetcolor(){
    let container = document.querySelector(".container");
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "white"));
}