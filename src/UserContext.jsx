
import React, { createContext, useState } from 'react';


const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setName] = useState("hemant");

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
