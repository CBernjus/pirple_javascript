const storage = window.localStorage;

class User {
    constructor(_firstName, _lastName, _email, _password) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.email = _email;
        this.password = hashPassword(_password);
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

function newUser(firstName, lastName, email, password) {
    const user = new User(firstName, lastName, email, password);
    saveUser(user);
}

function getUser(email) {
    const userString = storage.getItem(email);
    return !userString || userString === "" ? null : JSON.parse(userString);
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
    if (user && user.lists) {
        for (let i = 0; i < user.lists.length; i++) {
            if (user.lists[i].id === list.id) {
                user.lists[i] = list;
            }
        }
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
    if (user && user.password == hashPassword(password)) return true;
    return false;
}

function saveUser(user) {
    if (user) {
        storage.setItem(user.email, JSON.stringify(user));
        return true;
    } else return false;
}

function removeUser(email) {
    storage.removeItem(email);
}

function hashPassword(password) {
    return CryptoJS.SHA512(password).toString();
}
