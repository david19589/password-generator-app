const passBox = document.getElementById("password");
const copy = document.getElementById("copy");
const copied = document.getElementById("copied-text");
const number = document.getElementById("number");
const slide = document.getElementById("slide");
const checkAndText = document.getElementsByClassName("mini-box");
const checkImg = document.getElementsByClassName("check");
const checkBox = document.getElementsByClassName("checkbox");
const strText = document.getElementById("pass-strength")
const bar = document.getElementsByClassName("bar");
const generate = document.getElementById("generate");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

slide.addEventListener("input", (e) => {
    slide.style.backgroundSize = (slide.value) * 100 / 20 + '% 100%';
    number.textContent = slide.value;
    checkboxes()
});

for (let i = 0; i < checkBox.length; i++) {
    checkBox[i].addEventListener("click", (e) => {
        if (checkImg[i].style.display !== "block") {
            checkImg[i].style.display = "block";
            checkBox[i].style.backgroundColor = "#A4FFAF";
            checkBox[i].style.border = "#A4FFAF";

        } else {
            checkImg[i].style.display = "none";
            checkBox[i].style.backgroundColor = "#FFF";
        }
        checkboxes()
    })
};

generate.addEventListener("click", (e) => {
    passBox.textContent = geneneratePass();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

function geneneratePass() {

    copy.addEventListener('click', () => {
        if (passBox.textContent != "" || passBox.value.length >= 1) {
            navigator.clipboard.writeText(passBox.textContent);
            if (allChars) {
                copied.style.display = "block";
            }
            setTimeout(() => {
                copied.style.display = "none";
            }, 2000);
        }
    });

    let genPassword = "";
    let allChars = "";

    allChars += uppercase.checked ? upperChars : "";
    allChars += lowercase.checked ? lowerChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if (allChars == "") {
        return passBox.textContent;
    };

    let i = 1;
    while (i <= slide.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    return genPassword;
};

function checkboxes() {
    count = 0;
    for (let i = 0; i < checkBox.length; i++) {
        if (checkBox[i].type === "checkbox" && checkBox[i].checked === true) {
            count++;
        };

        if (count == 1) {
            if (slide.value < 6 && slide.value >= 1) {
                strText.innerHTML = "TOO WEAK!";
                bar[0].style.backgroundColor = "red";
                bar[0].style.border = "red";
                bar[1].style.backgroundColor = "";
                bar[1].style.border = "";
                bar[2].style.backgroundColor = "";
                bar[2].style.border = "";
                bar[3].style.backgroundColor = "";
                bar[3].style.border = "";
            }
        };

        if (count == 1) {
            if (slide.value >= 6 && slide.value <= 10) {
                strText.innerHTML = "WEAK";
                bar[0].style.backgroundColor = "#FB7C58";
                bar[0].style.border = "#FB7C58";
                bar[1].style.backgroundColor = "#FB7C58";
                bar[1].style.border = "#FB7C58";
                bar[2].style.backgroundColor = "";
                bar[2].style.border = "";
                bar[3].style.backgroundColor = "";
                bar[3].style.border = "";
            }
        };

        if (count == 1) {
            if (slide.value >= 11 && slide.value <= 15) {
                strText.innerHTML = "MEDIUM";
                bar[0].style.backgroundColor = "#F8CD65";
                bar[0].style.border = "#F8CD65";
                bar[1].style.backgroundColor = "#F8CD65";
                bar[1].style.border = "#F8CD65";
                bar[2].style.backgroundColor = "#F8CD65";
                bar[2].style.border = "#F8CD65";
                bar[3].style.backgroundColor = "";
                bar[3].style.border = "";
            }
        };

        if (count == 1) {
            if (slide.value > 15 && slide.value <= 20) {
                strText.innerHTML = "STRONG";
                bar[0].style.backgroundColor = "#A4FFAF";
                bar[0].style.border = "#A4FFAF";
                bar[1].style.backgroundColor = "#A4FFAF";
                bar[1].style.border = "#A4FFAF";
                bar[2].style.backgroundColor = "#A4FFAF";
                bar[2].style.border = "#A4FFAF";
                bar[3].style.backgroundColor = "#A4FFAF";
                bar[3].style.border = "#A4FFAF";
            }
        };

        if (count == 2) {
            if (slide.value >= 5 && slide.value <= 8) {
                strText.innerHTML = "WEAK";
                bar[0].style.backgroundColor = "#FB7C58";
                bar[0].style.border = "#FB7C58";
                bar[1].style.backgroundColor = "#FB7C58";
                bar[1].style.border = "#FB7C58";
                bar[2].style.backgroundColor = "";
                bar[2].style.border = "";
                bar[3].style.backgroundColor = "";
                bar[3].style.border = "";
            }
        };

        if (count == 2) {
            if (slide.value >= 9 && slide.value <= 13) {
                strText.innerHTML = "MEDIUM";
                bar[0].style.backgroundColor = "#F8CD65";
                bar[0].style.border = "#F8CD65";
                bar[1].style.backgroundColor = "#F8CD65";
                bar[1].style.border = "#F8CD65";
                bar[2].style.backgroundColor = "#F8CD65";
                bar[2].style.border = "#F8CD65";
                bar[3].style.backgroundColor = "";
                bar[3].style.border = "";
            }
        };

        if (count == 2) {
            if (slide.value >= 14 && slide.value <= 20) {
                strText.innerHTML = "STRONG";
                bar[0].style.backgroundColor = "#A4FFAF";
                bar[0].style.border = "#A4FFAF";
                bar[1].style.backgroundColor = "#A4FFAF";
                bar[1].style.border = "#A4FFAF";
                bar[2].style.backgroundColor = "#A4FFAF";
                bar[2].style.border = "#A4FFAF";
                bar[3].style.backgroundColor = "#A4FFAF";
                bar[3].style.border = "#A4FFAF";
            }
        };

        if (count == 3) {
            if (slide.value >= 13 && slide.value <= 20) {
                strText.innerHTML = "STRONG";
                bar[0].style.backgroundColor = "#A4FFAF";
                bar[0].style.border = "#A4FFAF";
                bar[1].style.backgroundColor = "#A4FFAF";
                bar[1].style.border = "#A4FFAF";
                bar[2].style.backgroundColor = "#A4FFAF";
                bar[2].style.border = "#A4FFAF";
                bar[3].style.backgroundColor = "#A4FFAF";
                bar[3].style.border = "#A4FFAF";
            }
        };

        if (count == 4) {
            if (slide.value >= 13 && slide.value <= 20) {
                strText.innerHTML = "STRONG";
                bar[0].style.backgroundColor = "#A4FFAF";
                bar[0].style.border = "#A4FFAF";
                bar[1].style.backgroundColor = "#A4FFAF";
                bar[1].style.border = "#A4FFAF";
                bar[2].style.backgroundColor = "#A4FFAF";
                bar[2].style.border = "#A4FFAF";
                bar[3].style.backgroundColor = "#A4FFAF";
                bar[3].style.border = "#A4FFAF";
            }
        }
    }
};