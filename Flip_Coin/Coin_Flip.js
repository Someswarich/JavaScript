// let heading=document.createElement("h1");
// heading.textContent="Heads Or Tails";
// document.body.appendChild(heading);

let headsCount = 0;
let tailsCount = 0;
function Flip(){
    let coin=document.getElementById("heads")
    let number=Math.random()
    number=Math.round(number)
    console.log(number)
   
    if (number==0){
        coin.textContent="HEADS"
        headsCount++
        count.textContent=`Heads: ${headsCount} | Tails: ${tailsCount}`
       
    }else{
        coin.textContent="Tails"
        tailsCount++
        count.textContent=`Heads: ${headsCount} | Tails: ${tailsCount}`

    }
    
    

}

