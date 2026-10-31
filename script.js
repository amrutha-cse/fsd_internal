function add(a, b) {
    return a + b;
}
function sub(a, b) {
    let result = a - b;
    return result;
}
const mul = (a, b) => {
    return a * b;
};
function displayResult() {
    document.getElementById("result").innerHTML =
        "Function Declaration: " + add(10, 20) + "<br>" +
        "Function Definition: " + sub(5, 4) + "<br>" +
        "Arrow Function: " + mul(20, 10);
}
