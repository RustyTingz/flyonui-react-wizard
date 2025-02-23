import { get } from 'lodash';
import { FieldProps, HookFormFieldProps } from '../types/form.types';

type TextInputProps<TFormValues extends Record<string, unknown>> = {
    type: 'text' | 'password' | 'number' | 'radio';
} & HookFormFieldProps<TFormValues> &
    Omit<FieldProps, 'name'>;

export const TextInputField = <TFormValues extends Record<string, unknown>>({
    name,
    register,
    errors,
    ...props
}: TextInputProps<TFormValues>) => {
    const errorMessages = get(errors, name);
    const hasError = props.error || !!(errors && errorMessages);

    return (
        <>
            <div className="w-full">
                {props.label && (
                    <label
                        className="label label-text"
                        htmlFor={props.id}>
                        {props.label}
                    </label>
                )}
                <input
                    className={`input  ${hasError ? ' ' + 'is-invalid' : ''}`}
                    readOnly={props.readonly}
                    placeholder={props.placeholder}
                    {...props}
                    {...(register && register(name, { valueAsNumber: props.type === 'number' }))}
                />
            </div>
            {hasError && (
                <div className="label">
                    <span className="label-text-alt text-error">{props.error}</span>
                </div>
            )}
        </>
    );
};
