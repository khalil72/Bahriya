import React from 'react'
import { Link, } from 'react-router-dom'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, 
    Box, Card, Divider,  Typography } from '@mui/material'
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { makeStyles } from '@material-ui/styles';


const useStyle = makeStyles({
    Link: {
      textDecoration: 'none',
      color:' black !important',
   
   
      
    },
}) 

const PathDashboard = () => {
    const useClasses= useStyle();
   

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
                       <Accordion sx={{margin:'0px !important' , padding:'0px'}} style={{boxShadow:'none' , padding:'0px !important' , margin:'0px'}}>
                            <AccordionSummary  expandIcon={<ExpandMoreIcon />} 
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{padding:'0px !important'}}
                                    >
                                    <Box mb={1} sx={{display:'flex' , padding:'0px !important'}}>
                                          <DomainAddOutlinedIcon />
                                           <Typography mx={2} mt={0.1}>Add Properties</Typography>
                                     </Box>
                            </AccordionSummary>

                                  <AccordionDetails>
                                     <Link to='/dashboard/MyProperties/AddProperty/Buy' className={useClasses.Link}>
                                     <Box sx={{display:'flex'}}>
                                 
                                        <Typography >Buy</Typography>
                                       </Box> 
                                     </Link>
                                  </AccordionDetails>
                                  <Divider style={{marginBottom:'10px'}} />
                                  <AccordionDetails>
                                  <Link to='/dashboard/MyProperties/AddProperty/Rent' className={useClasses.Link}>
                                        Rent
                                     </Link>
                                     
                                  </AccordionDetails>


                                </Accordion>
                            
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