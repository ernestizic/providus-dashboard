import React from 'react'
import ContactDetail from './ContactDetail'
import AccountServiceRequired from './AccountServiceRequired'

const FormSteps = ({currentStep, setCurrentStep}) => {

    switch (currentStep) {
        case 1:
            return(
                <ContactDetail setCurrentStep={setCurrentStep} currentStep={currentStep}/>
            );
        case 2:
            return(
                <AccountServiceRequired />
            )
        default:
            return;
    }
}

export default FormSteps