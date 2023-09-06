const requester = (url) => {
  let errorEvents = {
    hasGenericError: false,
    hasServerError: false
  };

  const methodTypes = {
    GET: 'GET',
    POST: 'POST'
  }

  const { GET } = methodTypes;

  return {
    get: () => {
      return new Promise((resolve, reject) => {

        xhr.open(GET, url);
        xhr.send();

        xhr.onreadystatechange = function (ev) {
          if (ev.currentTarget.readyState === 4 && ev.currentTarget.status === 200) {
            resolve(ev.currentTarget);
          } else if (ev.status === 400) {
            errorEvents.hasGenericError = true;
            reject(ev.error);
          } else if (ev.status === 500) {
            errorEvents.hasServerError = true
          }
        }
      })
    },
    //post put patch delete
  }
};

module.exports = requester;
