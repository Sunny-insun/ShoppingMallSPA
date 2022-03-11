export const changeVisibility = (element, isVisible) => {
    isVisible ? element.style.display = "none" : element.style.display ="block";
}

export const setLocalStorage = (key, value) => {
    if(value == "remove"){
        localStorage.removeItem(key)
        return
    }
    
    localStorage.setItem(key, JSON.stringify(value));
} 

export const getLocalStorageValue = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

export const removeLocalStorage = (key) => {
    localStorage.removeItem(key)
}