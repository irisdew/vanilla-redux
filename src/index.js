const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

const updateText = () => {
    number.innerText = count;
}

const handleAdd = () => {
    count = count + 1;
    updateText();
};

const handleMinus = () => {
    count = count - 1;
    updateText();
};


add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);