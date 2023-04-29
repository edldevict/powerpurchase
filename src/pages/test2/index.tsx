import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent }  from '@mui/material/Select'
import Container from '@mui/material/Container'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import OutlinedInput from '@mui/material/OutlinedInput'

import { FormEvent, useState,forwardRef } from 'react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string



}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',


}


export default function MultiColumnForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [date, setDate] = useState<Date | null | undefined>(null)
  const [language, setLanguage] = useState<string[]>([])

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='For Date' variant='filled' autoComplete='off' />
})


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log(formData) // Replace with your form submission logic
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })

  }
  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    setLanguage(event.target.value as string[])
  }

  return (
    <Container fixed>
      <Card>
      <h1 style={{marginLeft:'500px'}}>Power purchase</h1>
      <hr></hr>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>

            <Grid item xs={12} sm={6}>
              <TextField
                variant='filled'
                name='firstName'
                label='First Name'
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='filled'
                name='lastName'
                label='Last Name'
                value={formData.lastName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={8} sm={6}>
              <TextField
                variant='filled'
                name='email'
                label='Email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={8} sm={6}>
              <TextField
                variant='filled'
                name='email'
                label='Email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={4} sm={4}>
              <TextField
                variant='filled'
                name='phone'
                label='Phone'
                type='tel'
                value={formData.phone}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={4} sm={4}>
              <TextField
                variant='filled'
                name='phone'
                label='Phone'
                type='tel'
                value={formData.phone}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={4} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Language</InputLabel>
                <Select
                  variant='filled'
                  value={language}
                  onChange={handleSelectChange}

                  input={<OutlinedInput label='Language' id='select-multiple-language' />}
                >
                  <MenuItem value='English'>English</MenuItem>
                  <MenuItem value='French'>French</MenuItem>
                  <MenuItem value='Spanish'>Spanish</MenuItem>
                  <MenuItem value='Portuguese'>Portuguese</MenuItem>
                  <MenuItem value='Italian'>Italian</MenuItem>
                  <MenuItem value='German'>German</MenuItem>
                  <MenuItem value='Arabic'>Arabic</MenuItem>
                </Select>
              </FormControl>
            </Grid>


            <Grid item xs={12}>
              <TextField
                variant='filled'
                name='message'
                label='Message'
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' color='primary'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Container>
  )
}
