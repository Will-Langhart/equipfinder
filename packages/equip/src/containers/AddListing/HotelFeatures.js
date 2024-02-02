import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useStateMachine } from 'little-state-machine';
import { useForm, Controller } from 'react-hook-form';
import { Row, Col, Radio, Button } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import addListingAction, { addListingResetAction } from './AddListingAction';
import {
  FormHeader,
  Title,
  Description,
  FormContent,
  FormAction,
} from './AddListing.style';
// demo data
import { hotelfeatures } from './HotelFeatures.data';

const Hotelfeatures = ({ setStep }) => {
  const { control, handleSubmit } = useForm();
  const { state } = useStateMachine({ addListingAction });
  const { actions } = useStateMachine({ addListingResetAction });
  const onSubmit = (data) => {
    const formData = { ...state.data, ...data };
    console.log('add hotel data: ', formData);
    alert(JSON.stringify(formData, null, 2));
    actions.addListingResetAction();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <FormHeader>
          <Title>
            Step 4: Equipment Features <span> (optional)</span>
          </Title>
          <Description>
            Add your Equipment features , it can help clients to choose their
            perfect tool to use. Thanks.
          </Description>
        </FormHeader>
        <Row gutter={30}>
          {hotelfeatures.map((item) => (
            <Col key={`hotel-features--key${item.id}`} md={8}>
              <FormControl label={item.label} labelTag="h3">
                <Controller
                  name={item.name}
                  defaultValue={
                    state.data[item.name] !== undefined
                      ? state.data[item.name]
                      : ''
                  }
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Radio.Group
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      options={item.options}
                    />
                  )}
                />
              </FormControl>
            </Col>
          ))}
        </Row>
      </FormContent>
      <FormAction>
        <div className="inner-wrapper">
          <Button
            className="back-btn"
            htmlType="button"
            onClick={() => setStep(3)}
          >
            <IoIosArrowBack /> Back
          </Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </FormAction>
    </form>
  );
};

export default Hotelfeatures;
