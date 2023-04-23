import Subtitle from "src/components/atoms/Subtitle";
import Title from "src/components/atoms/Title";

interface MyProps {
    title: string;
    subtitle: string;
}
const Paragraph = ({title, subtitle} : MyProps) =>{
    return(
        <>
            <Title title={title}/>
            <Subtitle subtitle={subtitle}/>
        </>
    )
}

export default Paragraph;