import TextInput from 'src/components/atoms/TextInput/TextInput';
import styles from './styles.module.css';

const Form = () => {
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
                <button className={styles.btnNext}>Next Step</button>
            </div>

        </div>
    )
}

export default Form;