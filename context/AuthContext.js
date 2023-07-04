import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState('');
  const [role, setRole] = useState('');
  const [userToken, setUserToken] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const login = (email, password) => {
    setIsLoading(true);
    setMessage('');
    fetch('https://erp.shambarecords.com/api/v1/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        if (data.success === true) {
          setMessageType('success');
          setMessage(data.message);
          setRole(data.data.user.role);
          setUserToken(data.data.token);
          setName(data.data.user.name);

          if (data.data.user.role === 'farmer') {
            setId(data.data.user.id);
          }
          if (data.data.user.role === 'cooperative admin') {
            setId(data.data.user.cooperative.id);
          }
          const jsonValue = JSON.stringify({
            token: data.data.token,
            id:
              data.data.user.role === 'farmer'
                ? data.data.user.id
                : data.data.user.cooperative.id,
            name: data.data.user.name,
            role: data.data.user.role,
          });
          AsyncStorage.setItem('@storage_Key', jsonValue);
        }
        if (data.success === false && data.data === null) {
          setMessageType('error');
          setMessage(data.message);
        }
        if (data.success === false && data.data.errors.length !== 0) {
          setMessageType('error');
          setMessage(data.data.errors[0]);
        }
      })
      .catch(err => {
        console.log(`err: ${err}`);
        setIsLoading(false);
      });
  };

  const logout = () => {
    setUserToken('');
    setIsLoading(false);
  };
  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isLoading,
        userToken,
        role,
        setRole,
        name,
        id,
        message,
        messageType,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
