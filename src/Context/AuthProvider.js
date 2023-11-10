import { createContext, useState } from 'react'

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const [userName, setUserName] = useState("")
    const [userImage, setUserImage] = useState("")


    return (
        <AuthContext.Provider value={{
            auth, setAuth,
            userName, setUserName,
            userImage, setUserImage

        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;  