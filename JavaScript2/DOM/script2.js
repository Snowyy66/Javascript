// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(div);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "new_class"));

// let newbtn = document.createElement("button");
// newbtn.innerText = "click me";
// console.log(newbtn);
// let div = document.querySelector("div");
// div.append(newbtn);


// practice - create a new button element. Give it a text "click me" background color of red and text color of white
// insert the buton as the element inside the body tag
let newBtn = document.createElement("button");
newBtn.innerText = "click me";
newBtn.style.color = "white";
newBtn.style.backgroundcolor = "red";
document.querySelector("body").prepend(newBtn);