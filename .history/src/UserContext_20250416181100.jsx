import React from 'react'
import { createContext } from 'react';

import { useContext } from 'react';

const myContext = createContext();

const UserContext = () => {

    const [name, setName] = useState("Raman");

    const [user, setUser]
  return (
      <>

      </>
  )
}

export default UserContext;
export { UserContext };