import Circle from "src/components/atoms/Circle/Circle";
import { StepType } from "src/interfaces/Step";
import styles from './styles.module.css';

interface MyProps {
    data: StepType;
    step: number;
}

const Step = ({ data, step }: MyProps) => {
    return (
        <div className={styles.container}>
            <Circle step={step + 1} />
            <div className={styles.step}>
                <label>Step {step + 1}</label>
                <label>{data.text}</label>
            </div>
        </div>
    )
}

export default Step;

