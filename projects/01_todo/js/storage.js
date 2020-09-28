const storage = window.localStorage;
const STORAGE_KEY = "todo-users";

class User {
    constructor(_firstName, _lastName, _email, _password) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.email = _email;
        this.password = _password;
        this.lists = [];
    }
}

class List {
    constructor(_name) {
        this.id = Date.now().toString();
        this.name = _name;
        this.tasks = [];
    }

    add(item) {
        if (!(item instanceof ListItem)) return false;
        this.items.push(item);
    }

    removeAt(index) {
        this.items.splice(index);
    }
}

class Task {
    constructor(_text, _checked) {
        this.id = Date.now().toString();
        this.text = _text;
        this.checked = _checked;
    }
}

function getUserList() {
    const listString = storage.getItem(STORAGE_KEY);
    return !listString || listString === "" ? [] : JSON.parse(storage.getItem(STORAGE_KEY));
}

function newUser(firstName, lastName, email, password) {
    const user = new User(firstName, lastName, email, password);
    saveUser(user);
}

function getUser(email) {
    return getUserList().find((user) => user.email == email);
}

function getLists(email) {
    const user = getUser(email);
    if (user) return user.lists;
    else return false;
}

function getList(email, listId) {
    const user = getUser(email);
    if (user) return user.lists.filter((list) => list.id === listId);
    else return false;
}

function addList(email, list) {
    const user = getUser(email);
    if (user && user.lists) {
        user.lists.push(list);
        saveUser(user);
        return true;
    } else return false;
}

function removeList(email, listId) {
    const user = getUser(email);
    if (user && user.lists) {
        user.lists = user.lists.filter((list) => list.id !== listId);
        saveUser(user);
        return true;
    } else return false;
}

function updateList(email, list) {
    const user = getUser(email);
    console.log(user);
    if (user && user.lists) {
        for (let i = 0; i < user.lists.length; i++) {
            if (user.lists[i].id === list.id) {
                console.log("true");
                user.lists[i] = list;
            }
        }
        console.log(user);
        saveUser(user);
        return true;
    } else return false;
}

function userExists(email) {
    const user = getUser(email);
    if (user) return true;
    return false;
}

function authenticate(email, password) {
    const user = getUser(email);
    if (user && user.password == password) return true;
    return false;
}

function saveUser(user) {
    const userList = getUserList().filter((u) => u.email !== user.email);
    userList.push(user);
    storage.setItem(STORAGE_KEY, JSON.stringify(userList));
}

function removeUser(email) {
    const userList = getUserList().filter((user) => user.email !== email);
    storage.setItem(STORAGE_KEY, userList);
}
