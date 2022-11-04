import { BUTTON_ID, BUTTON_TEXT, BUTTON_TITLE, DEVENVS_BUTTON_STYLE, GITHUB_BUTTON_STYLE } from '../../common/consts';
import { renderIcon } from '../../common/icon';
import { openDevEnv } from '../../utils/utils';
import { Handler } from '../handler';

const getPRURL = () =>
  document.location.href.replace('/files', '').replace('/commits', '').replace('/checks', '').replace('/files', '');

const renderButton = () => {
  const icon = renderIcon();
  const ourButton = document.createElement('button');
  ourButton.id = BUTTON_ID;
  ourButton.title = BUTTON_TITLE;
  ourButton.textContent = BUTTON_TEXT;
  ourButton.className = `${DEVENVS_BUTTON_STYLE} ${GITHUB_BUTTON_STYLE} btn btn-sm`;
  ourButton.addEventListener('click', openDevEnv(getPRURL()));
  ourButton.appendChild(icon);

  return ourButton;
};

const getContainer = () => document.getElementsByClassName('gh-header-actions')[0];

export class GithubPRHandler implements Handler {
  canHandlePage = (url: string) => /.*github.com\/.*\/pull\/d*/.test(url);

  pageIsReady = () => !!getContainer();

  isLoaded = () => !!document.getElementById(BUTTON_ID);

  load = () => getContainer().appendChild(renderButton());
}
