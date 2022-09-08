import { Badge, Box, Card, Stack, Typography } from '@mui/material'
import React from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const PropertiesCard = () => {
  return (
    <Box mt={2}>
        <Stack   direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 3 }}>
          <Card>
            <Box p={2} mb={0} mt={1}>
                <Box textAlign='center'>
                    <Badge badgeContent={1} color="secondary">
                    <ApartmentIcon  size='large'/>
                </Badge>
                </Box>
              <Typography variant='body2' mt={1} textAlign='center'>
                Total Properties
              </Typography>
            </Box>
          
          </Card>
          <Card>
           <Box p={2} mb={0} mt={1}>
           <Box textAlign='center'>
            <Badge badgeContent={1}  color="secondary">
              <LocalMallOutlinedIcon size='large'/>
            </Badge>
            </Box>

             <Typography variant='body2' mt={1} textAlign='center'>
              Buy  Properties
              </Typography>
          
            
           </Box>
          </Card>
          <Card>
           <Box p={2} mb={0} mt={1}>
            <Box textAlign='center'>
            <Badge badgeContent={1}  color="secondary">
              <LocalMallOutlinedIcon size='large'/>
            </Badge>
            </Box>

             <Typography variant='body2' mt={1} textAlign='center'>
             Rent  Properties
              </Typography>
          
           </Box>
          </Card>
          <Card>
          <Box p={2} mb={0} mt={1}>
           <Box textAlign='center'>
            <Badge badgeContent={3}  color="secondary">
              <LocalMallOutlinedIcon size='large'/>
            </Badge>
            </Box>

             <Typography variant='body2' mt={1} textAlign='center'>
              Pending  Properties
              </Typography>
           </Box>
           
          </Card>
          <Card>
          <Box p={2} mb={0} mt={1}>
           <Box textAlign='center'>
            <Badge badgeContent={2}  color="secondary">
              <LocalMallOutlinedIcon size='large'/>
            </Badge>
            </Box>

             <Typography variant='body2' mt={1} textAlign='center'>
              Approve  Properties
              </Typography>
           </Box>
          </Card>
         

        </Stack>
    </Box>
  )
}

export default PropertiesCard