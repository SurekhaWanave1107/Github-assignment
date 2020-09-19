import React from "react";
import UserForm from "./components/UsersForm";
import { Provider } from "react-redux";
import Store from "./Store";

function App() {
  return (
    <Provider store={Store}>
      <div>
        <UserForm />
      </div>
    </Provider>
  );
}
export default App;
