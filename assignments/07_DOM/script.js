// Homework Assignment # 7 - DOM

let rectangles = document.getElementsByClassName("rectangle");

// printing rectangle IDs
console.log("Here are the rectangle IDs");
for (let rect of rectangles) {
    console.log(rect.id);
}

colors = [
    "#C0392B",
    "#E74C3C",
    "#9B59B6",
    "#8E44AD",
    "#3498DB",
    "#1ABC9C",
    "#16A085",
    "#2ECC71",
    "#F1C40F",
    "#F39C12",
];

// setting the colors
for (let i = 0; i < rectangles.length; i++) {
    let rect = rectangles[i];
    rect.style.backgroundColor = colors[i];
    rect.innerHTML = "<p>" + colors[i] + "</p>";
}

// copy to clipboard
document.querySelectorAll(".rectangle").forEach((rect) => {
    rect.addEventListener("click", function (event) {
        let text = colors[this.id - 1];
        navigator.clipboard.writeText(text).then(
            () => alert("Hexcode copied to clipboard: " + text),
            (err) => console.error("Async: Could not copy text: ", err)
        );
    });
});
