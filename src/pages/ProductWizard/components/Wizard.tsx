import { FC } from 'react';
import { WizardStep } from '../types/productWizard.types';
import { WizardStepProgress } from './WizardStepProgress';

interface WizardProps {
    wizardSteps: WizardStep[];
}

export const Wizard: FC<WizardProps> = ({ wizardSteps }) => {
    console.log('WizardStepProgress');

    return (
        <div className="flex flex-row gap-x-2 p-4">
            <div className="w-64">
                <WizardStepProgress
                    steps={wizardSteps}
                    currentStep={wizardSteps[0]}
                />
            </div>
            <div className="w-full">
                {wizardSteps.map(step => <step.children onTransition={() => { console.log('Transition'); return true; }} />) }
            </div>
            
        </div>
    );
};
