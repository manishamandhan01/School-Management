import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface IProps<T> {
  items: T[];
}

export const CommonList = <T,>({ items }: IProps<T>): JSX.Element => {
 
  const columns: GridColDef[] = [
    { field: "rollNo", headerName: "rollNo", width: 90 },
    {
      field: "name",
      headerName: "name",
      width: 150,
      editable: true,
    },
    {
      field: "gender",
      headerName: "gender",
      width: 150,
      editable: true,
    },
    {
      field: "phoneNo",
      headerName: "phoneNo",
      type: "number",
      width: 110,
      editable: true,
    },
  ];

  return (
    <div>
      <h1>All Students Data</h1>

      <div>
        <DataGrid
          getRowId={(r) => r.rollNo}
          rows={items}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[50]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};
