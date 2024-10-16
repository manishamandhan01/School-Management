import React, { useEffect, useState } from "react";
import {AllStudentLists} from "../../ListComponents/AllStudentLists";

export const Students = () => {
 
  const [studentDetails, setStudentDetails] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://www.jsonkeeper.com/b/PAI7");
    const json = await data.json();
    setStudentDetails(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (<AllStudentLists studentDetails={studentDetails} fetchData={fetchData} />);
};
