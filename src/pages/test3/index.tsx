  // import Button from '@mui/material/Button'
  // import TextField from '@mui/material/TextField'
  // import Grid from '@mui/material/Grid'
  // import Card from '@mui/material/Card'
  // import InputLabel from '@mui/material/InputLabel'
  // import MenuItem from '@mui/material/MenuItem'
  // import FormControl from '@mui/material/FormControl'
  // import Select, { SelectChangeEvent }  from '@mui/material/Select'
  // import Container from '@mui/material/Container'
  // import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
  // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
  // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
  // import { DatePicker } from '@mui/x-date-pickers/DatePicker';
  // import Pagination from '@mui/material/Pagination';
  // import OutlinedInput from '@mui/material/OutlinedInput'

  // import { FormEvent, useState,forwardRef } from 'react'

  // interface FormData {
  //   firstName: string
  //   lastName: string
  //   email: string
  //   phone: string
  //   message: string



  // }

  // const initialFormData: FormData = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phone: '',
  //   message: '',


  // }


  // export default function MultiColumnForm() {
  //   const [formData, setFormData] = useState<FormData>(initialFormData)
  //   const [date, setDate] = useState<Date | null | undefined>(null)
  //   const [language, setLanguage] = useState<string[]>([])

  // const CustomInput = forwardRef((props, ref) => {
  //   return <TextField fullWidth {...props} inputRef={ref} label='For Date' variant='filled' autoComplete='off' />
  // })

  // const columns: GridColDef[] = [
  //   { field: 'id', headerName: 'ID No.', width: 130 },
  //   { field: 'firstName', headerName: 'For Date', width: 130 },
  //   { field: 'lastName', headerName: 'From', width: 130 },
  //   {
  //     field: 'age',
  //     headerName: 'submittime',

  //     width: 140,
  //   },
  //   {
  //     field: 'status',
  //     headerName: 'status',
  //     type: 'number',
  //     width: 110,
  //   },
  //   {
  //     field: 'ack',
  //     headerName: 'Acknowledged by',

  //     width: 150,
  //   },
  //   {
  //     field: 'ackn',
  //     headerName: 'Acknowledged time',

  //     width: 150,
  //   },


  // ];

  // const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  // ];


  //   const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault()
  //     console.log(formData) // Replace with your form submission logic
  //   }

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setFormData({ ...formData, [event.target.name]: event.target.value })

  //   }
  //   const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
  //     setLanguage(event.target.value as string[])
  //   }

  //   return (
  //     <Container fixed>
  //           <Grid item xs={12}>
  //             <Button style={{backgroundColor:'#0275d8'}} type='submit' variant='contained'>
  //               Issue New document
  //             </Button>
  //           </Grid>
  //       <Card>
  //       <div style={{ height: 300, width: '100%' }}>
  //       <DataGrid
  //         rows={rows}
  //         columns={columns}


  //       />


  //     </div>


  //       </Card>
  //     </Container>
  //   )
  // }

  import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Container from '@mui/material/Container';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Pagination from '@mui/material/Pagination';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router'

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

export default function MultiColumnForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [date, setDate] = useState<Date | null | undefined>(null);
  const [language, setLanguage] = useState<string[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const CustomInput = (props: any) => {
    return (
      <TextField
        fullWidth
        {...props}
        label='For Date'
        variant='filled'
        autoComplete='off'
      />
    );
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID No.', width: 130 },
    { field: 'firstName', headerName: 'For Date', width: 130 },
    { field: 'lastName', headerName: 'From', width: 130 },
    {
      field: 'age',
      headerName: 'Submittime',
      width: 140,
    },
    {
      field: 'status',
      headerName: 'Status',
      type: 'number',
      width: 110,
    },
    {
      field: 'ack',
      headerName: 'Acknowledged by',
      width: 150,
    },
    {
      field: 'ackn',
      headerName: 'Acknowledged time',
      width: 150,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData); // Replace with your form submission logic
    setIsFormOpen(false);
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    setLanguage(event.target.value as string[]);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  const router = useRouter()
  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5;
  const pageRows = rows.slice(startIndex, endIndex);

  return (
    <Container fixed>
      <Grid item xs={12}>
        <Button
          style={{ backgroundColor: '#0275d8' }}
          onClick={() => router.push('/formdesign')}
          variant='contained'
        >
          Issue New Document
        </Button>
      </Grid>
      <Card>
        <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={pageRows} columns={columns} />
          <Pagination
            count={100}
            page={currentPage}
            onChange={handlePageChange}
            style={{ marginTop: '20px' }}
          />
        </div>
      </Card>
      <Modal open={isFormOpen} onClose={() => setIsFormOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            backgroundColor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <form onSubmit={handleFormSubmit}>
            <TextField
              name='firstName'
              label='First Name'
              variant='outlined'
              fullWidth
              margin='normal'
              value={formData.firstName}
              onChange={handleFormChange}
            />
            <TextField
              name='lastName'
              label='Last Name'
              variant='outlined'
              fullWidth
              margin='normal'
              value={formData.lastName}
              onChange={handleFormChange}
            />
            <TextField
              name='email'
              label='Email'
              type='email'
              variant='outlined'
              fullWidth
              margin='normal'
              value={formData.email}
              onChange={handleFormChange}
            />
            <TextField
              name='phone'
              label='Phone'
              variant='outlined'
              fullWidth
              margin='normal'
              value={formData.phone}
              onChange={handleFormChange}
            />
            <TextField
              name='message'
              label='Message'
              variant='outlined'
              fullWidth
              margin='normal'
              value={formData.message}
              onChange={handleFormChange}
            />
            <Button type='submit' variant='contained'>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </Container>
  );
}
