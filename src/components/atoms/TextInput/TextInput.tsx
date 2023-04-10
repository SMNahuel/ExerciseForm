import { FC } from 'react';
import { IInput } from './interface';
import styles from './styles.module.css';

const TextInput:FC<IInput> = ({text}) => {
    return(
        <div className={styles.inputContainer}>
            <label>{text}</label>
            <input className={styles.input} type="text"></input>
        </div>
    )
}

export default TextInput;