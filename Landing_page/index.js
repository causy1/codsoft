
let a=document.body.getElementsByClassName("DN")
let b=document.body


function night(){
    
    b.style.backgroundColor="black";
    let text1=document.getElementsByClassName("AH-large2")
    for(let i=0;i<text1.length;i++){
        text1[i].style.color="white";
    }
}

function day(){
    b.style.backgroundColor="white";
    let text1=document.getElementsByClassName("AH-large2")
    for(let i=0;i<text1.length;i++){
        text1[i].style.color="black";
    }
}

