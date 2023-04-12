import React, { createContext, useState, useEffect, FC } from 'react';
import { FormContextType, IForm } from "../@types/form";

export const FormContext = createContext({});
export function ContextProvider ({children} : any) {
    const [step, setStep] = useState<IForm>({
        id: 1,
        step: "Personal",
        text: "Personal Info",
    });

    const saveForm = (form : IForm) => {
        const newForm: IForm = {
            id: Math.random(), // not really unique - but fine for this example
            step: form.step,
            text: form.text
          };
          setStep(newForm)
    }

    const updateForm = (id: number) => {

    }

    return (
        <FormContext.Provider value={{ 
            step, 
            saveForm, 
            updateForm 
        }}>
            {children}
        </FormContext.Provider>
    )
}
