// Function to create a task element
function createTaskElement(task) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-title">${task.title}</span>
        <span class="task-details">${task.details}</span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;
    return li;
}

// Function to add task to the list
function addTask(task) {
    const taskList = document.getElementById('task-list');
    const taskElement = createTaskElement(task);

    taskElement.querySelector('.edit-btn').addEventListener('click', function() {
        const titleElement = taskElement.querySelector('.task-title');
        const detailsElement = taskElement.querySelector('.task-details');

        const newTitle = prompt('Enter new title:', titleElement.textContent);
        if (newTitle !== null) {
            const newDetails = prompt('Enter new details:', detailsElement.textContent);
            titleElement.textContent = newTitle;
            detailsElement.textContent = newDetails;
        }
    });

    taskElement.querySelector('.delete-btn').addEventListener('click', function() {
        taskElement.remove();
    });

    taskList.appendChild(taskElement);
}

// Function to handle form submission
document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('task-title').value;
    const details = document.getElementById('task-details').value;
    const task = { title, details };
    addTask(task);
    this.reset(); // Reset the form
});
