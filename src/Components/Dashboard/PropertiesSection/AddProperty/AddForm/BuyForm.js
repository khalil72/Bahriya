import { Box ,StepContent } from '@mui/material'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles, createStyles } 
        from '@material-ui/styles';
        
import React from 'react'
import CardStep from './CardStep';
import LocationForm from './LocationForm';
import FinalStep from './FinalStep';
import ImageSelect from './ImageSelect';
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  button: {
    marginTop:'1px',
    marginRight:'1px',
  },
  actionsContainer: {
    marginBottom:'1px',
  },
  resetContainer: {
    padding: '1px',
  },
})
  
function getSteps() {
  return [<b style={{color:'black'}}>'Select Your Property List'</b>, 
  <b style={{color:'black'}}>'Select Your Location'</b>, 
  <b style={{color:'black'}}>'Fill Your Form'</b>,
  <b style={{color:'black'}}>'Select Your Images'</b>];
 
}
function getStepContent(step: number) {
  switch (step) {
    case 0:
      return (
       <CardStep />
      );
    case 1:
      return (
       <LocationForm />
      );
    case 2:
      return (
       <FinalStep />
      );
      case 3:
      return (
       <ImageSelect />
      );
     
    default:
      return 'Unknown step';
  }
}


const BuyForm = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
 
  return (
    <Box sx={{ width: '100%' }}>
    <Stepper nonLinear   activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label} width='100%'>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer} style={{marginTop:'10px'}}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Box square elevation={0} className={classes.resetContainer}>
          <Typography textAlign='center'>Property Form Submit Successful and Wait for Approval</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Box>
      )}
  </Box>
  )
}

export default BuyForm