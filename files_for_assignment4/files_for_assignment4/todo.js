document.getElementById('tasks').focus();
const taskList = document.getElementById('tasklist');
const tasks = [];

const buttonForTask = document.querySelector('div.newtasks button');

const outputElement = document.createElement('p');
taskList.insertAdjacentElement('beforeend', outputElement);

const updateCheckedAmount = () => {
  const allCheckBox = document.querySelectorAll('input[type=checkbox]');
  const checked = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  ).length;
  outputElement.innerText = `${checked}/${allCheckBox.length} completed`;
};

updateCheckedAmount();

function addTask() {
  const liElement = document.createElement('li');
  const checkBox = document.createElement('input');

  checkBox.type = 'checkbox';

  const taskName = document.getElementById('tasks').value;
  const taskValue = document.createTextNode(taskName);

  tasks.push({ taskName });

  liElement.appendChild(checkBox);
  liElement.appendChild(taskValue);
  taskList.insertBefore(liElement, taskList.children[0]);
  document.getElementById('tasks').value = '';

  updateCheckedAmount();

  checkBox.addEventListener('input', () => {
    checkBox.parentElement.style.textDecoration = checkBox.checked
      ? 'line-through'
      : 'none';
    updateCheckedAmount();
  });
}

buttonForTask.addEventListener('click', addTask);
