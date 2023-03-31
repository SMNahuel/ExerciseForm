import styles from './styles.module.css';

interface MyProps{
    step: number;
}

const Circle = ({step} : MyProps) => {
    return (
        <div className={styles.container}>
            <label>{step}</label>
        </div>
    )
}

export default Circle;