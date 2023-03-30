import React from 'react';
import { ColorValue } from 'react-native';

import FileIcon from '../../../assets/icons/file.svg';
import ChevronRight from '../../../assets/icons/chevron-right.svg';

export type IconName = 'file' | 'chevron-right';

const Icon = ({
  name,
  fill,
  height,
  width,
}: {
  name: IconName;
  width?: number;
  height?: number;
  fill?: ColorValue;
}) => {
  switch (name) {
    case 'file':
      return (
        <FileIcon
          fill={fill ?? 'white'}
          width={width ?? 30}
          height={height ?? 30}
        />
      );
    case 'chevron-right':
      return (
        <ChevronRight
          fill={fill ?? 'white'}
          width={width ?? 30}
          height={height ?? 30}
        />
      );
    default:
      return null;
  }
};

export { Icon };
