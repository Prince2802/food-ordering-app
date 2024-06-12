import { useEffect, useState } from "react";

const User = () => {

  const [user,setUser]= useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/Prince2802");
    const json = await data.json();
    console.log(json);
    setUser(json);
  };

  const{name,location,company} = setUser;

  return (
    <div className="user-card">
      <div>name : {name}</div>
      <div>location :{location}</div>
      <div>company : {company}</div>
    </div>
  );
};

export default User;
