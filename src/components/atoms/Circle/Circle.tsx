import { useContext } from 'react';
import { FormContextType } from 'src/@types/form';
import { FormContext } from 'src/context';
import styles from './styles.module.css';

interface MyProps {
    step: number;
}

const Circle = ({ step }: MyProps) => {
    const store = useContext(FormContext) as FormContextType
    return (
        <div className={store.step.id === step ?
            styles.containerSelect :
            styles.container
        }>
            <label>{step}</label>
        </div>
    )
}

export default Circle;