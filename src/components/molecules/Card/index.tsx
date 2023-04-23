import styles from './style.module.css'

interface MyProps {
    icon: string;
    text: string;
    price: string;
}
const Card = ({ icon, text, price }: MyProps) => {
    return (
        <div className={styles.card}>
            <img src={icon} />
            <div className={styles.text}>
                <span>{text}</span>
                <p>${price}/mo</p>
            </div>
        </div>
    )
}

export default Card;
