import React, { useEffect, useState } from "react";
import { CommonConstants } from "../Common/Constants";
import { CommonList } from "../Lists/CommonList";

interface IProps{
  entity:string;
}

export const CommonFetch :React.FC<IProps>=({entity}) => {

  console.log(entity);
//   Object.keys(CommonConstants.entityMap).forEach(key => {
//     if (key === entity) {
//         let value = CommonConstants.entityMap[ key as keyof CommonConstants.entityMap];
//     }
// });
//   console.log(CommonConstants.entityMap[entity as keyof typeof String].list);
const propertyPath = "entityMap.student";
const propertyValue = propertyPath.split('.').reduce((obj, key) => obj?.[key], CommonConstants);


  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      `${CommonConstants.baseUrl}/${CommonConstants.entityMap.student.list}`
    );
    const json = await data.json();
    setItems(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CommonList items={items} />
  );
};
