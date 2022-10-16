import {
  BUTTON_ID,
  BUTTON_TITLE,
  BUTTON_TEXT,
  DEVENVS_BUTTON_STYLE,
  BITBUCKET_BUTTON_STYLE,
} from '../../common/consts';
import { renderIcon } from '../../common/icon';
import { openDevEnv } from '../../utils/utils';
import { Handler } from '../handler';

const findBitbucketCloneButton = (): HTMLElement => {
  const xpath = "//span[text()='Clone']";
  const matchingElement = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null,
  ).singleNodeValue;
  return matchingElement.parentElement.parentElement.parentElement;
};

// todo: needs to exit gracefully when container does not exist
const findBitbucketButtonContainer = (): HTMLElement => findBitbucketCloneButton().parentElement;

const renderButton = () => {
  const icon = renderIcon();
  const ourButton = document.createElement('button');
  ourButton.id = BUTTON_ID;
  ourButton.title = BUTTON_TITLE;
  ourButton.textContent = BUTTON_TEXT;
  ourButton.className = `${DEVENVS_BUTTON_STYLE} ${BITBUCKET_BUTTON_STYLE}`;
  ourButton.addEventListener('click', openDevEnv(document.location.href));
  ourButton.appendChild(icon);
  ourButton.type = 'button';

  const bitBucketDiv = findBitbucketButtonContainer();
  const ourDiv = document.createElement('div');
  ourDiv.className = bitBucketDiv.className;
  ourDiv.appendChild(ourButton);

  return ourDiv;
};

export class BitbucketRepoHandler implements Handler {
  canHandlePage = (url: string) => /.*bitbucket.org\/.+\/.+/.test(url) && !url.includes('/pull-requests/');

  pageIsReady = () => !!findBitbucketButtonContainer();

  isLoaded = () => !!document.getElementById(BUTTON_ID);

  load = () => findBitbucketButtonContainer().insertAdjacentElement('afterend', renderButton());
}
