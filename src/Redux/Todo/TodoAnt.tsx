import "antd/dist/antd.css"; //DEFAULT CSS

// import "../../antd/main.css"; //CUSTOM CSS

import { useAppDispatch, useAppselector } from "../hooks/redux-hooks";

import { fetchTodos, fetchParticularTodo } from "../store/todo-actions";

import { useState } from "react";

import { useAuth } from "../../route/Auth";

// import "./Todo.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TableAntd } from "../../antd/customComponents/TableAntd";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Table from "antd/lib/table";
import { DatePicker } from "antd";
import { DatePickerAntd } from "../../antd/customComponents/DatePickerAntd";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    width: "auto",
  },
  {
    title: "Todo",
    dataIndex: "todo",
    key: "todo",
    width: "auto",
  },
  {
    title: "User",
    dataIndex: "userId",
    key: "userId",
    width: "auto",
  },
];

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TodoAnt = () => {
  const [value, setValue] = React.useState(0);
  const auth = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    auth.logout();
    navigate("/login");
  }

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [todo_id, setTodo_id] = useState(1);
  const dispatch = useAppDispatch();
  const alltodos = useAppselector((state) => state.todo.all_todos);
  const particularTodo = useAppselector((state) => state.todo.particular_todo);
  const clickHandler = () => [dispatch(fetchTodos())];
  const searchHandler = () => {
    dispatch(fetchParticularTodo(todo_id));
  };
  const checkTodo = (): boolean => {
    if (alltodos.length === 0) {
      return false;
    }
    return true;
  };

  const checkparticularTodo = (): boolean => {
    if (particularTodo.id === 0) {
      return false;
    }
    return true;
  };
  return (
    <div style={{ marginLeft: "15px" }}>
      <h1>Welcome</h1>

      <div
        style={{
          padding: "25px",
          marginBottom: "30px",
          backgroundColor: "skyBlue",
          boxShadow: "20px 20px 10px lightpink",
          borderRadius: "30px",
        }}
      >
        <h2 style={{ display: "inline" }}> Custom Date Picker </h2>
        <DatePickerAntd />

        <h2 style={{ display: "inline" }}> AntD Date Picker </h2>
        <DatePicker />
      </div>

      <button onClick={clickHandler}> List All Tasks</button>

      {checkTodo() && (
        <h2 style={{ marginTop: "75px" }}>Custom Table Component</h2>
      )}
      {checkTodo() && <TableAntd columns={columns} data={alltodos} />}
      <br />

      {checkTodo() && <h2>AntD Table Component</h2>}

      {checkTodo() && (
        <Table columns={checkTodo() && columns} dataSource={alltodos} />
      )}
    </div>
  );
};
export default TodoAnt;
