import { FC } from 'react';
import {
  ProductTypeData,
  productTypeSchema,
} from '../schema/productType.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextInputField } from './TextInputField';

export const ProductTypeForm: FC = () => {
  const {
    register,
    // trigger,
    // getValues,
    formState: { errors },
  } = useForm<ProductTypeData>({
    resolver: zodResolver(productTypeSchema),
    mode: 'onChange',
  });

  console.log('WizardStep:ProductTypeStep');

  // const handleTransition = async (onWizardTransition: () => void) => {
  //   const isValid = await trigger();
  //   if (isValid) {
  //     const data = getValues();
  //     console.log(data);
  //     onWizardTransition();
  //   }
  // };

  return (
    <>
      <div className="card w-full">
        <div className="card-header">
          <h2 className="card-title">Product Type</h2>
        </div>
        <div className="card-body gap-y-2">
          <TextInputField
            id="productTitle"
            name="title"
            label="Title"
            type="text"
            register={register}
            error={errors.title?.message as string}
          />
          <div>
            <label className="label label-text" htmlFor="productTypeSelect">
              Product Type
            </label>
            <select
              id="productTypeSelect"
              className={`select max-w-sm appearance-none  ${
                errors.type?.message ? ' ' + 'is-invalid' : ''
              }`}
              aria-label="select"
              {...register('type')}
            >
              <option value="default" disabled>
                Select a product type
              </option>
              <option value="service">Service</option>
              <option value="coupon">Coupon</option>
            </select>
          </div>

          {errors.type?.message && (
            <div className="label">
              <span className="label-text-alt text-error">
                Please select a valid product type (coupon or service)
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
