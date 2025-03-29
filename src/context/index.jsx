import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    
    return (
        <UserContext.Provider
            value={{users, setUsers, filteredUsers, setFilteredUsers, page, setPage, searchQuery, setSearchQuery}}
        >
            {children}
        </UserContext.Provider>
    )
}