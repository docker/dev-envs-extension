import { BUTTON_ID, BUTTON_TEXT, BUTTON_TITLE, DEVENVS_BUTTON_STYLE, GITHUB_BUTTON_STYLE } from '../../common/consts';
import { renderIcon } from '../../common/icon';
import { openDevEnv } from '../../utils/utils';
import { Handler } from '../handler';

const renderButton = () => {
  const icon = renderIcon();
  const ourButton = document.createElement('a');
  ourButton.id = BUTTON_ID;
  ourButton.title = BUTTON_TITLE;
  ourButton.textContent = BUTTON_TEXT;
  ourButton.className = `${DEVENVS_BUTTON_STYLE} ${GITHUB_BUTTON_STYLE} btn ml-2 btn-primary d-none d-md-block`;
  ourButton.addEventListener('click', openDevEnv(document.location.href));
  ourButton.appendChild(icon);

  return ourButton;
};

const getContainer = () => document.getElementsByClassName('file-navigation')[0];

export class GithubRepoHandler implements Handler {
  canHandlePage = (url: string) =>
    /.*github.com\/.+\/.+/.test(url) && !url.includes('/pull/') && !url.includes('/pulls') && !url.includes('/commits');

  pageIsReady = () => !!getContainer();

  isLoaded = () => !!document.getElementById(BUTTON_ID);

  load = () => getContainer().appendChild(renderButton());
}
