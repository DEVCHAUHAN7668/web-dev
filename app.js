let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelectorAll("#reset-btn");
let turnO = true;// player X, playerO

const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],

];

boxes.forEach((box) => {
    box.addEventListner("click", () =>{
        console.log("box was click");
        box.innerText ="abcd";
    });
});

