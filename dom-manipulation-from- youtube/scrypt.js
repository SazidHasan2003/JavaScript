
// select html with jsx
// document.querySelector()      //we will use document.queryselector
// document.querySelectorAll()
// document.getElementById()
// document.getElementsByClassName()

const { createElement } = require("react");

// let abcd=document.getElementById('abcd');
// console.log(abcd);
// console.dir(abcd);

// let abcd=document.getElementsByClassName('abcd');

// let abcd=document.querySelector('h1'); //only seclect 1st item
// console.dir(abcd);

// let abcd=document.querySelectorAll('h1');

// let h1=document.querySelector('h1');

// console.dir(h1);

// h1.textContent='good boy';
// h1.innerHTML='go ahed <i>learn</i> every thing';  //we can use html tag with this
// h1.hidden=true;
// h1.innerText='la la wow how do you do';

//Attribute Manupolation

// let a=document.querySelector("a");
// a.href="https://google.com/"
// console.dir(a);

// a.setAttribute("href", "https://google.com");

// let img=document.querySelector("img");
// img.setAttribute("src","https://images.unsplash.com/photo-1612178010892-205e565c4c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dpemVybGFuZHxlbnwwfHwwfHx8MA%3D%3D");
// img.style.width="200px";
// img.style.height="200px";

// console.log(img.getAttribute("src"));
// img.removeAttribute('src');


//***Create html aliment with js****//

//  let h1=document.createElement("h1");
//  h1.textContent='hallo what the matter';
//  //  document.body.prepend(h1); //OR
// //document.querySelector("body").prepend(h1);
// document.querySelector("body").append(h1);

// let h1=document.querySelector("h1");
// h1.remove();

// let h1=document.createElement("h1");
// h1.textContent="Hello i come from outside";
// let div =document.querySelector("div");
// div.appendChild(h1);
// div.prepend(h1);
// div.removeChild(h1);

//Style

// let h1=document.querySelector("h1");
// // // console.dir(h1);

// // h1.style.color="red";
// // h1.style.backgroundColor="yellow";
// // h1.style.fontFamily="arial";
// // h1.style.textTransform="capitalize";

// //or creating class in html to use style and this is recomanded
// h1.classList.add("hulu");
// // h1.classList.remove("hulu"); 
// h1.classList.toggle("hulu"); // thakle remove kore na thakle add kore class



//*****Some Practiced Question*******/

//1. what is dom? how does it represent html structure?
//2.name the type of nodes in the dom tree??
//3. Whats the different between element node and thxt node??

// 4. inspect the following html in the browser and identify each node?

// 5. what is the different between getElementById and QuerySelector?

// document.getElementById()// do not need to use #
// document.querySelector()// need to use #

//6. what does getElementsByClassName return? is it an array?
// let cl=document.getElementsByClassName("color");
// console.log(cl);

//7. use querySelectorAll to select all buttons with class "but-now"?

// let buyNow=document.querySelectorAll(".buy-now");
// console.log(buyNow);

//8.what is the difference between innerText, textContent and innerHTML?

//9. when should you use textContent instend of innerText?

//10. what is the difference between appendChild() and prepend()?? 

//11. what is the different between classList.add() and classList.toggle()?


//***Task Questions */


//T1. selthe heading of a pege by id and change its text to "welcome to the house" 

// let heading=document.querySelector("#heading");
// heading.textContent="welcome to the house";

//T2. Select all element and print their text using a loop?

// let list=document.querySelectorAll("li");
// console.log(list);

// list.forEach(element => {
//     console.log(element.textContent);
    
// });

//OR

// for(let i=0; i<list.length;i++){
// console.log(list[i].textContent);
// }

//T3. select a paragraph and replace its content with: <b>Updated</b> by javascript

// let pera=document.querySelector("p")
// pera.innerHTML="<b>Updated</b> by javascript";

//T4. How do you get the src of an image?

// let img =document.querySelector("img");
 // console.log(img.src); or
// console.log(img.getAttribute("src"));

//T5. What does setAttribute do???

// let image=document.querySelector("img");
// image.setAttribute("src","https://images.unsplash.com/photo-1726403846083-e963ac71acbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN3aXplcmxhbmR8ZW58MHx8MHx8fDA%3D");

//T6. Select a link and update its href to point to youtube.com??

// let a=document.querySelector("a");
// a.href="https://www.youtube.com/";

//T7. Add atitle attribute to a div dynamically?

// let div= document.querySelector("div");
// div.title="hay hay hay"; //OR
// div.setAttribute("title","hay hay hi");

//T8.make the button disable via js dom?

// let btn=document.querySelector('button');
// btn.disabled=true;

//T9. remove the disabled attribute from a button?

// let btn=document.querySelector('button');
// btn.removeAttribute('disabled');

//T10. what does createElement( ) do? what's returned?? 

//let h1=document.createElement("h1");

//T11. make operation with createElement()?

// let body=document.querySelector("body");
// let h1=document.createElement("h1");
// console.log(h1);
// h1.textContent="i am new h1";
// body.appendChild(h1);

//T12. can you remove an element using  removeChild()??

// let div=document.querySelector("div");
// div.removeChild(document.querySelector("div h2"));  OR

// let div = document.querySelector("div");  
// let h2 = div.querySelector("h2");  
// div.removeChild(h2); 

//T13. Create a new list item <li>New Task</li> and add it to the end of a <ul> ?

// let ul=document.querySelector("ul");
// let li =document.createElement('li');
// li.textContent="New Task";
// ul.appendChild(li);

// T14. Create a new image element with a placeholder source and add it at the top of a div??

//  let img=document.createElement("img");
//  img.setAttribute("src", "https://media.istockphoto.com/id/500305892/photo/christmas-in-basel.webp?a=1&b=1&s=612x612&w=0&k=20&c=653T2p0C8PghtWLJQA_yyIvO4AGTUoarqerxMOOL_ro=");

// img.classList.add(placeholder)
// document.querySelector("div").prepend(img);

//T15. select the first item in a list and delete it from the DOM

// let ul=document.querySelector("ul");
// let li=document.querySelector("li");
// ul.removeChild(li);

// T16. How do you change the background color of an element??

// let h1=document.querySelector("h1");
// h1.style.backgroundColor="red";

// T16. add a highlight class to every even item in a list


// let li=document.querySelectorAll("ul li:nth-child(2n)");

// li.forEach(function(el){
// el.classList.add("highlight");

// })

// T17. Set the font size of all <p> elements to 18px using .(dot) style?

// let p=document.querySelectorAll("p");

// p.forEach(function(el){

// el.style.fontSize="18px";


// })






