import { DeepMap, FieldError, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

export interface FieldProps {
    id: string;
    name: string;
    label?: string;
    placeholder?: string;
    defaultValue?: string;
    value?: string;
    readonly?: boolean;
}

export interface HookFormFieldProps<TFormValues extends Record<string, unknown>> {
    name: Path<TFormValues>;
    rules?: RegisterOptions;
    register?: UseFormRegister<TFormValues>;
    errors?: Partial<DeepMap<TFormValues, FieldError>>;
    error?: string;
}