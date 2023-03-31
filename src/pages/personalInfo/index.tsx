import styles from './style.module.css';
import Form from 'src/components/organisms/Form';
import Stepper from 'src/components/organisms/Stepper';

const PersonalInfo = () => {
    return (
        <div className={styles.container}>
            <Stepper />
            <Form />
        </div>
    )
}

export default PersonalInfo