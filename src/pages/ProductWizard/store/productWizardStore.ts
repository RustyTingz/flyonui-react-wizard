import { create } from 'zustand'
import { WizardStep } from '../types/productWizard.types';
import { ProductTypeData } from '../schema/productType.schema';
import { ProductDetailsData } from '../schema/productDetails.schema';

type WizardState = {
  activeStepIndex: number
  activeStep?: WizardStep;
  steps: WizardStep[];
}

type WizardActions = {
  gotoStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export type ProductFormData = {
    productTypeFormData: Partial<ProductTypeData>;
    productDetailsFormData: Partial<ProductDetailsData>;
};



export const useProductWizardStore = create<WizardState & WizardActions>((set) => ({
  activeStepIndex: 0,
  activeStep: undefined,
  steps: [],
  gotoStep: (stepIndex: number) => set((state) => ({
    activeStepIndex: stepIndex,
    activeStep: state.steps[stepIndex]
  })),
  nextStep: () => set((state) => ({
    activeStepIndex: state.activeStepIndex + 1,
    activeStep: state.steps[state.activeStepIndex + 1]
  })),
  prevStep: () => set((state) => ({
    activeStepIndex: state.activeStepIndex - 1,
    activeStep: state.steps[state.activeStepIndex - 1]
  })),
}))



