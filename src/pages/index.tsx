import { useContext } from "react";
import { FormContextType } from "src/@types/form";
import Stepper from "src/components/organisms/Stepper";
import { FormContext } from "src/context";
import PersonalInfo from "./personalInfo";
import SelectPlan from "./selectPlan";

const Container = () => {
    const { step } = useContext(FormContext) as FormContextType;

    return (
        <div style={{
            display: "flex",
            flexDirection: "row"
        }}>
            <Stepper />
            {
                step.id === 1 && <PersonalInfo />
            }
            {
                step.id === 2 && <SelectPlan />
            }

        </div>
    )
}

export default Container;