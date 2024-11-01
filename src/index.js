import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Board from './features/todolist/Board';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Todolist from './features/todolist/Todolist';
import BoardMaster from './features/todolist/BoardMaster';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element:<Board></Board>,
        children:[
          {
           path:"/",
           element:<BoardMaster></BoardMaster>
          },
          {
            path:"/todolist/:id",
            element:<Todolist></Todolist>
          }
        ]
      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>

  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
