import { GithubPRHandler } from './githubPRHandler';

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
      description: 'non-PR github URL',
      url: 'https://github.com/docker/dev-envs-extension',
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
      expected: true,
    },
  ];

  const handler = new GithubPRHandler();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  it.each(cases)('correctly handles a $description', ({ description, url, expected }) => {
    expect(handler.canHandlePage(url)).toBe(expected);
  });
});

describe('load', () => {
  it('injects button', () => {
    document.body.innerHTML = `
      <div class="gh-header-actions">
      </>
    `;

    const handler = new GithubPRHandler();
    handler.load();

    expect(document.getElementById('dev-envs-button').textContent).toBe('Open in Dev Environments');
  });
});
