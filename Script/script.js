//let x = "     asyuh asyuh    ";

/*console.log(x.length);
console.log(x.toUpperCase());

console.log(x.lastIndexOf("asyuh"));
console.log(x.slice(2,4));
console.log(x.substr(2,5));
console.log(x.replace(/syu/g,"yus"))
console.log(x.trim());*/


//console.log(x.replace(/syu/g,"yus"));

// let x = [1,2,3,4];

// for(val of x){
    // console.log(val)
// }

// let x = (a,b) => a + b;

// console.log(x(10,20));

// let x = [100,2,3,5,4];

// x.forEach( value => console.log(value))
// x.splice(1,1,8);

// x.sort((a,b) => a-b);
// console.log(x);
/*x.sort(
function(a,b){
    return a-b;
}
);

console.log(x);
*/
/*let x= [1,2,3,4];
let y = x.map(function (balue){
    return balue*2;
});
console.log(y);
*/

/*class person{
    constructor(fname,lname){
        this.fname = fname;
        this.lname = lname;
        
    }
}

let x = new person ("Ayoush","Moktan");
console.log(x.fullname());
*/

/*let x = [1,2,3,4];

let y = x.filter(value => value%2 == 0);



console.log(y);*/

// function handleclick(){
//     alert("OK");
// }

// let demobutton = document.getElementById("demobutton");




// demobutton.onclick = function(){
//     alert("OK");
// } 

//let buttons = document.getElementsByClassName("button");

// // // console.log(buttons);
// // // buttons[0].onclick = function(){
// // //     alert("OK")
// // // }

// // for(button of buttons)
// // {
// //     button.onclick = () => alert ("OK");
// // }

//  Array.from(buttons).forEach(function(button){
//      button.onclick = function(){
//          this.innerHTML = "YOU CLICKED!";
//          this.style.background = 'red';
//          this.style.border = '1px solid #d1391b';
//      }
//  })



// let button = document.getElementById("buttonc");

// function buttonc(){
//     this.innerHTML = "YOU CLICKED!";
// }

// button.addEventListener("click",buttonc);

// let button = document.getElementById("buttonc")

// function buttonc(){

//     this.innerHTML = "You cliked!";
// }

// button.addEventListener("click",buttonc);

let openmodal = document.getElementsByClassName("button")[0];
let closebutton = document.getElementById("closebutton");
let modalcontainer = document.getElementById("modalcontainer");

function openModal() {
    modalcontainer.style.display = 'block';
}

function closeModal(){
    modalcontainer.style.display = 'none';
}

openmodal.addEventListener("click", openModal);
closebutton.addEventListener("click",closeModal);