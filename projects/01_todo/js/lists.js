let lists = [];
let selectedListId;
let selectedList;

newListForm.addEventListener("submit", createList);
newTaskForm.addEventListener("submit", createTask);
listTitleForm.addEventListener("submit", (event) => {
    event.preventDefault();
    updateSelectedListTitle();
});
listTitleInput.addEventListener("focusout", updateSelectedListTitle);
listsContainer.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === "li") {
        selectedListId = event.target.dataset.listId;
        selectedList = getSelectedList();
        renderTaskCount(selectedList);
        render();
    }
});
tasksContainer.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === "input") {
        const selectedTask = selectedList.tasks.find((task) => task.id === event.target.id);
        selectedTask.checked = event.target.checked;
        updateList(currentUserEmail, selectedList);
        render();
    }
});
deleteListButton.addEventListener("click", (event) => {
    removeList(currentUserEmail, selectedListId);
    selectedListId = null;
    render();
});
clearCompleteTasksButton.addEventListener("click", (event) => {
    selectedList.tasks = selectedList.tasks.filter((task) => !task.checked);
    updateList(currentUserEmail, selectedList);
    render();
});

function createList(event) {
    event.preventDefault();
    const listName = newListInput.value;
    if (listName == null || listName === "") return;
    const list = new List(listName);
    newListInput.value = null;
    addList(currentUserEmail, list);
    render();
}

function createTask(event) {
    event.preventDefault();
    const taskName = newTaskInput.value;
    if (taskName == null || taskName === "") return;
    const task = new Task(taskName, false);
    newTaskInput.value = null;
    selectedList.tasks.push(task);
    updateList(currentUserEmail, selectedList);
    render();
}

function getSelectedList() {
    reloadLists();
    return lists.find((list) => list.id === selectedListId);
}

function updateSelectedListTitle() {
    const newTitle = listTitleInput.value.trim();
    if (newTitle === "" || newTitle === selectedList.name) {
        listTitleInput.value = selectedList.name;
    } else {
        selectedList.name = newTitle;
        console.log(selectedList);
        updateList(currentUserEmail, selectedList);
        render();
    }
}

function render() {
    renderLists();
    renderList();
}

function reloadLists() {
    lists = getLists(currentUserEmail);
}

function renderLists() {
    clearElement(listsContainer);
    reloadLists();
    lists.forEach((list) => {
        const listElement = document.createElement("li");
        listElement.dataset.listId = list.id;
        listElement.classList.add("list-name");
        if (list.id === selectedListId) {
            listElement.classList.add("active");
        }
        listElement.innerText = `${list.name} (${getRemainingTaskCount(list)}/${
            list.tasks.length
        })`;
        listsContainer.appendChild(listElement);
    });
}

function renderList() {
    if (selectedListId) {
        listContainer.hidden = false;
        listTitleInput.value = selectedList.name;
        renderTaskCount(selectedList);
        clearElement(tasksContainer);
        renderTasks(selectedList);
    } else {
        listContainer.hidden = true;
    }
}

function renderTaskCount(list) {
    const remaining = getRemainingTaskCount(list);
    listCountElement.innerText = `${remaining} ${remaining === 1 ? " task " : " tasks "} remaining`;
}

function getRemainingTaskCount(list) {
    if (list) return list.tasks.filter((task) => !task.checked).length;
    return 30;
}

function renderTasks(list) {
    list.tasks.forEach((task) => renderTask(task));
}

function renderTask(task) {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector("input");
    checkbox.id = task.id;
    checkbox.checked = task.checked;
    const label = taskElement.querySelector("label");
    label.htmlFor = task.id;
    label.append(task.text);
    tasksContainer.appendChild(taskElement);
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
