const dev = {
    auth: {
        tokenStorageKey: "auth-token",
    },
    apiGateway: {
        URL: "http://localhost:8080/api"
    },
};

const prod = {
    auth: {
        tokenStorageKey: "auth-token",
    },
    apiGateway: {
        URL: "http://localhost:8080/api"
    },
};

const config = process.env.REACT_APP_STAGE === "production" ? prod : dev;

export default {
    // Common config vars
    ...config
};