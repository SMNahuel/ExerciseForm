import styles from './styles.module.css';

const Form = () => {
    return (
        <div className={styles.container}>
            <p>Personal Info</p>
            <p>Please provide your name, email address and phone number</p>
            <label>Name</label>
            <input type="text" />
            <label>Email Address</label>
            <input type="text" />
            <label>Phone Number</label>
            <input type="text" />
            <div>
                <button>Next Step</button>
            </div>
        </div>
    )
}

export default Form;