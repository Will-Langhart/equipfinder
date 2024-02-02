import React, { useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import moment from 'moment';
import { Button, Slider, Checkbox } from 'antd';
import ViewWithPopup from 'components/UI/ViewWithPopup/ViewWithPopup';
import InputIncDec from 'components/UI/InputIncDec/InputIncDec';
import DateRangePicker from 'components/UI/DatePicker/ReactDates';
import { setStateToUrl, getStateFromUrl } from '../url-handler';
import { LISTING_POSTS_PAGE } from 'settings/constant';
import {
  priceInit,
  calenderItem,
  getEquipmentType,
  getPropertyType,
} from '../SearchParams';
import CategorySearchWrapper, {
  RoomGuestWrapper,
  ItemWrapper,
  ActionWrapper,
} from './CategorySearch.style';

const CategorySearch = ({ location }) => {
  let navigate = useNavigate();
  const searchParams = getStateFromUrl(location);
  const state = {
    features: searchParams.features || [],
    property: searchParams.property || [],
    date_range: searchParams.date_range || {
      setStartDate: null,
      setEndDate: null,
    },
    price: searchParams.price || {
      min: 0,
      max: 100,
      defaultMin: 0,
      defaultMax: 100,
    },
    location: searchParams.location || {
      lat: null,
      lng: null,
    },
    room: parseInt(searchParams.room) || 0,
    guest: parseInt(searchParams.guest) || 0,
  };
  const { features, property, date_range, price, room, guest } = state;
  const [countRoom, setRoom] = useState(room);
  const [countGuest, setGuest] = useState(guest);

  const onChange = (value, type) => {
    const query = {
      ...state,
      [type]: value,
    };
    const search = setStateToUrl(query);
    navigate({
      pathname: LISTING_POSTS_PAGE,
      search: `?${createSearchParams(search)}`,
    });
  };

  const handleRoomGuestApply = () => {
    const query = {
      ...state,
      room: countRoom,
      guest: countGuest,
    };
    const search = setStateToUrl(query);
    navigate({
      pathname: LISTING_POSTS_PAGE,
      search: `?${createSearchParams(search)}`,
    });
  };

  const handleRoomGuestCancel = () => {
    setRoom(0);
    setGuest(0);
    const query = {
      ...state,
      room: 0,
      guest: 0,
    };
    const search = setStateToUrl(query);
    navigate({
      pathname: LISTING_POSTS_PAGE,
      search: `?${createSearchParams(search)}`,
    });
  };

  const onSearchReset = () => {
    setRoom(0);
    setGuest(0);
    const search = setStateToUrl({ reset: '' });
    navigate({
      pathname: LISTING_POSTS_PAGE,
      search: `?${createSearchParams(search)}`,
    });
  };

  return (
    <CategorySearchWrapper>
      <ViewWithPopup
        className={features.length ? 'activated' : ''}
        key={getEquipmentType.id}
        noView={true}
        view={
          <Button type="default">
            {getEquipmentType.name}
            {features.length > 0 && `: ${features.length}`}
          </Button>
        }
        popup={
          <Checkbox.Group
            options={getEquipmentType.options}
            defaultValue={features}
            onChange={(value) => onChange(value, 'features')}
          />
        }
      />

      <ViewWithPopup
        className={property.length ? 'activated' : ''}
        key={getPropertyType.id}
        noView={true}
        view={
          <Button type="default">
            {getPropertyType.name}
            {property.length > 0 && `: ${property.length}`}
          </Button>
        }
        popup={
          <Checkbox.Group
            options={getPropertyType.options}
            defaultValue={property}
            onChange={(value) => onChange(value, 'property')}
          />
        }
      />

      <ViewWithPopup
        className={
          Object.keys('date_range').length !== null &&
          date_range.setStartDate !== null
            ? 'activated'
            : ''
        }
        key={400}
        noView={true}
        view={<Button type="default">Choose Date</Button>}
        popup={
          <DateRangePicker
            startDateId="startDate-id-category"
            endDateId="endDate-id-category"
            startDate={
              date_range.setStartDate
                ? moment(date_range.setStartDate, 'MM-DD-YYYY')
                : null
            }
            endDate={
              date_range.setEndDate
                ? moment(date_range.setEndDate, 'MM-DD-YYYY')
                : null
            }
            numberOfMonths={1}
            small={true}
            item={calenderItem}
            updateSearchData={(value) => onChange(value, 'date_range')}
          />
        }
      />

      <ViewWithPopup
        className={
          price.min === price.defaultMin && price.max === price.defaultMax
            ? ''
            : 'activated'
        }
        key={300}
        noView={true}
        view={
          <Button type="default">
            {price.min > 0 || price.max < 100
              ? `Price: ${price.min}, ${price.max}`
              : `Price Per Day`}
          </Button>
        }
        popup={
          <Slider
            range
            marks={priceInit}
            min={price.defaultMin}
            max={price.defaultMax}
            defaultValue={[price.min, price.max]}
            onAfterChange={(value) => onChange(value, 'price')}
          />
        }
      />

      <div className="view_with__popup">
        <div className="popup_handler">
          <Button type="default" onClick={onSearchReset}>
            Reset
          </Button>
        </div>
      </div>
    </CategorySearchWrapper>
  );
};

export default CategorySearch;
