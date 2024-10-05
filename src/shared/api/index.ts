const baseURL = process.env.MAIN_URL || 'http://localhost:3000';

export const convertPath = (url: string) => `${baseURL}${url}`;

export const api = {
  get: async(endpoint: string) => {
    const controller = new AbortController();
    const { signal } = controller;
    const timer = setTimeout(() => {
      controller.abort();
    }, 6000);
    const res = await fetch(`${baseURL}/api${endpoint}`, {
      signal,
    });
    clearTimeout(timer);

    return res.json();
  },
};
