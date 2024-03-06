//let number = prompt("Enter a number ");
let number = 21;
let main = document.querySelector("main");
let picture = "assets/pictures/Matthias.jpg";

function createHoles(number, body){
    for (number ; number > 0; number--){
        let holeCreate = document.createElement("div");
        holeCreate.className = "hole";
        main.appendChild(holeCreate);

        holeCreate.addEventListener("click", (event) => {
            if(holeCreate.classList.contains("target")){
                holeCreate.classList.toggle("dead");
        
                setTimeout(disableClass, 200, "dead", holeCreate);
                setTimeout(disableClass, 200, "target", holeCreate);
        
                score++;
                titleScore.firstChild.remove();
                scoreText = document.createTextNode(score);
                titleScore.appendChild(scoreText);
    
            }
        })
    }
}

let score = 0;
let titleScore = document.createElement("h1");
let scoreText = document.createTextNode(score);
titleScore.appendChild(scoreText);
document.querySelector("header").appendChild(titleScore);

let target = Math.floor(Math.random() * number);

let hole = document.getElementsByClassName("hole");

function disableClass(className, element){  
    element.classList.remove(className);
}

function activateTarget(){
    
    let target = Math.floor(Math.random() * number+1);

    main.childNodes[target].classList.toggle("target");

    let cible = document.querySelector(".target");

    setTimeout(disableClass, 800, "target", main.childNodes[target]);
}


    

createHoles(number, main);
setInterval(activateTarget, 1000);