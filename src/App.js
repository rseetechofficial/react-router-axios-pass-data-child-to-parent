import axios from 'axios';
import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [users, setUsers] = useState({});

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <>
    {isEmpty(users) ? 
        <div> No Data Availabe! </div>
        :
        users?.map((user, index) => {
          return (
            <div key={index}>{user.name && <h1>{user.name}</h1>}</div>
          );
        })
      }
    </>
  );
}