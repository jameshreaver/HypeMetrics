import "isomorphic-fetch"
import "babel-polyfill"


export default async function dispatch(data) {
  fetch('http://hype-metrics', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      "eid": process.env.REACT_APP_HYPE_EXP_ID,
      "vid": process.env.REACT_APP_HYPE_EXP_VERS,
      "data": data
    })
  }).catch((err) => {
    console.log(err)
  });
}
