// import {useState} from 'react';
import useLocalStorage from './useLocalStorage';

// const useDarkMode = (initialValue) => {
//     const [darkMode,setDarkMode] = useState(initialValue);
//     return [darkMode,setDarkMode];
// };

const useDarkMode = (initialValue) => {
    const [darkMode,setDarkMode] = useLocalStorage(initialValue);
    return [darkMode,setDarkMode];
};


export default useDarkMode;