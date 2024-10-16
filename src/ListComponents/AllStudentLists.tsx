import React from "react";
import { IStudentDetails } from "../Models/StudentModel";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface Iprops {
  studentDetails: IStudentDetails[];
  fetchData: () => void;
}

export const AllStudentLists: React.FC<Iprops> = ({
  studentDetails,
  fetchData,
}) => {
  const initialStudentDetails: IStudentDetails = {
    rollNo: 0,
    name: "",
    gender: "",
    class: "",
    section: "",
    parents: "",
    address: "",
    dateOfbirth: 0,
    phoneNo: 0,
    emailId: "",
  };
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
      <DataGrid
        getRowId={(r) => r.rollNo}
        rows={studentDetails}
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
  );
};
