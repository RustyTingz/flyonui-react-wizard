import { FC } from 'react';
import { WizardStep } from '../types/productWizard.types';

interface StepStatusProps {
    step: WizardStep;
    currentStep: WizardStep;
    stepNo: number;
}

export const StepStatus: FC<StepStatusProps> = ({ stepNo, step, currentStep }) => {
    if (currentStep.id === step.id) {
        return (
            <>
                <span className="flex size-7.5 shrink-0 items-center justify-center rounded-full border border-neutral-900 font-medium text-neutral-900">
                    {stepNo}
                </span>
                <div className="mt-2 h-full w-px bg-neutral/20 group-last:hidden md:ms-2 md:mt-0 md:h-px md:w-full md:flex-1"></div>
            </>
        );
    }

    if (step.status === 'complete') {
        return (
            <>
                <span className="flex size-7.5 shrink-0 items-center justify-center rounded-full bg-success font-medium text-success-content">
                    <span className="icon-[tabler--check] size-4 shrink-0 font-medium"></span>
                </span>
                <div className="mt-2 h-full w-px bg-neutral/20 group-last:hidden md:ms-2 md:mt-0 md:h-px md:w-full md:flex-1"></div>
            </>
        );
    }

    if (step.status === 'error') {
        return (
            <>
                <span className="flex size-7.5 shrink-0 items-center justify-center rounded-full bg-warning font-medium text-success-content">
                    <span className="icon-[tabler--exclamation-mark] size-4 shrink-0 font-medium"></span>
                </span>
                <div className="mt-2 h-full w-px bg-neutral/20 group-last:hidden md:ms-2 md:mt-0 md:h-px md:w-full md:flex-1"></div>
            </>
        );
    }

    return (
        <>
            <span className="flex size-7.5 shrink-0 items-center justify-center rounded-full bg-neutral/20 font-medium text-base-content">
                {stepNo}
            </span>
            <div className="mt-2 h-full w-px bg-neutral/20 group-last:hidden md:ms-2 md:mt-0 md:h-px md:w-full md:flex-1"></div>
        </>
    );
};
