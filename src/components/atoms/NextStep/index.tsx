import { useContext } from 'react';
import styles from './style.module.css';
import { FormContext } from 'src/context';
import { FormContextType } from 'src/@types/form';
const NextStep = () => {
    const { nextStep, step } = useContext(FormContext) as FormContextType;

    return (
        <button className={styles.btnNext} onClick={nextStep}>Next Step</button>
    )
}

export default NextStep;