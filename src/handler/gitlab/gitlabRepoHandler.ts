import { BUTTON_ID, BUTTON_TEXT, BUTTON_TITLE } from '../../common/consts';
import { renderIcon } from '../../common/icon';
import { openDevEnv } from '../../utils/utils';
import { Handler } from '../handler';

const findCloneButton = () => document.getElementsByClassName('project-clone-holder')[0];

const getContainer = () => findCloneButton().parentElement;

const renderButton = () => {
  const ourButtonContainer = document.createElement('div');
  ourButtonContainer.className = `${findCloneButton().className}`;
  const deeperContainer = document.createElement('div');
  deeperContainer.className = `${findCloneButton().children[0].className}`;
  ourButtonContainer.appendChild(deeperContainer);
  const ourButton = document.createElement('a');
  ourButton.id = BUTTON_ID;
  ourButton.title = BUTTON_TITLE;
  ourButton.textContent = BUTTON_TEXT;
  ourButton.className = `${findCloneButton().children[0].children[0].className}`;
  ourButton.addEventListener('click', openDevEnv(document.location.href));
  const icon = renderIcon(16);
  ourButton.appendChild(icon);
  deeperContainer.appendChild(ourButton);

  return ourButtonContainer;
};

export class GitlabRepoHandler implements Handler {
  canHandlePage = (url: string) => /.*gitlab.com\/.+\/.+/.test(url) && !url.includes('/merge_requests');

  pageIsReady = () => !!getContainer();

  isLoaded = () => !!document.getElementById(BUTTON_ID);

  load = () => getContainer().appendChild(renderButton());
}
