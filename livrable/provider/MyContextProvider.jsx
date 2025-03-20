'use client'
import { createContext, useState, useContext ,useEffect} from "react"
  //creation du context
const MyContext = createContext()
//creation du hook personalise pour l'utilisateur
export const useMyContext = () => {
        return useContext(MyContext)
    }
export default function MyContextProvider({ children }) {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        setTheme(localStorage.getItem('theme', theme=== 'light'? 'dark': 'light'))
    })

 const toggleTheme = () => {
     setTheme(theme === 'light' ? 'dark' : 'light');
     localStorage.setItem('theme', theme ==='light'? 'dark': 'light')
 };
 return (
  <MyContext.Provider value={{ theme, toggleTheme }}>
   {children}
  </MyContext.Provider>
 );
}