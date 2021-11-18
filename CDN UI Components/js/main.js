"use strict";

let lists = [...document.getElementsByClassName("list")];
let copied = document.getElementsByClassName("copied")[0];

lists.forEach((list) => {
    list.addEventListener("click", (e) => {
        navigator.clipboard.writeText(list.innerText);
        copied.classList.add("active");
        setTimeout(() => {
            copied.classList.remove("active");
        }, 800)
    })
})