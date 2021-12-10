import { createContext, useState } from "react";


export const LoginContext = createContext(null);


const ContextProvider = ({ children }) => {
    const [account, setAccount] = useState('');
    const [user, setUser] = useState({});

    return (
        <LoginContext.Provider 
            value={{ account, setAccount, user, setUser }}
        >
            {children}
        </LoginContext.Provider>
    )
}


export default ContextProvider;