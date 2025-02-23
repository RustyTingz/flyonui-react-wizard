import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ProductDetailsData,
  productDetailsSchema,
} from '../schema/productDetails.schema';
import { TextInputField } from './TextInputField';

export const ProductDetailsForm: FC = () => {
  const {
    register,
    // trigger,
    // getValues,
    formState: { errors },
  } = useForm<ProductDetailsData>({
    resolver: zodResolver(productDetailsSchema),
    defaultValues: {
      state: 'draft',
    },

    mode: 'onChange',
  });

  console.log('WizardStep:ProductDetailsStep');
  // const handleTransition = async (onWizardTransition?: () => void) => {
  //     const isValid = await trigger();
  //     if (isValid && onWizardTransition) {
  //         const data = getValues();
  //         console.log('handleTransition: ProductDetailsFormData', data);
  //         saveProductDetails(data);
  //         onWizardTransition();
  //     }
  // };

  return (
    <>
      <div className="card w-full">
        <div className="card-header">
          <h2 className="card-title flex items-center gap-2">
            Product Details
          </h2>
        </div>
        <div className="card-body gap-y-2">
          <TextInputField
            id="productShortDescription"
            name="summary"
            register={register}
            label="Summary"
            type="text"
            error={errors.summary?.message as string}
          />
        </div>
      </div>
    </>
  );
};
