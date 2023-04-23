export interface IForm{
    id: number;
    step: string;
    text: string;
}

export type FormContextType = {
    step: IForm;
    saveForm: (form: IForm) => void;
    updateForm: (id: number) => void;
    nextStep: () => void;
    goBack: () => void;
}

