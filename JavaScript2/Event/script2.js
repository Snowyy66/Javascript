// event listener
let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
    console.log("Button was clicked - handler 1");
});

btn1.addEventListener("click", () => {
    console.log("Button was clicked - handler 2");
});

const handler3 = () => {
    console.log("Button was clicked - handler 3");
};

btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
//     console.log("Button was clicked - handler 3");
// })

btn1.removeEventListener("click", handler3);