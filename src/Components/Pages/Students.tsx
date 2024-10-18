import React, { useEffect, useState } from "react";
import { AllStudentLists } from "../Lists/AllStudentLists";
import { CommonConstants } from "../Common/Constants";

export const 
Students = () => {
 
  const [studentDetails, setStudentDetails] = useState([]);

  const fetchData = async () => {
    const data = await fetch(`${CommonConstants.baseUrl}/${CommonConstants.entity.student.list}`);
    const json = await data.json();
    setStudentDetails(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (<AllStudentLists studentDetails={studentDetails} fetchData={fetchData} />);
};
