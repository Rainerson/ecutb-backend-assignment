import CreateForm from "./components/CreateForm";
import UserList from "./components/UserList";
import UserProvider from "./contexts/UserContext";
import UserContext from "./contexts/UserContext";

export const App: React.FC = () => {
  return (
    <UserProvider>
      <div className="container mt-5">
        <CreateForm></CreateForm>
        <hr className="my-5"></hr>
        <UserList></UserList>
      </div>
    </UserProvider>
  );
};
