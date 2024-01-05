import React, { useState } from 'react';
import {
    Box,
    Button,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Text
} from '@chakra-ui/react';

import {AddIcon,EmailIcon,LockIcon } from '@chakra-ui/icons'


function ProgresStepBar() {
    const steps = [
        { title: 'Register', description: '' },
        { title: 'Profile', description: 'Picture' },
        { title: 'Confirmation', description: 'Select Rooms' },
    ]

    const { activeStep, setActiveStep } = useSteps({
        index: 1,
        count: steps.length,
    })

    const icons = [<AddIcon/>, <EmailIcon/>, <LockIcon/>]


    return (
        <><Text color="white">Hello world</Text><Box position={'fixed'} top={"0"} left="0" width="100%" height="100%" backgroundColor={'white'}>
            <Box>
                <Stepper size='md' width={"90rem"} marginLeft={"18rem"} marginTop={"5rem"} index={activeStep}>
                    {steps.map((step, index) => (
                        <Step key={index} onClick={() => setActiveStep(index)}>
                            <StepIndicator>
                                <StepStatus
                                    complete={<StepIcon />}
                                    incomplete= {<StepNumber />}
                                    active= {icons[index]}
                                />
                            </StepIndicator>

                            <Box flexShrink='0'>
                                <StepTitle>{step.title}</StepTitle>
                                <StepDescription>{step.description}</StepDescription>
                            </Box>

                            <StepSeparator />
                        </Step>
                    ))}
                </Stepper>
                
            </Box>
        </Box></>
    );

}

export { ProgresStepBar }