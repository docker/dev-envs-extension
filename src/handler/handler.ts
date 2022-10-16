export interface Handler {
  canHandlePage: (url: string) => boolean;
  pageIsReady: () => boolean;
  isLoaded: () => boolean;
  load: () => void;
}
