import { createContext, useState } from "react";
// Create The Context
export const ThemeContext=createContext();
export const ThemeProvider=({children})=>{
    const[theme,setTheme]=useState("light");
    // Toggletheme Function
    const toggleTheme=()=>{
setTheme ((prevTheme)=>(prevTheme==="light"?"dark":"light"));
    };
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};