import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 15
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        // backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const CustomTable = ({ data, headers,timeline }) => {
    return (
        <TableContainer component={Paper}  classes='w-[350px] md:w-[500px]'>
            <Table aria-label="customized table" class='w-[350px] md:w-[500px]'>
                <TableHead className='bg-primary'>
                    <TableRow>
                        {headers.map((key) => (
                            <StyledTableCell align='center' >{key}</StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                {timeline && <StyledTableRow>
                <StyledTableCell align='center' ><span className='bg-primary'>&nbsp;&nbsp;&nbsp;&nbsp;{timeline == 'daily' ? 'February' : '2025'}&nbsp;&nbsp;&nbsp;&nbsp;</span></StyledTableCell>
                <StyledTableCell align='center'></StyledTableCell>
                </StyledTableRow>}
                    {data.map((row) => (
                        <StyledTableRow key={row.name}>
                            {Object.keys(data[0]).map(key => (
                                <StyledTableCell align='center' component="th" scope="row">
                                    {row[key]}
                                </StyledTableCell>
                            ))}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CustomTable