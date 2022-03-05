import * as React from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Food image 1',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Food image 2',
    imgPath:
      'https://source.unsplash.com/WLUHO9A_xik/1600x900',
  },
  {
    label: 'Food image 3',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'Food image 4',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 0,
          pl: 1,
          bgcolor: 'background.default',
        }}
      >

      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (

              <Box
                component="img"
                sx={{
                  height: 300,
                  display: 'block',
                  maxWidth: 'auto',
                  overflow: 'hidden',
                  width: '100%',

                }}

                src={step.imgPath}
                alt={step.label}
              />
            ) : null}

          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
      />
      <Typography>{images[activeStep].label}</Typography>
    </Box>
  );
}

export default Carousel;