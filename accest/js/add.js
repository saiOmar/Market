let buyProBtn = document.querySelector(".add ");
let productListData = document.querySelector(".productListData");
let lest =  document.querySelector ("#lest")
let m1 = document.querySelector("#q1");
let m2 = document.querySelector("#q2");


console.log(buyProBtn , productListData , m1 ,m2 , lest)




 let i =0 ;
buyProBtn.onclick = _ => {

   
    
        productListData.innerHTML= ++i ;
         
        lest.innerHTML+=`<li>   ${   m1.innerHTML } ${m2.innerHTML}</li>`
        lest.innerHTML+=`<hr>`
       
    }

;
