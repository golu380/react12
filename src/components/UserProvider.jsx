import { createContext } from "react";


export const UserContext = createContext(null);

const user = { 
name: "John Doe", 
id: 101, 
course: "React JS", 
}; 


function UserProvider({children}){

    return (
          <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
    )
  
}

export default UserProvider;