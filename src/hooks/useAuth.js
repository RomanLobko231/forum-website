import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return { token: token, user: user ? JSON.parse(user) : null };
  });

  const login = (currentUser) => {
    localStorage.setItem('token', currentUser.token);
    localStorage.setItem('user', JSON.stringify(currentUser.user));
    setCurrentUser(currentUser);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ ...currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
