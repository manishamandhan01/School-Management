import { GridColDef } from "@mui/x-data-grid";

export interface IEntityConfig {
  list: string;
  header: string;
  columns: GridColDef[];
}
export interface IEntityMap {
  student: IEntityConfig;
  teacher: IEntityConfig;
}
export interface ICommonConstants {
  entityMap: IEntityMap;
  baseUrl: string;
}

export const CommonConstants: ICommonConstants = {
  entityMap: {
    student: {
      list: "b/PAI7",
      header: "All Students",
      columns: [
        { field: "rollNo", headerName: "rollNo", flex: 1 },
        {
          field: "name",
          headerName: "name",
          flex: 1,
          editable: true,
        },
        {
          field: "gender",
          headerName: "gender",
          flex: 1,
          editable: true,
        },
        {
          field: "class",
          headerName: "class",
          flex: 1,
          editable: true,
        },
        {
          field: "section",
          headerName: "section",
          flex: 1,
          editable: true,
        },
        {
          field: "parents",
          headerName: "parents",
          flex: 1,
          editable: true,
        },
        {
          field: "address",
          headerName: "address",
          flex: 1,
          editable: true,
        },
        {
          field: "dateOfBirth",
          headerName: "dateOfBirth",
          flex: 1,
          editable: true,
        },
        {
          field: "phoneNo",
          headerName: "phoneNo",
          type: "number",
          flex: 1,
          editable: true,
        },
        {
          field: "emailId",
          headerName: "emailId",
          flex: 1,
          editable: true,
        },
      ],
    },
    teacher: {
      list: "b/G7FG",
      header: "All Teachers",
      columns: [
        {
          field: "name",
          headerName: "name",
          flex: 1,
          editable: true,
        },
        {
          field: "gender",
          headerName: "gender",
          flex: 1,
          editable: true,
        },

        {
          field: "company",
          headerName: "company",
          flex: 1,
          editable: true,
        },
        {
          field: "address",
          headerName: "address",
          flex: 1,
          editable: true,
        },

        {
          field: "phone",
          headerName: "phone",
          type: "number",
          flex: 1,
          editable: true,
        },
        {
          field: "email",
          headerName: "email",
          flex: 1,
          editable: true,
        },
      ],
    },
  },
  baseUrl: "https://www.jsonkeeper.com",
};
