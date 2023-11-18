import { IUser } from "../../interfaces";
import styles from "./styles.module.css";
export function UserList({ users }: {users: IUser[]}) {
    if(!users) return null;

    const fullName = (user:IUser) => `${user.firstname} ${user.lastname}`
    return (
        <div className={styles.usersList}>
            {
                users.map((user) => (
                    <div className={styles.user} key={user._id}>
                        <img src={user.image} alt={fullName(user)}></img>
                        <h2>{fullName(user)}</h2>
                    </div>
                ))
            }
        </div>
    )
}