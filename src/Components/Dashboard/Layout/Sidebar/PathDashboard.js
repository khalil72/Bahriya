import React from 'react'
import { Link } from 'react-router-dom'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, 
    Box, Card, Divider,  Typography } from '@mui/material'
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

const PathDashboard = () => {
  return (
    <Box p={2}> 
        <Card style={{borderRadius: '30px 30px 0 0' , paddingTop: '20px' , height:'calc(100% - 232px)' ,
    margin:'0px 12px'
    }}>
          
                <Link to='/dashboard'>
                <Box mb={1} sx={{display:'flex'}} mx={1}>
                    <DashboardOutlinedIcon  size='small'/>
                        <Typography mx={1}>
                            Dashboard
                        </Typography>
                    </Box>
                </Link>
            
           
                <Divider width='90%' style={{marginLeft:'10px' , mb:'0px'}} />
                
               
                   <Accordion style={{boxShadow:'none'}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
                    <Typography>My activity</Typography>
                    </AccordionSummary>
                  
                    <AccordionDetails>
                        <Box mb={1} sx={{display:'flex'}}>
                        <EmojiTransportationIcon />
                        <Typography  mx={2}>
                        Properties</Typography>
                      
                        </Box>
                        <Divider style={{marginBottom:'10px'}} />
                            <Box mb={1} sx={{display:'flex'}}>
                            <DomainAddOutlinedIcon />
                                <Typography mx={2}>Add Properties</Typography>
                            </Box>
                        <Divider style={{marginBottom:'10px'}} />
                        <Box sx={{display:'flex'}}>
                         <Person2OutlinedIcon  />
                            <Typography mx={2}>Profile</Typography>
                        </Box>
                    </AccordionDetails>
                   </Accordion>
               
                <Divider  width='90%' style={{marginLeft:'10px'}}/>
                <Box mt={2} mx={2} mb={2} sx={{display:'flex' , }}> 
                 <LogoutOutlinedIcon size='small' />
                 <Typography mx={1}>Logout</Typography>
                </Box>
            

          
        </Card>
    </Box>
  )
}

export default PathDashboard