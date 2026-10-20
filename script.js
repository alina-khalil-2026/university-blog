const text = document.getElementById("textArea");

const originalText = text.innerText;
const originalStyle = {
    color: text.style.color,
    backgroundColor: text.style.backgroundColor,
    fontSize: text.style.fontSize,
    fontFamily: text.style.fontFamily,
    textAlign: text.style.textAlign,
    textDecoration: text.style.textDecoration,
    fontWeight: text.style.fontWeight,
    fontStyle: text.style.fontStyle,
    textTransform: text.style.textTransform
};

document.getElementById("red").addEventListener("click", function() {
    text.style.color = "red";
});

document.getElementById("blue").addEventListener("click", function() {
    text.style.color = "blue";
});

document.getElementById("green").addEventListener("click", function() {
    text.style.color = "green";
});

let fontSize = 20;

document.getElementById("increase").addEventListener("click", function() {
    fontSize += 2;
    text.style.fontSize = fontSize + "px";
});

document.getElementById("decrease").addEventListener("click", function() {
    fontSize = Math.max(10, fontSize - 2);
    text.style.fontSize = fontSize + "px";
});

document.getElementById("fontFamily").addEventListener("change", function() {
    text.style.fontFamily = this.value;
});

function toggleDecoration(decoration) {
    const current = text.style.textDecoration
        .split(" ")
        .filter(Boolean);

    if (current.includes(decoration)) {
        text.style.textDecoration =
            current.filter(item => item !== decoration).join(" ");
    } else {
        current.push(decoration);
        text.style.textDecoration = current.join(" ");
    }
}

document.getElementById("underline").addEventListener("click", function() {
    toggleDecoration("underline");
});

document.getElementById("overline").addEventListener("click", function() {
    toggleDecoration("overline");
});

document.getElementById("strike").addEventListener("click", function() {
    toggleDecoration("line-through");
});

document.getElementById("bold").addEventListener("click", function() {
    text.style.fontWeight =
        text.style.fontWeight === "bold" ? "normal" : "bold";
});

document.getElementById("italic").addEventListener("click", function() {
    text.style.fontStyle =
        text.style.fontStyle === "italic" ? "normal" : "italic";
});

document.getElementById("left").addEventListener("click", function() {
    text.style.textAlign = "left";
});

document.getElementById("center").addEventListener("click", function() {
    text.style.textAlign = "center";
});

document.getElementById("right").addEventListener("click", function() {
    text.style.textAlign = "right";
});

document.getElementById("upper").addEventListener("click", function() {
    text.style.textTransform = "uppercase";
});

document.getElementById("lower").addEventListener("click", function() {
    text.style.textTransform = "lowercase";
});

document.getElementById("pink").addEventListener("click", function() {
    text.style.backgroundColor = "pink";
});

document.getElementById("yellow").addEventListener("click", function() {
    text.style.backgroundColor = "yellow";
});

document.getElementById("mode").addEventListener("click", function() {
    document.body.classList.toggle("dark");
});

document.getElementById("reset").addEventListener("click", function() {
    text.innerText = originalText;
    Object.assign(text.style, originalStyle);
    fontSize = 20;
    document.body.classList.remove("dark");
});