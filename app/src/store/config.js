// The Azure Functions (serverless) backend has to be on '/api'. 
// You may override via SVELTE_APP_API env var
const API = process.env.SVELTE_APP_API || 'api';

export { API as default };
