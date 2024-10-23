import React, { ReactNode } from 'react'


export interface IItem {
    field: string,
    headerName: string,
    type:ReactNode,
}
export interface IProps{
      item : IItem
}

export const Input : React.FC<IProps>=({item})=> {
    



  return (
    <div>
        <label>{item?.headerName}</label>
        <input className="form-control" id={item.field} placeholder={`Enter ${item.headerName}`} />
    </div>
  )
}
