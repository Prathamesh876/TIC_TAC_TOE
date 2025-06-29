let bx = document.querySelectorAll(".bx");
let startPointX = true;
let displayWinLogos=document.querySelector(".display-logos");
let countX=document.querySelector(".num-cntX");
let countO=document.querySelector(".num-cntO");
let reset=document.getElementById("reset");

reset.addEventListener("click",()=>{
    location.reload();
});

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];



bx.forEach((box) => {
    box.addEventListener("click", () => {

        //step 1 simple understabd but lots of code
        if (box.innerText === "") {
            if (startPointX === true) {

                box.innerText = "x";
                startPointX = false;

            }
            else {
                box.innerText = "o";
                startPointX = true;
            }
          
        }
         checkWinner();

//   winner();

        ///step 2 perfect

        // if (box.innerText !== "") return true;

        // box.innerText = startPointX ? "x" : "o";
        // startPointX = !startPointX;

    });

});


let Xcouny = localStorage.getItem("Xcouny") ? parseInt(localStorage.getItem("Xcouny")) : 0;
let Ocouny = localStorage.getItem("Ocouny") ? parseInt(localStorage.getItem("Ocouny")) : 0;

countX.innerText = `${Xcouny}`;
countO.innerText = `${Ocouny}`;

const counter = (winnerLogo) => {
    if (winnerLogo === "x") {
        Xcouny++;
        countX.innerText = `${Xcouny}`;
        localStorage.setItem("Xcouny", Xcouny);
    } else {
        Ocouny++;
        countO.innerText = `${Ocouny}`;
        localStorage.setItem("Ocouny", Ocouny);
    }

};

// Reset count manually
document.addEventListener("DOMContentLoaded", () => {
  const resetCountBtn = document.getElementById("resetCount"); 

  resetCountBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to reset the win counts?")) {
      Xcouny = 0;
      Ocouny = 0;
      localStorage.setItem("Xcouny", 0);
      localStorage.setItem("Ocouny", 0);
      countX.innerText = "0";
      countO.innerText = "0";
    }
  });
});




const showWinner = (winnerLogo)=>{
         displayWinLogos.innerText = winnerLogo;
         counter(winnerLogo);
          bx.forEach((box) => {
        box.style.pointerEvents = "none";
    });
};


const checkWinner=()=>{
    for(let pattern of winPattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(bx[pattern[0]].innerText);

        let patter1=bx[pattern[0]].innerText;
        let patter2=bx[pattern[1]].innerText;
        let patter3=bx[pattern[2]].innerText;

        if(patter1 != "" && patter1 != "" && patter3 != ""){
            if(patter1 === patter2 && patter2 === patter3){
                showWinner(patter1);
            }
            
        }
    }

}

