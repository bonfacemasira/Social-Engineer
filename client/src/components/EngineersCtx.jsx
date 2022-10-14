import { useEffect, useState } from "react";
import Card from "./engineer/Card";

function Engineers() {
  const apiUrl = "/api/users";
  let [engineers, setEngineers] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => setEngineers(res));
  }, []);
  
  const arrEngineer = engineers.map((eng, idx) => (
    <Card key={idx} engineer={eng}></Card>
  ));


  return <div>{arrEngineer}</div>;
}

export default Engineers;
