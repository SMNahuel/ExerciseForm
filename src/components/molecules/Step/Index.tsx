import Circle from "src/components/atoms/Circle/Circle";
import { StepType } from "src/interfaces/Step";
import styles from './styles.module.css';
import { useContext } from 'react';
import { FormContext } from 'src/context';
import { FormContextType } from 'src/@types/form';
interface MyProps {
    data: StepType;
    step: number;
}

const Step = ({ data, step }: MyProps) => {

        
    const store  = useContext(FormContext) as FormContextType;
    console.log(store);
    console.log(step);

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

