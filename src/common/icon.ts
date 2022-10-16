export const renderIcon = (size: number = 20) => {
  const icon = document.createElement('img');
  icon.src = 'https://github.com/docker/awesome-compose/raw/master/icon_devenvs.svg';
  icon.className = 'dev-env-icon';
  icon.width = size;
  icon.height = size;

  return icon;
};
