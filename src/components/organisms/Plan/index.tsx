import Pagination from 'src/components/molecules/Pagination';
import Paragraph from 'src/components/molecules/Paragraph';
import styles from './style.module.css';
import Switcher from '../../molecules/Switcher';
import { PlanEnum } from 'src/constants/Plan';
import Card from 'src/components/molecules/Card';
const Plan = () => {


    return (
        <div className={styles.container}>
            <Paragraph
                title={"Select your plan"}
                subtitle={"You have the option of monthly or yearly billing"}
            />

            <div className={styles.containerCard}>
                {
                    PlanEnum.map((item: any, index: number) => {
                        return (
                            <Card key={index} icon={item.icon} text={item.text} price={item.price} />
                        )
                    })
                }
            </div>
            <Switcher />
            <Pagination />
        </div>
    )
}

export default Plan;