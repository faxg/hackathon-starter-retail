
const getApiEndpoint = () => {
    return process.env.MigrosApiEndpoint;
}

/**
 * Populates HTTP client settings to access the Migros API
 */
const getApiSettings = () => {

    // parameter for HTTP Basic Auth
    const auth = {
        username: process.env.MigrosApiUsername,
        password: process.env.MigrosApiPassword
    };
    const headers = {
        'Api-Version': process.env.MigrosApiVersion || "7",
        'accept-language': 'de' // FIXME: need to send this header, valid values are de,fr,it 
    };

    const settings = {
        auth,
        headers
    }

    return settings;
  };

module.exports = { getApiEndpoint, getApiSettings };
