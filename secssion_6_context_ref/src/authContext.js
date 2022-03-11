import { createContext } from "react";

const AuthCtx = createContext({
    isLoggedIn : false
});

export default AuthCtx;