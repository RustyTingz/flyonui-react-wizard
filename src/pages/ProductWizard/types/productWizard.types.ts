import { FC } from "react";
import { ProductTypeForm } from "../components/ProductTypeForm";
import { ProductDetailsForm } from "../components/ProductDetailsForm";


type StepStatus = 'init' | 'complete' | 'error';

type WizardTransitionHandler = () => boolean;

interface WizardStepComponentProps {
  onTransition?: WizardTransitionHandler;
}
type WizardStepComponent = FC<WizardStepComponentProps>;

export interface WizardStep {
  id: string;
  title: string;
  description?: string;
  children: WizardStepComponent;
  isActive: boolean;
  status: StepStatus;
}

export interface WizardState<TSteps extends WizardStep[]> {
  activeStep: number;
  steps: TSteps;
  actions: boolean;
}

const ProductWizardStepOne: WizardStep = {
  id: 'step-one',
  title: 'Product Type',
  description: 'Setup a new product',
  children: ProductTypeForm,
  isActive: false,
  status: 'init',
};
const ProductWizardStepTwo: WizardStep = {
  id: 'step-two',
  title: 'Empty Product',
  description: 'Setup a new product',
  children: ProductDetailsForm,
  isActive: false,
  status: 'init',
};

type ProductWizardSteps = [
  typeof ProductWizardStepOne,
  typeof ProductWizardStepTwo
];

export const ProductWizardSteps: WizardState<ProductWizardSteps> = {
  activeStep: 1,
  steps: [ProductWizardStepOne, ProductWizardStepTwo],
  actions: true
}