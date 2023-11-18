import { useState, useEffect } from "react";
import {IUser} from '../interfaces/index' 


export const useUsers = () => {
    const [users, setUsers] = useState<IUser[] | []>([]);

    const fetchUsers = () => { 
        fetch("http://localhost:3000/users")
            .then(res => res.json())
            .then((data: { users: IUser[] }) => setUsers(data.users))
            .catch(error => console.error("Error fetching users:", error));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return {
        users,
        refetchUsers: fetchUsers
    };
};