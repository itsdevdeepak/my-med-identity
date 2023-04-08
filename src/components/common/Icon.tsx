import React from 'react';
import { ColorValue } from 'react-native';

import FileIcon from '../../../assets/icons/file.svg';
import ChevronRightIcon from '../../../assets/icons/chevron-right.svg';
import AddIcon from '../../../assets/icons/add.svg';
import CalenderPlusIcon from '../../../assets/icons/calendar-plus.svg';
import HealthBookIcon from '../../../assets/icons/health-book.svg';
import HomeIcon from '../../../assets/icons/home.svg';
import LeftIcon from '../../../assets/icons/left.svg';
import MembershipCardIcon from '../../../assets/icons/membership-card.svg';
import MoreIcon from '../../../assets/icons/more.svg';
import SearchIcon from '../../../assets/icons/search.svg';
import SliderIcon from '../../../assets/icons/slider.svg';
import UserMenuIcon from '../../../assets/icons/user-menu.svg';
import CloseIcon from '../../../assets/icons/close.svg';

export type IconName =
  | 'file'
  | 'chevronRight'
  | 'home'
  | 'add'
  | 'calendarPlus'
  | 'healthBook'
  | 'left'
  | 'membershipCard'
  | 'more'
  | 'search'
  | 'slider'
  | 'userMenu'
  | 'close';

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
    case 'chevronRight':
      return (
        <ChevronRightIcon
          fill={fill ?? 'white'}
          width={width ?? 30}
          height={height ?? 30}
        />
      );
    case 'add':
      return (
        <AddIcon
          fill={fill ?? 'white'}
          width={width ?? 30}
          height={height ?? 30}
        />
      );
    case 'calendarPlus':
      return (
        <CalenderPlusIcon
          fill={fill ?? 'white'}
          width={width ?? 30}
          height={height ?? 30}
        />
      );
    case 'healthBook':
      return (
        <HealthBookIcon
          fill={fill ?? 'white'}
          width={width ?? 30}
          height={height ?? 30}
        />
      );
    case 'home':
      return (
        <HomeIcon
          fill={fill ?? 'white'}
          width={width ?? 30}
          height={height ?? 30}
        />
      );
    case 'left':
      return (
        <LeftIcon
          fill={fill ?? 'white'}
          width={width ?? 30}
          height={height ?? 30}
        />
      );
    case 'membershipCard':
      return (
        <MembershipCardIcon
          fill={fill ?? 'white'}
          width={width ?? 30}
          height={height ?? 30}
        />
      );
    case 'more':
      return (
        <MoreIcon
          fill={fill ?? 'white'}
          width={width ?? 30}
          height={height ?? 30}
        />
      );
    case 'search':
      return (
        <SearchIcon
          fill={fill ?? 'white'}
          width={width ?? 30}
          height={height ?? 30}
        />
      );
    case 'slider':
      return (
        <SliderIcon
          fill={fill ?? 'white'}
          width={width ?? 30}
          height={height ?? 30}
        />
      );
    case 'userMenu':
      return (
        <UserMenuIcon
          fill={fill ?? 'white'}
          width={width ?? 30}
          height={height ?? 30}
        />
      );
    case 'close':
      return (
        <CloseIcon
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
