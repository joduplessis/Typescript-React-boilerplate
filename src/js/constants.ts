const environment = process.env.NODE_ENV;
let envLoginPath = "";
let envApiBasePath = "";
let envApiPath = "";

// API paths (yes we need to extend the Docker container with HTTPS)
if (environment=="development") {
    envLoginPath = "https://staging.url/";
    envApiBasePath = "https://staging.url/api";
    envApiPath = "https://staging.url/api";
} else {
    envLoginPath = "https://production.url/";
    envApiBasePath = "https://production.url/api";
    envApiPath = "https://production.url/api";
}

// Export our APIs
export const LOGIN_PATH = envLoginPath;
export const API_BASE_PATH = envApiBasePath;
export const API_PATH = envApiPath;

// Any Redux action identifiers you could include here if you want
export const APP_ACTION = "APP_ACTION";
