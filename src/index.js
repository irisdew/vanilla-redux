import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//string으로 쓸 때보다 변수를 정의해두면 javascript가 정의되지 않은 변수라고 말해줘서 디버깅이 쉽다
const ADD = "ADD" 
const MINUS = "MINUS"

const countModifier = (count = 0, action) => {
    switch (action.type) {
        case ADD:
            return count += 1;
        case MINUS:
            return count -= 1;
        default:
            return count;
    }
};

const countStore = createStore(countModifier);

const onChange = () => {
    number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));