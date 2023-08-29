window.addEventListener("load", function () {

    const p1 = document.querySelector("#p1");
    console.log(p1);

    const second = document.querySelector(".second");
    console.log(second);

    const button1 = document.querySelector("#firstButton");
    const button2 = document.querySelector("#secondButton");
    console.log(button1, button2);

    const nestedList = document.querySelector("#nested-li");
    console.log(nestedList);

    p1.style.color = "red";
    p1.style.fontStyle = "italic"

    second.innerHTML = "I am a l33t h4x0r, in ur br0ws3r, ch4ng1n ur p4g3s!!!"

    let important = document.querySelector(".important");
    important.innerHTML = "Hi";
    important.innerHTML = Date();

    //FirstButton - Ex6:
    button1.addEventListener("click", function () {
        const img = document.querySelector("img");
        img.setAttribute("src", "./t-rex-cry.png");
    })

    button2.addEventListener("click", function () {
        const box = document.querySelector("#box");
        box.classList.toggle("animated");
    })
});
