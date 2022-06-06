import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ThemeProvider } from "@mui/system";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { theme } from "./styles/theme.styles";
import { BrowserRouter } from "react-router-dom";
import TodoAnt from "./Redux/Todo/TodoAnt"
import Todo from "./Redux/Todo/Todo";
import Antd1 from "./Redux/Todo/Antd1";
import AntTest from "./test/AntTest";
import { DatePickerAntd } from "./antd/customComponents/DatePickerAntd";
import Menubar from "./antd/customComponents/Menubar";
import { DatePicker as AntdDatePicker } from "antd";  
import FooterApp from "./pages/Footer";
import EditPage from "./wysiwyg/EditPage"
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
        {/* <FooterApp /> */}
<EditPage />
          {/* <App /> */}
{/* <Menubar /> */}
{/* <AntTest /> */}
{/* <TodoAnt /> */}
       {/* <AntdDatePicker /> */}
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
