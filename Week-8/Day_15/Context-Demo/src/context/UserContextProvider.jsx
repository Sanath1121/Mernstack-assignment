import React from "react";
import { useState } from "react";
import { UserContext } from "./UserContext";

function UserContextProvider({ children }) {
  const [user, setUser] = useState({ name: "", email: "" });

  const changeUser = (newUser) => {
    setUser(newUser);
  };
  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
