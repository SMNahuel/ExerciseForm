import Items from 'src/constants/Steps';
import { StepType } from 'src/interfaces/Step';
import Step from 'src/components/molecules/Step/Index';
import styles from 'src/components/organisms/Stepper/styles.module.css';
import { useContext } from 'react';
import { FormContext } from 'src/context';
import { FormContextType } from 'src/@types/form';

const Stepper = () => {
    
    const store = useContext(FormContext) as FormContextType;
    console.log(store)

    return (
        <div className={styles.container}>
            {
                Items.map((data: StepType, index: number) => {
                    return (
                        <Step key={index} data={data} step={index}/>
                    )
                })
            }
        </div>
    )
}

export default Stepper;