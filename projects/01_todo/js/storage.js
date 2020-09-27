let storage = window.localStorage;

class User {
    constructor(_firstName, _lastName, _email, _password) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.email = _email;
        this.password = _password;
        this.lists = {};
    }

    toString() {
        return JSON.stringify(this);
    }

    fromString(str) {
        const parsed = JSON.parse(str);
        if (parsed instanceof User) return false;
        return parsed;
    }
}

class List {
    constructor(_name) {
        this.name = _name;
        this.items = [];
    }

    add(item) {
        if (!(item instanceof ListItem)) return false;
        this.items.push(item);
    }

    removeAt(index) {
        this.items.splice(index);
    }
}

class ListItem {
    constructor(_text) {
        this.text = _text;
        this.checked = false;
    }

    check() {
        this.checked = true;
    }

    uncheck() {
        this.checked = false;
    }
}

function newUser(firstName, lastName, email, password) {
    const user = new User(firstName, lastName, email, password);
    saveUser(user);
}

function getUser(email) {
    return User.fromString(storage.getItem(email));
}

function getList(email, listName) {
    const user = getUser(email);
}

function updateUserInfo(email, property, value) {
    const user = getUser(email);
    switch (property) {
        case "firstName":
            user.firstName = value;
            break;
        case "lastName":
            user.firstName = value;
            break;
        case "email":
            user.firstName = value;
            break;
        case "password":
            user.firstName = value;
            break;
        default:
            return false;
            break;
    }
    saveUser(user);
    return true;
}

function userExists(email) {
    const user = storage.getItem(email);
    if (user) return true;
    return false;
}

function saveUser(user) {
    storage.setItem(user.email, user.toString());
}

function removeUser(email) {
    storage.removeItem(email);
}
