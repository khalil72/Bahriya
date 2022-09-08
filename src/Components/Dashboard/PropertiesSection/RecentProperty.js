import React from 'react'
import { Box, Paper, Table, TableBody, TableContainer, 
    TableHead, TableRow, Typography , 
} from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
// tablestyle
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
const RecentProperty = () => {

  return (
    <Box mt={2}>
      <Typography variant='h6' fontWeight={600} mb={1} component='div'>
        Recent Properties
      </Typography>

      <TableContainer component={Paper} >
        <Table aria-label="customized table">
        <TableHead>
            <TableRow>
             <StyledTableCell>Name</StyledTableCell>
             <StyledTableCell>Location</StyledTableCell>
             <StyledTableCell>Type</StyledTableCell>
             <StyledTableCell>Description</StyledTableCell>
             <StyledTableCell>Action</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>
               <StyledTableCell component="th" scope="row">
                Name
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                location
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                Buy
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                Description
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                Single Page details
                </StyledTableCell>
                
            </StyledTableRow>
            <StyledTableRow>
               <StyledTableCell component="th" scope="row">
                Name
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                location
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                Rent
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                Description
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                Single Page details
                </StyledTableCell>
                
            </StyledTableRow>
            
        </TableBody>

        </Table>
      </TableContainer>

    </Box>
  )
}

export default RecentProperty