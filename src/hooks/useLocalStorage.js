import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    
    const [storedValue, setStoredValue] = useState(() => {
        // if(localStorage.getItem(key)) {
        //     return JSON.parse(localStorage.getItem(key));
        // } else {
        //     localStorage.setItem(key, initialValue);
        //     return initialValue;
        // }

        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = (value) => {
        window.localStorage.setItem(key, value);
        setStoredValue(value);
    }

    return [storedValue, setValue];

};

export default useLocalStorage