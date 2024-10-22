import React, { useEffect, useState } from "react";
import { CommonConstants } from "../Common/Constants";
import { CommonList } from "../Lists/CommonList";
import { GridColDef } from "@mui/x-data-grid";

interface IProps {
  entity: string;
}

export const CommonFetch: React.FC<IProps> = ({ entity }) => {
  console.log(entity);

  const [items, setItems] = useState([]);
  const [header,setHeader] = useState("");
  const [columns,setColumns]= useState<GridColDef[]>([]);

  const fetchData = async () => {
    const data = await fetch(
      `${CommonConstants.baseUrl}/${CommonConstants.entityMap[entity as keyof typeof CommonConstants.entityMap].list}`
    );
    const json = await data.json();
    setItems(json);
  };
  
  useEffect(() => {
    fetchData();
    setHeader(CommonConstants.entityMap[entity as keyof typeof CommonConstants.entityMap].listheader);
    setColumns(CommonConstants.entityMap[entity as keyof typeof CommonConstants.entityMap].columns)

  }, []);

  return <CommonList items={items} headertext={header} columns={columns}/>;
};
