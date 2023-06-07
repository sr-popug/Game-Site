tdArr = document.querySelectorAll('td');
score = document.querySelector('.score');

td1 = document.querySelector('.td-1');
td2 = document.querySelector('.td-2');
td3 = document.querySelector('.td-3');
td4 = document.querySelector('.td-4');
td5 = document.querySelector('.td-5');
td6 = document.querySelector('.td-6');
td7 = document.querySelector('.td-7');
td8 = document.querySelector('.td-8');
td9 = document.querySelector('.td-9');

let i = 0;
let XScore = 0;
let OScore = 0;

function XWin () {
    XScore++;
    score.innerHTML = `Score: ${XScore} : ${OScore}`

}
function OWin () {
    OScore++;
    score.innerHTML = `Score: ${XScore} : ${OScore}`
    i++

}

function clear () {
    td1.innerHTML = " ";
    td2.innerHTML = " ";
    td3.innerHTML = " ";
    td4.innerHTML = " ";
    td5.innerHTML = " ";
    td6.innerHTML = " ";
    td7.innerHTML = " ";
    td8.innerHTML = " ";
    td9.innerHTML = " ";
    i = 0;
}

document.querySelector('.reset').addEventListener( 'click', clear )

tdArr.forEach(function(td) {
    
    td.addEventListener('click', function(e) {
        i++;

        if (i % 2 == 0 ) {
            if (e.target.innerHTML == " ") {
                e.target.innerHTML = "O";
            } else { i-- }  
        } else {
            if (e.target.innerHTML == " ") {
                e.target.innerHTML = "X";
            } else { i-- }
        }

        if (td1.innerHTML == "X" && td2.innerHTML == "X" && td3.innerHTML == "X" ||
            td4.innerHTML == "X" && td5.innerHTML == "X" && td6.innerHTML == "X" ||
            td7.innerHTML == "X" && td8.innerHTML == "X" && td9.innerHTML == "X" ||

            td1.innerHTML == "X" && td4.innerHTML == "X" && td7.innerHTML == "X" ||
            td2.innerHTML == "X" && td5.innerHTML == "X" && td8.innerHTML == "X" ||
            td3.innerHTML == "X" && td6.innerHTML == "X" && td9.innerHTML == "X" ||

            td1.innerHTML == "X" && td5.innerHTML == "X" && td9.innerHTML == "X" ||
            td7.innerHTML == "X" && td5.innerHTML == "X" && td3.innerHTML == "X"
            ) {
            alert("X win");
            clear();
            XWin();
        }
            if (td1.innerHTML == "O" && td2.innerHTML == "O" && td3.innerHTML == "O" ||
            td4.innerHTML == "O" && td5.innerHTML == "O" && td6.innerHTML == "O" ||
            td7.innerHTML == "O" && td8.innerHTML == "O" && td9.innerHTML == "O" ||

            td1.innerHTML == "O" && td4.innerHTML == "O" && td7.innerHTML == "O" ||
            td2.innerHTML == "O" && td5.innerHTML == "O" && td8.innerHTML == "O" ||
            td3.innerHTML == "O" && td6.innerHTML == "O" && td9.innerHTML == "O" ||

            td1.innerHTML == "O" && td5.innerHTML == "O" && td9.innerHTML == "O" ||
            td7.innerHTML == "O" && td5.innerHTML == "O" && td3.innerHTML == "O"
            ) {
            alert("O win");
            clear();
            OWin();
        }

    
    })
    
})
document.querySelector('.reset-score').addEventListener('click', () => {
    score.innerHTML = `Score: 0 : 0`
    XScore = 0;
    OScore = 0;
    clear();
})