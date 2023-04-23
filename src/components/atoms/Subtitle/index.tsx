import style from './style.module.css';

interface MyProps{
    subtitle: string;
}
const Subtitle = ({subtitle} : MyProps) => {
    return(
        <p className={style.subtitle}>{subtitle}</p>
    )
}

export default Subtitle;