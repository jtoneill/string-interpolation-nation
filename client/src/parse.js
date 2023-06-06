const axios = require('axios');

module.exports = {
  get: (url) => {
    console.log('parse get url', url);
    return axios
      .get(url)
      .then((response) => {
        // console.log('parse get response.data', response.data.rows);
        return response.data;
      })
      .catch((err) => {
        console.log('parse get err', err.message);
      })
  },

  put: (url, data) => {
    return axios
      .put(url, data)
      .then(() => {
        console.log('put updated entry');
        return 'success';
      })
      .catch((err) => {
        console.log('put err', err.message);
      })
  },

  post: (url, data) => {
    return axios
      .post(url, data)
      .then(() => {
        console.log('post updated entry');
        return 'success';
      })
      .catch((err) => {
        console.log('post err', err.message);
      })
  },
}