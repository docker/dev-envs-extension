export const openDevEnv = (prURL: string) => (e: MouseEvent | KeyboardEvent) => {
  const deepLinkURL = `https://open.docker.com/dashboard/dev-envs?url=${prURL}`;
  window.open(deepLinkURL, '_self');
  e.preventDefault();
  e.stopPropagation();
};
