import { useState } from "react";
import AuthPage from "./components/AuthPage/AuthPage";
import MainPage from "./components/MainPage/MainPage";
import "./less/App.less";
import ActionPanel from "components/UI/ActionPanel/ActionPanel";

export type TUser = {
  id: number;
  name: string;
  pass: string;
};

function App() {
  const users: TUser[] = [
    { id: 0, name: "Crystal D. Moore", pass: "1111" },
    { id: 1, name: "Sherri R. Sears", pass: "1111" },
    { id: 2, name: "Sherri R. Sears", pass: "1111" },
    { id: 3, name: "Carmen C. Blanco", pass: "1111" },
    { id: 4, name: "William C. Townsend", pass: "1111" },
    { id: 5, name: "Sylvia K. Morris", pass: "1111" },
    { id: 6, name: "Mary S. Soto", pass: "1111" },
    { id: 7, name: "April J. McIntosh", pass: "1111" },
    { id: 8, name: "Louise C. Lara", pass: "1111" },
    { id: 9, name: "Elizabeth M. Clark", pass: "1111" },
    { id: 10, name: "Elizabeth M. Clark", pass: "1111" },
    { id: 11, name: "Sherri R. Sears", pass: "1111" },
    { id: 12, name: "Carmen C. Blanco", pass: "1111" },
    { id: 13, name: "Carmen C. Blanco", pass: "1111" },
    { id: 14, name: "Sylvia K. Morris", pass: "1111" },
    { id: 15, name: "April J. McIntosh", pass: "1111" },
    { id: 16, name: "William C. Townsend", pass: "1111" },
    { id: 17, name: "William C. Townsend", pass: "1111" },
    { id: 18, name: "William C. Townsend", pass: "1111" },
    { id: 19, name: "Mary S. Soto", pass: "1111" },
    { id: 20, name: "Louise C. Lara", pass: "1111" },
    { id: 21, name: "Crystal D. Moore", pass: "1111" },
    { id: 22, name: "Sherri R. Sears", pass: "1111" },
    { id: 23, name: "Carmen C. Blanco", pass: "1111" },
    { id: 24, name: "William C. Townsend", pass: "1111" },
    { id: 25, name: "Sylvia K. Morris", pass: "1111" },
    { id: 26, name: "Crystal D. Moore", pass: "1111" },
    { id: 27, name: "Mary S. Soto", pass: "1111" },
    { id: 28, name: "April J. McIntosh", pass: "1111" },
    { id: 29, name: "Elizabeth M. Clark", pass: "1111" },
    { id: 30, name: "Louise C. Lara", pass: "1111" },
    { id: 31, name: "Louise C. Lara", pass: "1111" },
  ];
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
