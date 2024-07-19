const config = {
  api: {
    url: import.meta.env.VITE_BACKEND_URL || 'http://localhost:4001',
  },
} as const;

export { config };
