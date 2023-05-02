import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box, { BoxProps } from '@mui/material/Box'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import Icon from '@mui/material/Icon';



import { FormEvent, useState, forwardRef, SetStateAction } from 'react'

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
  message: ''
}



export default function MultiColumnForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [date, setDate] = useState<Date | null | undefined>(null)
  const [language, setLanguage] = useState<string[]>([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [value, setValue] = useState<string>('')

  const handleChangew = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const theme = useTheme()

  const [number, setNumber] = useState<number>(0)
  const [text, setText] = useState<string>('')
  const [numFields, setNumFields] = useState(24);
  const [fieldValue, setFieldValue] = useState(0);
  const [values, setValues] = useState([...Array(numFields)].map(() => ''));
  const handleFieldChange = (event: { target: { value: string } }) => {
    const value = parseInt(event.target.value) || 0;
    setFieldValue(value);
  };

  const totalValue = numFields * fieldValue;

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    setNumber(value)
    setText(`${value} is my favorite number!`)
  }

  const [textFields, setTextFields] = useState([{ value: '' }])

  const handleAddTextField = () => {
    const newTextField = { value: '' }
    setTextFields([...textFields, newTextField])
  }
  const numCols = 12 / numFields;
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const CustomInput = forwardRef((props, ref) => {
    return <TextField fullWidth {...props} inputRef={ref} label='For Date' variant='filled' autoComplete='off' />
  })

  const handleAddField = () => {
    setNumFields(numFields + 1);
    setValues([...values, '']);
  };

  const handleRemoveField = () => {
    if (numFields > 1) {
      setNumFields(numFields - 1);
      setValues(values.slice(0, -1));
    }
  };

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
    <Container maxWidth='lg'>
      <Card  sx={{ padding: theme.spacing(2), }}>
        <Typography variant='h6' sx={{ fontWeight: 'bold', marginBottom: theme.spacing(2), textAlign: 'center' }}>
          Daily Availability and Declaration
        </Typography>
        {/* <Grid item xs={12} sm={6}>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider>
                </Grid> */}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} rowSpacing={2}>
            <Grid item xs={12} md={4} sx={{ display: 'grid' }}>
              <Typography variant='h6' sx={{ fontWeight: 'bold', marginBottom: theme.spacing(1), textAlign: 'center' }}>
                Select Time
              </Typography>
              {[...Array(24)].map((_, i) => (
                <Typography variant='subtitle1' key={i} sx={{ textAlign: 'center' }}>
                  {`${i.toString().padStart(2, '0')}:00 - ${(i === 23 ? '00' : i + 1).toString().padStart(2, '0')}:00`}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                mr={30}
                variant='h6'
                sx={{ fontWeight: 'bold', marginBottom: theme.spacing(1), textAlign: 'center' }}
              >
                Enter Power (MW)
              </Typography>
              {/* <div>
                {[...Array(24)].map((_, i) => (
                  <TextField
                    variant='filled'
                    label='Unit'
                    key={i}
                    id={`outlined-number-${i}`}
                    type='number'
                    size='small'
                    InputLabelProps={{
                      shrink: true
                    }}
                    inputProps={{
                      min: 0
                    }}
                    value={value}
                    onChange={handleChangew}
                    sx={{ marginBottom: theme.spacing(1), textAlign: 'center' }}
                  />
                ))}
              </div> */}

            <div style={{ display: 'flex', flexDirection: 'row' }}>
  <div style={{ marginRight: '16px' }}>
    {[...Array(numFields)].map((_, i) => (
      <TextField
        variant='filled'
        label='Unit'
        key={i}
        id={`outlined-number-${i}`}
        type='number'
        size='small'
        InputLabelProps={{
          shrink: true
        }}
        inputProps={{
          min: 0
        }}
        value={fieldValue}
        onChange={handleFieldChange}
        sx={{ marginBottom: theme.spacing(1), textAlign: 'center' }}
      />
    ))}
    <div>
      <Icon baseClassName="fas" className="fa-plus-circle" color="primary" />
      <Button variant="contained" onClick={handleAddField}>Add Field</Button>
      <Button variant="contained" onClick={handleRemoveField}>Remove Field</Button>
    </div>
  </div>

</div>


            </Grid>

<Grid item xs={12} md={4}>
  <Typography variant='h6' sx={{ fontWeight: 'bold', marginBottom: theme.spacing(1), textAlign: 'center' }}>
    Total value
  </Typography>
  <div>
    <Typography variant='subtitle1' sx={{ textAlign: 'center' }}>
      {totalValue}
    </Typography>
  </div>
</Grid>

            <Grid item xs={12} sm={4} md={4}>
              <Typography
                mr={30}
                variant='h6'
                sx={{ fontWeight: 'bold', marginBottom: theme.spacing(1), textAlign: 'center' }}
              >
                Description
              </Typography>
              <div>
                {[...Array(24)].map((_, i) => (
                  <TextField
                    variant='filled'
                    key={i}
                    id={`outlined-number-${i}`}
                    type='name'
                    size='small'
                    InputLabelProps={{
                      shrink: true
                    }}
                    sx={{ marginBottom: theme.spacing(1), textAlign: 'center' }}
                  />
                ))}
              </div>
            </Grid>



            <Grid item xs={12} sx={{ display: '', justifyContent: 'center' }}>
              <Button
                style={{
                  background: 'linear-gradient(45deg, #2196f3 30%, #1976d2 90%)',
                  borderRadius: '20px',
                  width: '100%',
                  border: 0,
                  color: 'white',
                  height: 48,
                  padding: '0 30px',
                  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
                }}
                type='submit'
                variant='contained'
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Container>
  )
}
