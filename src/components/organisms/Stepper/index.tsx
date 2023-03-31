import Items from 'src/constants/Steps';
import { StepType } from 'src/interfaces/Step';
import Step from 'src/components/molecules/Step/Index';
import styles from 'src/components/organisms/Stepper/styles.module.css';

const Stepper = () => {

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