import "isomorphic-fetch"
import "babel-polyfill"


export default async function dispatch(data) {
  fetch('/hype-metrics', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({...data,
      "time": new Date().toJSON(),
      "exp-id": process.env.REACT_APP_HYPE_EXP_ID,
      "vers-id": process.env.REACT_APP_HYPE_EXP_VERS
    })
  }).catch((err) => {
    console.log(err)
  });
}
