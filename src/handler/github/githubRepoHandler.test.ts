import { BUTTON_ID, BUTTON_TEXT } from '../../common/consts';
import { GithubRepoHandler } from './githubRepoHandler';

describe('only handles correct URLs', () => {
  const cases = [
    {
      description: 'non-github URL',
      url: 'https://google.com',
      expected: false,
    },
    {
      description: 'non-github URL with /pull/',
      url: 'https://google.com/docker/dev-envs-extension/pull/123',
      expected: false,
    },
    {
      description: 'Github PRs dashboard URL',
      url: 'https://github.com/docker/dev-envs-extension/pulls',
      expected: false,
    },
    {
      description: 'Github PR URL',
      url: 'https://github.com/docker/dev-envs-extension/pull/123',
      expected: false,
    },
    {
      description: 'Github Repo URL',
      url: 'https://github.com/docker/dev-envs-extension',
      expected: true,
    },
    {
      description: 'Github Repo URL with branch',
      url: 'https://github.com/docker/dev-envs-extension/tree/feature-bork',
      expected: true,
    },
    {
      description: 'Github Repo commit history URL',
      url: 'https://github.com/docker/dev-envs-extension/commits/main',
      expected: false,
    },
  ];

  const handler = new GithubRepoHandler();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  it.each(cases)('correctly handles a $description', ({ description, url, expected }) => {
    expect(handler.canHandlePage(url)).toBe(expected);
  });
});

describe('load', () => {
  it('injects button', () => {
    document.body.innerHTML = `
      <div class="file-navigation">
      </>
    `;

    const handler = new GithubRepoHandler();
    handler.load();

    expect(document.getElementById(BUTTON_ID).textContent).toBe(BUTTON_TEXT);
  });
});
