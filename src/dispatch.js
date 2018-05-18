import "isomorphic-fetch"
import "babel-polyfill"


export default async function dispatch(data) {
  await fetch('/hype/metrics', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      "experiment-id": process.env.REACT_APP_HYPE_EXP_ID || "",
      "version-id": process.env.REACT_APP_HYPE_EXP_VERS || "",
      "data":data
    })
  }).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
  });
}
