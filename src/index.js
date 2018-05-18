'use strict';

import EventMetric from "./metrics/EventMetric";
import dispatch from "./dispatch";


export function logEvent(event) {
  return new EventMetric(event);
}

export function recordClick(event) {
  let eventInfo = {
    type: "click",
    elem: event.target.id,
  }
  dispatch(eventInfo);
}

export function recordPageView(document) {
  let eventInfo = {
    type: "pageview",
    elem: document,
  }
  dispatch(eventInfo);
}
