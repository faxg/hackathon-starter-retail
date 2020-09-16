
const getApiEndpoint = () => {
    return process.env.MigrosApiEndpoint;
}

const getApiSettings = () => {

    // parameter for HTTP Basic Auth
    const auth = {
        username: process.env.MigrosApiUsername,
        password: process.env.MigrosApiPassword
    };
    const headers = {
        'Api-Version': process.env.MigrosApiVersion || "6"
    };

    const settings = {
        auth,
        headers
    }

    return settings;
  };

module.exports = { getApiEndpoint, getApiSettings };
