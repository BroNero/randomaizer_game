var inp = document.querySelector("input")

inp.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        main(e.target.value)
    }
})

function main(text) {
    try {
        text = parseInt(text, 10)
        concole.log(typeof (text))
        if (typeof (text) == "string") {
            throw new Error()
        }
    } catch {
        concole.error("stringia bliad")
    }
}