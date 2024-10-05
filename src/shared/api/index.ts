export const api = {
  get: async(endpoint: string) => {
    const controller = new AbortController();
    const { signal } = controller;
    const timer = setTimeout(() => {
      controller.abort();
    }, 6000);
    const res = await fetch(`/api${endpoint}`, {
      signal,
    });
    clearTimeout(timer);
    console.log(res, 'res');
    return res.json();
  },
};
