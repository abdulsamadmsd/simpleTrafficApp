const displayContainer = document.querySelector(".colorChanger");
const redBtn = document.getElementById("red");
const yellowBtn = document.getElementById("yellow");
const greeBtn = document.getElementById("green");

redBtn.addEventListener("click", function () {
        displayContainer.style.backgroundColor = "red";
        displayContainer.textContent = "Stop! Traffic is Coming From Another Side";
        displayContainer.style.color = "white";
        displayContainer.style.display = "flex";
        displayContainer.style.justifyContent = "center";
        displayContainer.style.alignItems = "center";
});

yellowBtn.addEventListener("click", function () {
        displayContainer.style.backgroundColor = "yellow";
        displayContainer.textContent = "Get Ready ! Get Ready to Drive.";
        displayContainer.style.color = "black";
        displayContainer.style.display = "flex";
        displayContainer.style.justifyContent = "center";
        displayContainer.style.alignItems = "center";
});

greeBtn.addEventListener("click", function () {
        displayContainer.style.backgroundColor = "green";
        displayContainer.textContent = "Drive Carefully!";
        displayContainer.style.color = "white";
        displayContainer.style.display = "flex";
        displayContainer.style.justifyContent = "center";
        displayContainer.style.alignItems = "center";
});
