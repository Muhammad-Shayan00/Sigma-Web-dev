
document.getElementById("btn").addEventListener("click", () => {
    fetch("/generate")
        .then(res => res.text())
        .then(data => console.log(data));
});