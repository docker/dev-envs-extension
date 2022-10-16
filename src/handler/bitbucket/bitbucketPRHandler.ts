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

const findOriginBranch = () => {
  const branchElement = document.body.querySelector('div[data-qa="pr-branches-and-state-styles"]');
  let branchElementText = branchElement.children[0].children[0].children[0].textContent.replace('Branch: ', '');
  const colonSplit = branchElementText.split(':');
  return `https://bitbucket.org/${colonSplit[0]}@${colonSplit[1]}`;
};

const findBitbucketMergeButton = (): HTMLElement => {
  const xpath = "//span[text()='Merge']";
  const matchingElement = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null,
  ).singleNodeValue;
  if (!matchingElement) {
    return null;
  }
  return matchingElement.parentElement.parentElement.parentElement;
};

const findBitbucketButtonContainer = (): HTMLElement => {
  const mergeButton = findBitbucketMergeButton();
  if (!mergeButton) {
    return null;
  }
  return mergeButton.parentElement.parentElement;
};

const renderButton = () => {
  const icon = renderIcon();
  const ourButton = document.createElement('button');
  ourButton.id = BUTTON_ID;
  ourButton.title = BUTTON_TITLE;
  ourButton.textContent = BUTTON_TEXT;
  ourButton.className = `${DEVENVS_BUTTON_STYLE} ${BITBUCKET_BUTTON_STYLE}`;
  ourButton.addEventListener('click', openDevEnv(findOriginBranch()));
  ourButton.appendChild(icon);
  ourButton.type = 'button';

  const bitBucketDiv = findBitbucketButtonContainer();
  const ourDiv = document.createElement('div');
  ourDiv.className = bitBucketDiv.className;
  ourDiv.appendChild(ourButton);

  return ourDiv;
};

export class BitbucketPRHandler implements Handler {
  canHandlePage = (url: string) => /.*bitbucket.org\/.+\/.+\/pull-requests\/.+/.test(url);

  pageIsReady = () => !!findBitbucketButtonContainer();

  isLoaded = () => !!document.getElementById('dev-envs-button');

  load = () => findBitbucketButtonContainer().insertAdjacentElement('afterend', renderButton());
}
