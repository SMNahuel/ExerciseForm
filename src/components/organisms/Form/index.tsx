import TextInput from 'src/components/atoms/TextInput/TextInput';
import Pagination from 'src/components/molecules/Pagination';
import Paragraph from 'src/components/molecules/Paragraph';
import styles from './styles.module.css';

const Form = () => {
    

    return (
        <div className={styles.container}>
            <Paragraph 
                title="Personal Info"
                subtitle="Please provide your name, email address and phone number"
            />
            <div className={styles.form}>
                <TextInput text="Name" type="text" />
                <TextInput text="Email Address" type="email" />
                <TextInput text="Phone Number" type="text" />
            </div>
            <Pagination />

        </div>
    )
}

export default Form;