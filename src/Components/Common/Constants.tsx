import { CheckBox } from "@mui/icons-material";
import { GridColDef } from "@mui/x-data-grid";
import { text } from "stream/consumers";
import { IItem, Input } from "../Elements/Input";

export interface IDetailConfig {
  link: string;
  listheader: string;
  addHeader: string;
  editHeader: string;
  columns:IItem[];
}

export interface IListingConfig {
  link: string;
  listheader: string;
  addHeader: string;
  editHeader: string;
  columns: GridColDef[];
}

export interface IEntityConfig {
  list: IListingConfig;
  detailList:IDetailConfig;

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
      list:
      {
        link: "b/PAI7",
        listheader: "All Students",
        addHeader: "Add Student",
        editHeader: "edit Student",
        columns: [
          { field: "rollNo", headerName: "RollNo", flex: 1 },
          {
            field: "name",
            headerName: "Name",
            flex: 1,
            editable: true,
          },
          {
            field: "gender",
            headerName: "Gender",
            flex: 1,
            editable: true,
          },
          {
            field: "class",
            headerName: "Class",
            flex: 1,
            editable: true,
          },
          {
            field: "section",
            headerName: "Section",
            flex: 1,
            editable: true,
          },
          {
            field: "parents",
            headerName: "Parents",
            flex: 1,
            editable: true,
          },
          {
            field: "address",
            headerName: "Address",
            flex: 1,
            editable: true,
          },
          {
            field: "dateOfBirth",
            headerName: "Date Of Birth",
            flex: 1,
            editable: true,
          },
          {
            field: "phoneNo",
            headerName: "PhoneNo",
            type: "number",
            flex: 1,
            editable: true,
          },
          {
            field: "emailId",
            headerName: "EmailId",
            flex: 1,
            editable: true,
          },
        ],

      },
      detailList:
      {
        link: "b/PAI7",
        listheader: "All Students",
        addHeader: "Add Student",
        editHeader: "edit Student",
        
        columns: [
          { field: "rollNo", headerName: "RollNo" ,type : <Input />},
        
        ],

      }

    },
    teacher: {
      list:
      {
        link: "b/G7FG",
        listheader: "All Teachers",
        addHeader: "Add Teacher",
        editHeader: "edit Teacher",
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
      detailList:
      {
        link: "b/PAI7",
        listheader: "All Teacher",
        addHeader: "Add Teacher",
        editHeader: "edit Teacher",
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

      }


    },
   
  },
  baseUrl: "https://www.jsonkeeper.com",
};
