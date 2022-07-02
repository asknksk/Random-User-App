import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import UsersPage from "./UsersPage";

const RandomUser = () => {
  const [user, setUser] = useState("");
  const url = "https://randomuser.me/api";

  const users = async () => {
    try {
      const { data } = await axios.get(url);
      setUser(data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  useEffect(() => {
    users();
  }, []);

  const handleRandomUser = () => {
    users();
  };

  return (
    <>
      <UsersPage user={user} />
      <button onClick={() => handleRandomUser()}>Random User</button>
    </>
  );
};

export default RandomUser;
