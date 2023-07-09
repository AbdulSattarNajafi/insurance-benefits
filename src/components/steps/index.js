import { useContext } from 'react';

import { StepContext } from './../../context/step-context';
import LoaderImage from './../../assets/images/loader.gif';
import Congratulations from './../../assets/images/congratulations.png';
import NotEligible from './../../assets/images/not-eligible.svg';
import Step1 from './step-1';
import Step2 from './step-2';
import Step3 from './step-3';
import Step4 from './step-4';
import Step5 from './step-5';

const Steps = () => {
    const { step, dispatch } = useContext(StepContext);

    const nextStep = () => {
        dispatch({ type: 'NEXT_STEP' });
    };

    const notEligible = () => {
        dispatch({ type: 'NOT_ELIGIBLE' });
    };

    const firstNoHandler = () => {
        dispatch({ type: 'NOT_ELIGIBLE', payload: true });
    };

    return (
        <section className='section'>
            <div className='container'>
                {step === 1 && <Step1 onNextStep={nextStep} onNotEligible={firstNoHandler} />}
                {step === 2 && <Step2 onYes={notEligible} onNo={nextStep} />}
                {step === 3 && <Step3 image={LoaderImage} onNextStep={nextStep} step={step} />}
                {step === 4 && <Step4 image={Congratulations} />}
                {step === 5 && <Step5 image={NotEligible} />}
            </div>
        </section>
    );
};

export default Steps;
