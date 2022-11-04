import { GitlabRepoHandler } from './gitlabRepoHandler';

describe('only handles correct URLs', () => {
  const cases = [
    {
      description: 'non-gitlab URL',
      url: 'https://google.com',
      expected: false,
    },
    {
      description: 'non-gitlab URL with /merge_requests',
      url: 'https://google.com/docker/dev-envs-extension/merge_requests/123',
      expected: false,
    },
    {
      description: 'Gitlab PRs dashboard URL',
      url: 'https://gitlab.com/docker/dev-envs-extension/merge_requests',
      expected: false,
    },
    {
      description: 'Gitlab PR URL',
      url: 'https://gitlab.com/docker/dev-envs-extension/merge_requests/123',
      expected: false,
    },
    {
      description: 'Gitlab Repo URL',
      url: 'https://gitlab.com/docker/dev-envs-extension',
      expected: true,
    },
    {
      description: 'Gitlab Repo URL with branch',
      url: 'https://gitlab.com/docker/dev-envs-extension/tree/feature-bork',
      expected: true,
    },
  ];

  const handler = new GitlabRepoHandler();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  it.each(cases)('correctly handles a $description', ({ description, url, expected }) => {
    expect(handler.canHandlePage(url)).toBe(expected);
  });
});
