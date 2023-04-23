import styles from './style.module.css';
import NextStep from 'src/components/atoms/NextStep';
import BackStep from 'src/components/atoms/BackStep';
import { useContext } from 'react';
import { FormContext } from 'src/context';
import { FormContextType } from 'src/@types/form';
const Pagination = () => {
    const {step} = useContext(FormContext) as FormContextType;
    return (
        <footer className={styles.ctnBtn}>
            <BackStep />
            <NextStep />
        </footer>
    )
}

export default Pagination;