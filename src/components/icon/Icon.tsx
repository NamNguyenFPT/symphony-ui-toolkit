import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import InfoRoundIcon from './InfoRoundIcon';

const IconTag = styled.i`
  cursor: pointer;
`;

const Icon = ({ iconName, handleClick }) => {
  return (
    <IconTag
      className={`tk-ic-${iconName != 'info-round' ? iconName : ''} tk-icon`}
      onClick={handleClick}
    >
      {iconName == 'info-round' ? <InfoRoundIcon /> : null}
    </IconTag>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Icon;
