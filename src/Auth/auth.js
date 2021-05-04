import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

// Genera un estado "Global para toda la App"

export const AuthProvider = (props) => {
  const [user, setUser] = useState({
    name: " ",
    secundName: " ",
    lastNAme: "",
    secundlasteName: " ",
    day: "",
    month: " ",
    year: null,
    email: " ",
    celular: " ",
  });

  // Instaciamos los datos recolectados del usurio de los distintos fromularios en el locarlStorage
  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if (userStorage) {
      setUser(JSON.parse(userStorage));
    } else {
      setUser({
        name: " ",
        secundName: " ",
        lastNAme: "",
        secundlasteName: " ",
        day: " ",
        month: " ",
        year: " ",
        email: " ",
        celular: " ",
       
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

// Exportamos todo el  Auth con los datos para poder utilizarlos como un metodo
export const useAuth = () => React.useContext(AuthContext);
