import { useContext } from 'react';
import { FormContextType } from 'src/@types/form';
import TextInput from 'src/components/atoms/TextInput/TextInput';
import { FormContext } from 'src/context';
import styles from './styles.module.css';

const Form = () => {
    const {nextStep} = useContext(FormContext) as FormContextType;

    return (
        <div className={styles.container}>
            <h2>Personal Info</h2>
            <p>Please provide your name, email address and phone number</p>
            <div className={styles.form}>
                <TextInput text="Name" type="text" />
                <TextInput text="Email Address" type="email" />
                <TextInput text="Phone Number" type="text" />
            </div>
            <div className={styles.ctnBtn}>
                <button className={styles.btnNext} onClick={nextStep}>Next Step</button>
            </div>

        </div>
    )
}

export default Form;