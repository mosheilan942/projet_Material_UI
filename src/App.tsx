import React from 'react';
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Outlet } from 'react-router-dom';

export default function App() {
  
  return (
    <>
    <p>App</p>
    <Provider store={store}>
      <Outlet />
    </Provider>
    </>
  );
}

