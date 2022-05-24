const colors = ["green", "red", "blue", "yellow", "purple", "aliceblue", "tomato", "white", "orange", "black"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");
var array = []

btn.addEventListener('click', () => {
    // Get random number between 0 - 3 - color[0]
    const randomNumber = getRandomNumber();

    // Conditional to lower color repetitions
    if (array[0] === undefined) {
        array.push(randomNumber);
        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];
        color.style.color = colors[randomNumber];
        console.log(array);
    } else {
        if (array[0] === randomNumber) {
            console.log(array);

            const newRandomNumber = getRandomNumber(); // Here repeat Too
            console.log(newRandomNumber);
            document.body.style.backgroundColor = colors[newRandomNumber];
            color.textContent = colors[newRandomNumber];
            color.style.color = colors[newRandomNumber];
            array.push(newRandomNumber);
            console.log(array);
            array.shift();
        } else {
            document.body.style.backgroundColor = colors[randomNumber];
            color.textContent = colors[randomNumber];
            color.style.color = colors[randomNumber];
            array.push(randomNumber);
            array.shift();
        }
    }
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}