let nextButton=document.querySelector("#Nextbutton");
let box = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let scoreO = document.querySelector("#sO");
let scoreD = document.querySelector("#sD");
let scoreX = document.querySelector("#sX");
let turnO = true;
let winconditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Horizontal conditions
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Vertical conditions
    [0, 4, 8], [2, 4, 6]              // Diagonal conditions
];
let gameplay =(turnO)=>
{ 
box.forEach((b) => {
    b.onclick = () => {
        if (b.innerText === "") {
            if (turnO) {
                b.innerHTML = "<p>O</p>";
                turnO = false;
                msg.innerHTML = "<p>Now <span>Player X</span> turn</p>";
            } else {
                b.innerHTML = "<p>X</p>";
                turnO = true;
                msg.innerHTML = "<p>Now <span>Player O</span> turn</p>";
            }
            winchecker();
        } 
    };
});
}

gameplay(turnO);
let winnerfound = false;
let drawchecker = false;

const winchecker = () => {
    winconditions.forEach((con) => {
        let pos1 = box[con[0]].innerText;
        let pos2 = box[con[1]].innerText;
        let pos3 = box[con[2]].innerText;
        
        if (pos1 === pos2 && pos2 === pos3 && pos1 !== "") {
            msg.innerHTML = `<p> Winner <span>Player ${pos1} </span></p>`;
            if (pos1 === "X") {
                let scoreXnumber = parseInt(scoreX.innerText);
                scoreXnumber++;
                scoreX.innerText = scoreXnumber;
            } else if (pos1 === "O") {
                let scoreOnumber = parseInt(scoreO.innerText);
                scoreOnumber++;
                scoreO.innerText = scoreOnumber;
            }
            winnerfound = true;
            box.forEach(b => b.onclick = null);
        }
    });

    if (!winnerfound) {
        drawchecker = true;
        box.forEach((b) => {
            if (b.innerText === "") {
                drawchecker = false;
            }
        });

        if (drawchecker == true) {
            let scoreDnumber = parseInt(scoreD.innerText);
            scoreDnumber++;
            scoreD.innerText = scoreDnumber;
            msg.innerHTML = "<p>It's a draw!</p>";
            box.forEach(b => b.onclick = null);
        }
    }
};

nextButton.onclick=()=>{
    for(let i=0;i<box.length;i++)
    {
        box[i].innerText="";
    }
    turnO=true;
    winnerfound=false;
    drawchecker=false;
    msg.innerHTML = "<p>Now <span>Player O</span> turn</p>"; 
gameplay(turnO);
}

let reSet=document.querySelector("#resetbutton");
reSet.onclick=()=>{
    scoreD.innerText=0;
    scoreO.innerText=0;
    scoreX.innerText=0;
    for(let i=0;i<box.length;i++)
        {
            box[i].innerText="";
        }
turnO=true;
winnerfound=false;
drawchecker=false;
msg.innerHTML = "<p>Now <span>Player O</span> turn</p>"; 
        gameplay(turnO);
 
}