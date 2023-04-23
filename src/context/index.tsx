import React, { createContext, useState, useEffect, FC } from 'react';
import { IPlan } from 'src/@types/plan';
import { FormContextType, IForm } from "../@types/form";

export const FormContext = createContext({});
export function ContextProvider({ children }: any) {
    const [step, setStep] = useState<IForm>({
        id: 1,
        step: "Personal",
        text: "Personal Info",
    });

    const [listPlan, setListPlan] = useState<IPlan[]>([
        {
            image: "public/images",
            name: "",
            price: ""
        },
    ])

    const saveForm = (form: IForm) => {
        const newForm: IForm = {
            id: form.id,
            step: form.step,
            text: form.text
        };
        setStep(newForm)
    }

    const updateForm = (id: number) => {

    }

    const nextStep = () => {
        setStep({
            ...step,
            id: step.id + 1
        })
    }

    const goBack = () => {
        setStep({
            ...step,
            id: step.id -1
        })
    }

    return (
        <FormContext.Provider value={{
            step,
            saveForm,
            updateForm,
            nextStep,
            goBack
        }}>
            {children}
        </FormContext.Provider>
    )
}
