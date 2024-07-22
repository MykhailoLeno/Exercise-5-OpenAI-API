const saveLocalStorage = document.querySelector("#saveForm"),
    getLocalStorage = document.querySelector("#getForm"),
    removeLocalStorage = document.querySelector("#removeForm"),
    clearLocalStorage = document.querySelector("#clearButton"),
    output = document.querySelector("#output");

// save new local storage
saveLocalStorage.addEventListener("submit", (event) => {
    event.preventDefault();

    function clearInputs() {
        key.value = "";
        value.value = "";
    }

    let key = document.querySelector("#keyInput"),
        value = document.querySelector("#valueInput");

    if (key !== "" && value !== "") {
        localStorage.setItem(key.value, value.value);
        output.innerText = `You added key: ${key.value} with value: ${value.value} to local storage`;
        clearInputs();
        setTimeout(() => {
            output.innerText = "";
        }, 5000);
    }
});

// get local storage by key
getLocalStorage.addEventListener("submit", (event) => {
    event.preventDefault();

    function clearInputs() {
        key.value = "";
    }

    let key = document.querySelector("#getKeyInput");

    if (key !== "" && localStorage.getItem(key.value)) {
        const value = localStorage.getItem(key.value);
        output.innerText = `The key: ${key.value} is exists, and you got the value: ${value}`;
        clearInputs();
        setTimeout(() => {
            output.innerText = "";
        }, 5000);
    } else {
        output.innerText = `This key: ${key.value} doesn't exists in local storage, sorry`;
        setTimeout(() => {
            output.innerText = "";
        }, 5000);
        clearInputs();
    }
});

// clear all local storages
clearLocalStorage.addEventListener("click", () => {
    localStorage.clear();
    output.innerText = `Your local storage is clean`;
    setTimeout(() => {
        output.innerText = "";
    }, 5000);
})

// remove local storage by key
removeLocalStorage.addEventListener("submit", (event) => {
    event.preventDefault();

    function clearInputs() {
        key.value = "";
    }

    let key = document.querySelector("#removeKeyInput");

    if (key !== "" && localStorage.getItem(key.value)) {

        const value = localStorage.getItem(key.value);
        localStorage.removeItem(key.value);
        output.innerText = `You have deleted the key: ${key.value} with the value: ${value} from local storage`;
        setTimeout(() => {
            output.innerText = "";
        }, 5000);
        clearInputs();
    } else {
        output.innerText = `This key: ${key.value} doesn't exists in local storage, sorry`;
        setTimeout(() => {
            output.innerText = "";
        }, 5000);
        clearInputs();
    }
});