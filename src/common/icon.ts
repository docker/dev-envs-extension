import { DEVENVS_ICON_STYLE } from './consts';

export const renderIcon = (size: number = 20) => {
  const icon = document.createElement('img');
  icon.src = 'https://github.com/docker/awesome-compose/raw/master/icon_devenvs.svg';
  icon.className = DEVENVS_ICON_STYLE;
  icon.width = size;
  icon.height = size;

  return icon;
};
