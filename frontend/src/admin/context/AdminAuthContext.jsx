import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    // load from localStorage initially
    return localStorage.getItem('admin_logged_in') === 'true';
  });

  const login = () => {
    setIsAdminAuthenticated(true);
    localStorage.setItem('admin_logged_in', 'true');
  };

  const logout = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem('admin_logged_in');
  };

  return (
    <AdminAuthContext.Provider value={{ isAdminAuthenticated, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
