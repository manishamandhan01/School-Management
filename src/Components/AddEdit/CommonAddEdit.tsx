import { GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { CommonConstants } from '../Common/Constants';
import { MenuItem, Select } from '@mui/material';

interface IProps<T> {
    entity: string;

}

const CommonAddEdit = <T,>({ entity }: IProps<T>): JSX.Element => {
    const [fields, setFields] = useState<GridColDef[]>();
    const [headerText, setHeaderText] = useState("");

    useEffect(() => {
        setFields(CommonConstants.entityMap[entity as keyof typeof CommonConstants.entityMap].detailList.columns);
        setHeaderText(CommonConstants.entityMap[entity as keyof typeof CommonConstants.entityMap].detailList.addHeader)


    }, [])

    return (
        <div>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>{headerText}</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">General Form</li>
                            </ol>
                        </div>
                    </div>
                </div>

            </section>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-6 ">

                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">{headerText}</h3>
                                </div>


                                <form >
                                    <div className="card-body">
                                        {
                                            fields?.map((items, index) => {
                                                return (


                                                    <div className="form-group">
                                                        <label>{items?.headerName}</label>
                                                        <input className="form-control" id={items.field} placeholder={`Enter ${items.headerName}`} />
                                                        
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            value={10}
                                                            label="Age"
                                                            // onChange={handleChange}
                                                        >
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                        </Select>

                                                    </div>


                                                )
                                            }

                                            )
                                        }
                                    </div>

                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>










                        </div>




                    </div>

                </div>
            </section>
        </div>
    )
}

export default CommonAddEdit