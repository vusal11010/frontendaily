let tagsDiv = document.getElementsByClassName("tags")[0];
let tagsArr = Array.from(document.getElementsByClassName("tag"));
let newTagInput = document.getElementsByClassName("new-tag-input")[0];
let closeBtn = document.getElementsByClassName("close-btn")[0];


newTagInput.addEventListener("keyup", (e) => {
    if (e.keyCode == 13 && newTagInput.value.trim() != "") {
        let newTag = document.createElement("div");
        newTag.classList.add("tag");

        let span = document.createElement("span");
        span.classList.add("tag-title");
        span.innerText = newTagInput.value;

        let label = closeBtn.cloneNode(true);

        newTag.appendChild(span);
        newTag.appendChild(label);
        tagsArr.push(newTag);
        tagsDiv.insertBefore(newTag, newTagInput);

        newTagInput.value = "";
    }
})

tagsArr.map(function(tag){
    tag.querySelector("label").onclick = function(){
        tag.remove();
    }
})