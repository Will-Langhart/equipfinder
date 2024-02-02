import React, { useEffect } from 'react';
import { useStateMachine } from 'little-state-machine';
import { useForm, Controller } from 'react-hook-form';
import { Row, Col, Input, InputNumber, Button } from 'antd';
import InputIncDec from 'components/UI/InputIncDec/InputIncDec';
import FormControl from 'components/UI/FormControl/FormControl';
import addListingAction from './AddListingAction';
import { FormHeader, Title, FormContent, FormAction } from './AddListing.style';

const BasicInformation = ({ setStep }) => {
  const { actions, state } = useStateMachine({ addListingAction });
  const {
    control,
    setValue,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      hotelName: state?.data?.hotelName,
      pricePerNight: state?.data?.pricePerNight,
      hotelDescription: state?.data?.hotelDescription,
      guest: state?.data?.guest || 0,
      bed: state?.data?.bed || 0,
    },
  });

  useEffect(() => {
    register('guest', { required: true });
    register('bed', { required: true });
  }, [register]);

  const handleOnChange = (key, event) => {
    actions.addListingAction({ [key]: event.target.value });
    setValue(key, event.target.value);
  };

  const handleIncrement = (key) => {
    const incrementValue = ++state.data[key];
    actions.addListingAction({ [key]: incrementValue });
    setValue(key, incrementValue);
  };

  const handleDecrement = (key) => {
    if (state.data[key] < 1) {
      return false;
    }
    const decrementValue = --state.data[key];
    actions.addListingAction({ [key]: decrementValue });
    setValue(key, decrementValue);
  };

  const onSubmit = (data) => {
    actions.addListingAction(data);
    setStep(2);
  };

  console.log('data', state);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <FormHeader>
          <Title>Step 1: Start with the basics</Title>
        </FormHeader>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="Equipment Name"
              htmlFor="hotelName"
              error={errors.hotelName && <span>This field is required!</span>}
            >
              <Controller
                name="hotelName"
                defaultValue={state?.data?.hotelName}
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Write the name of your equipment here"
                  />
                )}
              />
            </FormControl>
          </Col>
          <Col sm={12}>
            <FormControl
              label="Price Per Hour"
              htmlFor="pricePerNight"
              error={
                errors.pricePerNight && (
                  <>
                    {errors.pricePerNight?.type === 'required' && (
                      <span>This field is required!</span>
                    )}
                    {errors.pricePerNight?.type === 'pattern' && (
                      <span>Please enter only number!</span>
                    )}
                  </>
                )
              }
            >
              <Controller
                name="pricePerNight"
                defaultValue={state?.data?.pricePerNight}
                control={control}
                rules={{
                  required: true,
                  pattern: /^[0-9]*$/,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputNumber
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="00.00"
                  />
                )}
              />
            </FormControl>
          </Col>
        </Row>
        <FormControl
          label="Equipment Description"
          htmlFor="hotelDescription"
          error={
            errors.hotelDescription && <span>This field is required!</span>
          }
        >
          <Controller
            name="hotelDescription"
            defaultValue={state?.data?.hotelDescription}
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input.TextArea
                rows={5}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Tell people about your equipment & important features"
              />
            )}
          />
        </FormControl>
        
      </FormContent>
      <FormAction>
        <div className="inner-wrapper">
          <Button htmlType="submit">Next</Button>
        </div>
      </FormAction>
    </form>
  );
};

export default BasicInformation;
