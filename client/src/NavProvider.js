import React, { createContext, useState } from 'react';

export const NavContext =createContext({
    open:false
});
const NavProvider =({children})=>{
    const [open, setOpen] = useState(false)
    const toggleOpen =() =>setOpen(!open)
    return(
        <NavContext.Provider
        value={{
            open,
            toggleOpen
        }}
        >
            {children}
        </NavContext.Provider>
    );
}
export default NavProvider