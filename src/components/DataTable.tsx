import React, { useState, useEffect } from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server'
import {DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';


const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 90, hide: true },
    {field: 'first', headerName: 'First Name', flex: 1 },
    {field: 'last', headerName: 'Last Name', flex: 1 },
    {field: 'email', headerName: 'Email', flex: 1 },
    {field: 'phone_number', headerName: 'Phone Number', flex: 1 },
    {field: 'address', headerName: 'Address', flex: 2 }
];

// TODO write useGetData hook and selection model state chagne content
function DataTable() {
    const [open, setOpen] = useState(false);
    const {contactData, getData } = useGetData();
    const[ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`SelectionModel: ${selectionModel}`)
        setTimeout( () => { window.location.reload() }, 5000)
    }
    const updateData = () => {
        server_calls.update(selectionModel[0]);
        getData();
        console.log(`SelectionModel: ${selectionModel}`)
        setTimeout( () => { window.location.reload() }, 5000)
    }
    
    // const getData = async () => {
    //     const result = await server_calls.get();
    //     console.log(result)
    // }


    // TODO add delete function to button
    return (
        <>
{/* Modal */}
            <Modal
                id={selectionModel}
                open={open}
                onClose={handleClose}
            />

{/* Buttons section for controlling CRUD*/}
            <div className='flex flex-row'>
                <div className=''>
                    <button className='p-3 m-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white' onClick={() => handleOpen()}>Create Contact</button>
                    <Button className='p-3 m-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white' onClick={updateData}>Update</Button>
                    <Button className='p-3 m-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white' onClick={deleteData}>Delete</Button>
                    <button className='p-3 m-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white' onClick={getData}>Data</button>
                </div>
            </div>

{/* Data Table */}
            <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%'}}
            >
                <h2 className='p-3 bg-slate-300 my-2 rounded'>My Contacts</h2>
                <DataGrid rows={contactData} columns={columns} rowsPerPageOptions={[5]} checkboxSelection={true}
                onSelectionModelChange = { (item:any ) => {
                    setSelectionModel(item)
                }}
                />

            </div>
        </>
    )
}



export default DataTable