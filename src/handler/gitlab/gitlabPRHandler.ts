import { BUTTON_ID, BUTTON_TEXT, BUTTON_TITLE } from '../../common/consts';
import { renderIcon } from '../../common/icon';
import { openDevEnv } from '../../utils/utils';
import { Handler } from '../handler';

const findPROriginBranch = () => {
  const branchElementText = document.body.getElementsByClassName('detail-page-description')[0].children[2].textContent;
  const colonSplit = branchElementText.split(':');
  return `https://gitlab.com/${colonSplit[0]}@${colonSplit[1]}`;
};

const getContainer = () => document.getElementsByClassName('detail-page-header-actions')[0];

const getCodeButton = () => {
  const xpath = "//span[contains(@class, 'gl-new-dropdown-button-text') and text() = 'Code']";
  const matchingElement = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null,
  ).singleNodeValue;
  return matchingElement.parentElement.parentElement;
};

const renderButton = () => {
  const devEnvsButton = document.createElement('a');
  devEnvsButton.id = BUTTON_ID;
  devEnvsButton.title = BUTTON_TITLE;
  devEnvsButton.textContent = BUTTON_TEXT;
  devEnvsButton.className =
    'gl-display-none gl-md-display-block btn gl-button btn-confirm btn-grouped js-issuable-edit';
  devEnvsButton.addEventListener('click', openDevEnv(findPROriginBranch()));

  const icon = renderIcon(16);
  devEnvsButton.appendChild(icon);

  return devEnvsButton;
};

export class GitlabPRHandler implements Handler {
  canHandlePage = (url: string) => /.*gitlab.com\/.+\/.+\/merge_requests\/.+/.test(url);

  pageIsReady = () => !!getContainer();

  isLoaded = () => !!document.getElementById(BUTTON_ID);

  load = () => getCodeButton().insertAdjacentElement('afterend', renderButton());
}
