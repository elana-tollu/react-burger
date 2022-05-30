import { createContext, useContext, useState } from "react";

const AuthContext = createContext(undefined);

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
} 

export function useProvideAuth() {
    const [user, setUser] = useState(null);
  
    const signIn = cb => {
      return fakeAuth.signIn(() => {
              // Временные данные, которые будут доступны приложению
        setUser({ id: 1337, name: 'David' });
        cb();
      });
    };
  
    const signOut = cb => {
      return fakeAuth.signOut(() => {
        setUser(null);
        cb();
      });
    };
  
    return {
      user,
      signIn,
      signOut
    };
}

const fakeAuth = {
    isAuthenticated: true,
    signIn(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signOut(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
};

export function useAuth() {
    return useContext(AuthContext);
} 