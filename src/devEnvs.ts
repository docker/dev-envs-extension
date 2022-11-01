import { BitbucketRepoHandler } from './handler/bitbucket/bitbucketRepoHandler';
import { GithubPRHandler } from './handler/github/githubPRHandler';
import { GithubRepoHandler } from './handler/github/githubRepoHandler';
import { GitlabRepoHandler } from './handler/gitlab/gitlabRepoHandler';
import { Handler } from './handler/handler';

const handlers: Handler[] = [
  new GithubPRHandler(),
  new GithubRepoHandler(),
  new BitbucketRepoHandler(),
  new GitlabRepoHandler(),
];

const main = () => {
  handlers.forEach((handler) => {
    if (handler.canHandlePage(document.location.href)) {
      if (!handler.isLoaded() && handler.pageIsReady()) {
        handler.load();
      }
      return;
    }
  });
};

const observer = new MutationObserver(main);
const config = { attributes: true, childList: true, subtree: true };
observer.observe(document, config);
