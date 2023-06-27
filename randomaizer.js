var a = document.querySelector("input")
a.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        main(e.target.value)
    }
})

num = Math.floor(Math.random() * 100) + 1;
function main(text) {
    ch_num= parseInt(text)
    msg = document.querySelector("p")
    
    if (ch_num > num) {
        msg.textContent = "Make it lower"
    }
    else if(ch_num < num){
        msg.textContent = "Make it higher"
    }else if(ch_num == num){
        msg.textContent = "You won"
        msg.style.color = "lime"
        alert("Game Finished")
        window.location.reload()
    }else{
        msg.textContent = "Wrong input, write number"
    }
}