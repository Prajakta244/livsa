import { useState, useEffect } from 'react'
import CustomTable from '@/components/CustomTable';
import CustomTab from '@/components/CustomTab';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import Navbar from './Navbar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const ChildElement = ({ timeline, setTimeline }) => {

    const handleChange = (event) => {
        setTimeline(event.target.value);
    };
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={'daily'}
                    value={timeline}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'green', // Default border color
                            },
                            '&:hover fieldset': {
                                borderColor: 'green', // Border color on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'red', // Border color when focused
                            },
                        }
                    }}
                    onChange={handleChange}
                >
                    <MenuItem value='daily'>Daily</MenuItem>
                    <MenuItem value='monthly'>Monthly</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}
const AppointmentDetails = () => {
    const [timeline, setTimeline] = useState('daily');
    const dailyData = [{ day: '10 mon', totalPatients: 23 },
    { day: '11 tue', totalPatients: 45 },
    { day: '12 wed', totalPatients: 67 },
    { day: '13 thu', totalPatients: 34 },
    { day: '14 fri', totalPatients: 29 },
    { day: '15 sat', totalPatients: 78 },
    { day: '16 sun', totalPatients: 56 },
    { day: '17 mon', totalPatients: 88 },
    { day: '18 tue', totalPatients: 50 },
    { day: '19 wed', totalPatients: 72 },
    { day: '20 thu', totalPatients: 61 },
    { day: '21 fri', totalPatients: 35 },
    { day: '22 sat', totalPatients: 90 },
    { day: '23 sun', totalPatients: 42 },
    { day: '24 mon', totalPatients: 60 },
    { day: '25 tue', totalPatients: 81 },
    { day: '26 wed', totalPatients: 33 },
    { day: '27 thu', totalPatients: 22 },
    { day: '28 fri', totalPatients: 66 },
    { day: '29 sat', totalPatients: 77 }
    ]
    const dailyDataHeader = ['Day', 'Total patients']
    const monthDataHeader = ['Month', 'Total patients']
    const monthData = [
        { month: "January", totalPatients: 300 },
        { month: "February", totalPatients: 250 },
        { month: "March", totalPatients: 400 },
        { month: "April", totalPatients: 350 },
        { month: "May", totalPatients: 500 },
        { month: "June", totalPatients: 450 },
        { month: "July", totalPatients: 600 },
        { month: "August", totalPatients: 550 },
        { month: "September", totalPatients: 500 },
        { month: "October", totalPatients: 700 },
        { month: "November", totalPatients: 650 },
        { month: "December", totalPatients: 550 }
    ];
    const [overallData, setOverallData] = useState(dailyData)
    const [overallDataHeader, setOverallDataHeader] = useState(dailyDataHeader)
    useEffect(() => {
        if (timeline == 'monthly') {
            setOverallData(monthData)
            setOverallDataHeader(monthDataHeader)
        } else {
            setOverallData(dailyData)
            setOverallDataHeader(dailyDataHeader)
        }
    }, [timeline])
    const patientData = [
        { no: 1, name: "John Doe", time: "05:30 AM", action: "done" },
        { no: 2, name: "Jane Smith", time: "06:00 AM", action: "pending" },
        { no: 3, name: "Alice Brown", time: "06:30 AM", action: "done" },
        { no: 4, name: "Bob White", time: "07:00 AM", action: "pending" },
        { no: 5, name: "Charlie Green", time: "07:30 AM", action: "done" },
        { no: 6, name: "David Black", time: "08:00 AM", action: "pending" },
        { no: 7, name: "Eva Adams", time: "08:30 AM", action: "done" },
        { no: 8, name: "Frank Hill", time: "09:00 AM", action: "pending" },
        { no: 9, name: "Grace Lee", time: "09:30 AM", action: "done" },
        { no: 10, name: "Henry Clark", time: "10:00 AM", action: "pending" },
        { no: 11, name: "Isla Scott", time: "10:30 AM", action: "done" },
        { no: 12, name: "Jack Turner", time: "11:00 AM", action: "pending" },
        { no: 13, name: "Kimberly White", time: "11:30 AM", action: "done" },
        { no: 14, name: "Leo King", time: "12:00 PM", action: "pending" },
        { no: 15, name: "Mia Evans", time: "12:30 PM", action: "done" }
    ];

    patientData.forEach(data => {
        data.action = data.action == 'done' ? <CheckCircleIcon sx={{ color: 'green',fontSize:19 }} /> : <CancelIcon sx={{ color: 'red',fontSize:19 }} />
    })
    return (
        <>
            <Navbar />
            <div className='flex flex-row mt-6 '>
                <CustomTab tab1={<CustomTable data={patientData} headers={['No', 'Name', 'Time', 'Action']} timeline='' />} tab2={<CustomTable data={overallData} headers={overallDataHeader} timeline={timeline} />} childElement={<ChildElement timeline={timeline} setTimeline={setTimeline} />} />
            </div>
        </>
    )
}

export default AppointmentDetails