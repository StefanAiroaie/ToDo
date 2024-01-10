const taskList = [];

const addTaskFunc = () => {
    const addTask = document.querySelector("#inputText").value;
    taskList.push(addTask);
    showTasks();
}

const deleteTask = (index) => {
    taskList.splice(index, 1);
    showTasks();
}

const showTasks = () => {
    const taskInDom = document.createElement("div");

    taskList.forEach((task, index) => {

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        const todos = document.createElement("p");
        todos.textContent = task;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", () => deleteTask(index));


        taskInDom.appendChild(checkbox)
        taskInDom.appendChild(todos);
        taskInDom.appendChild(deleteButton);



    });

    document.querySelector("#list").innerHTML = '';
    document.querySelector("#list").appendChild(taskInDom);
}


