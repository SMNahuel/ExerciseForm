import style from './style.module.css';

interface MyProps{
    title: string;
}
const Title = ({title} : MyProps) => {
    return (
        <h2 className={style.title}>{title}</h2>
    )
}

export default Title