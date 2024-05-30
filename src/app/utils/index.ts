// A simple sleep function to simulate a slow network request.
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
