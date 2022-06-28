import React, { useState, useEffect } from "react";
import SearchPanel from "./SearchPanel";
import List from "./List";

const API_URL = process.env.REACT_APP_SERVER_URL;

const useDebounce = (value: object, delay?: number) => {
  const [ debounceValue, setDebounceValue ] = useState(value);
  useEffect(() => {
    const timer = setTimeout(function() {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [ value, delay ])
  return debounceValue;
}


const InDex = () => {
  const [ param, setParam ] = useState({
    name: '',
    personId: 0,
  });

  const newValue = useDebounce(param, 2000);
  const [ lists, setLists ] = useState([]);
  const [ users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);
  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then(response => response.json())
      .then(data => setLists(data));
  }, [newValue]);

  return (
    <div>
      <h1>ProjectList</h1>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List lists={lists}/>
    </div>
  );
}

export default InDex;
