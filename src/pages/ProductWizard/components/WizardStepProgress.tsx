import { FC, memo } from 'react';
import { WizardStep } from '../types/productWizard.types';
import { StepStatus } from './WizardStepStatus';

interface WizardStepProgressProps {
    steps: WizardStep[];
    currentStep: WizardStep;
    onGotoStep?: (step: WizardStep) => void;
}

export const WizardStepProgressComponent: FC<WizardStepProgressProps> = ({ steps, currentStep, onGotoStep }) => {
    return (
        <ul className={`relative flex flex-col gap-x-2`}>
            {steps.map((step: WizardStep, index) => (
                <li
                    key={step.title}
                    className="group flex flex-1 gap-x-2 md:block md:shrink md:basis-0">
                    <div
                        aria-label={`Go to wizard step ${step.title}`}
                        onClick={() => onGotoStep && onGotoStep(step)}
                        className="flex min-h-7.5 min-w-7.5 flex-col items-center align-middle text-sm md:inline-flex md:w-full md:flex-row md:flex-wrap">
                        <StepStatus
                            step={step}
                            currentStep={currentStep}
                            stepNo={index + 1}
                        />
                    </div>
                    <div className="grow pb-5 md:mt-2.5 md:grow-0">
                        <span className="block text-base-content">{step.title}</span>
                        {step.description && <p className="text-sm text-base-content/80">{step.description}</p>}
                    </div>
                </li>
            ))}
        </ul>
    );
};

export const WizardStepProgress = memo(WizardStepProgressComponent);
