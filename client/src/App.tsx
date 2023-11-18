import { UserList } from "./components/UserList";
import { useUsers } from "./hooks/useUsers";
import { UsersForm } from "./components/UserForm";
import "./App.css";
function App() {
  const { users, refetchUsers } = useUsers();

  return (
    <>
      <main>
        <UsersForm refetchUsers={refetchUsers} />
        <UserList users={users} />
      </main>
    </>
  );
}

export default App;
