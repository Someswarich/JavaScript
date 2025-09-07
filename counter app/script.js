// let count_ele=document.getElementById("count")
// let random_num=Math.random()*100
// random_num=Math.ceil(random_num)
// if (random_num%2==0){
    

// }

function Increment(){
    let count_ele=document.getElementById("count")
    let number= parseInt(count_ele.textContent)
    number=number+1
    count_ele.textContent=number
    count_ele.style.color="#386641";
   
    
}
function Decrement(){
    let count_ele=document.getElementById("count")
    let number= parseInt(count_ele.textContent)
    number=number-1
    count_ele.textContent=number
    count_ele.style.color="#c22225ff";
    
}