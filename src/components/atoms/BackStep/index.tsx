import { useContext } from 'react';
import styles from './style.module.css';
import { FormContext } from 'src/context';
import { FormContextType } from 'src/@types/form';
const BackStep = () => {
    const { goBack } = useContext(FormContext) as FormContextType;

    return (
        <button className={styles.btnBack} onClick={goBack}>Go Back</button>
    )
}

export default BackStep;