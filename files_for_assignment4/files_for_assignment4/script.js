/* Task  1.2 */
console.log('Task  1.2')
for (let i = 0; i <= 20; i++){
    console.log(i);
}
    
/* Task  1.3 */
console.log('Task  1.3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (let i = 0; i < numbers.length; i++){
    if (numbers[i]%3 == 0){
        console.log("Eple");
    } else if (numbers[i]%5 == 0){
        console.log("Kake")
    } else{
        console.log(numbers[i])
    }
}

/* Task  1.4 */
const   pagetitle = document.getElementById("title");
pagetitle.innerText = "Hello, Javascript!";

/* Task  1.5 */
let parent1 = document.querySelectorAll("div.buttons button");
let buttonDisplay = parent1[0];
let buttonVisibility = parent1[1];
let buttonReset = parent1[2];

buttonDisplay.addEventListener("click", changeDisplay);
buttonVisibility.addEventListener("click", changeVisibility);
buttonReset.addEventListener("click", reset);

let magicBox = document.getElementById("magic")

function changeDisplay () {
    magicBox.style.display = "none";

}

function changeVisibility () {
    magicBox.style.visibility = "hidden";
    magicBox.style.display = "block";

}

function reset () {
    magicBox.style.visibility = "visible";
    magicBox.style.display = "block";

}

/* Task 1.6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

let list = document.getElementById("tech");
console.log(list)

for (let i = 0; i<technologies.length; i++){
    const liElement = document.createElement("li");
    const newEntry = document.createTextNode(technologies[i]);
    liElement.appendChild(newEntry);
    list.appendChild(liElement);


}
