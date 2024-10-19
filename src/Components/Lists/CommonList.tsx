import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { v4 as uuidv4 } from "uuid";

interface IProps<T> {
  items: T[];
  headertext: string;
  columns: GridColDef[];
}

export const CommonList = <T,>({
  items,
  headertext,
  columns,
}: IProps<T>): JSX.Element => {
  
  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">{headertext}</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h1 className="m-0">{headertext}</h1>
                </div>

                <div className="card-body">
                  <DataGrid
                    getRowId={() => uuidv4()}
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

                {/* <div className="card-footer clearfix">
               
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
