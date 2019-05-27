import React from 'react';
import {
  FiVolume2,
  FiChevronDown,
  FiChevronUp,
  FiX,
} from 'react-icons/fi';

export const InfoIcon = props => <FiVolume2 {...props} />;
export const DownIcon = props => <FiChevronUp {...props} />;
export const UpIcon = props => <FiChevronDown {...props} />;
export const CloseIcon = props => <FiX {...props} />;