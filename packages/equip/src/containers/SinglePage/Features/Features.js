import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/UI/Heading/Heading';
import TextLink from 'components/UI/TextLink/TextLink';
import { FaHammer, FaWeightHanging, FaBatteryFull, FaPlug } from 'react-icons/fa'; // For carpentry and general construction
import { GiPlunger, GiPipeConnector } from 'react-icons/gi'; // For plumbing
import { MdElectricalServices } from 'react-icons/md'; // For electrical equipment

import IconCard from 'components/IconCard/IconCard';
import FeaturesWrapper, { FeaturesArea } from './Features.style';
import { TextButton } from '../SinglePageView.style';
import { Element } from 'react-scroll';

const features = ({ titleStyle, linkStyle }) => {
  return (
    <Element name="features" className="features">
      <featuresWrapper>
        <Heading as="h2" content="Features" {...titleStyle} />
        <featuresArea>
          <IconCard icon={<FaPlug />} title="Extention Cord" />
          <IconCard icon={<FaBatteryFull />} title="Battery Powered" />
          <IconCard icon={<FaWeightHanging />} title="Heavy" />
          
        </featuresArea>
        <TextButton>
          <TextLink link="#1" content="Show all Features" {...linkStyle} />
        </TextButton>
      </featuresWrapper>
    </Element>
  );
};

features.propTypes = {
  titleStyle: PropTypes.object,
  linkStyle: PropTypes.object,
};

features.defaultProps = {
  titleStyle: {
    color: '#2C2C2C',
    fontSize: ['17px', '20px', '25px'],
    lineHeight: ['1.15', '1.2', '1.36'],
    mb: ['14px', '20px', '30px'],
  },
  linkStyle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#008489',
  },
};

export default features;
