import { useState } from "react";
import AuthPage from "./components/AuthPage/AuthPage";
import MainPage from "./components/MainPage/MainPage.tsx";
import "./less/App.less";
import { users } from "types/mock";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");

  const auth = (login: string, password: string) => {
    for (const user of users) {
      if (user.name == login && user.pass == password) {
        setUserName(user.name);
        setIsAuth(true);
        return true;
      }
    }
    return false;
  };

  if (isAuth) {
    return <MainPage />;
  }

  return <AuthPage users={users} auth={auth} />;
}

export default App;
