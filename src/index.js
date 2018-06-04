'use strict';

import dispatch from "./dispatch";


export function trackClicksPerVisit(element) {
  recordClickPerVisit(element);
}

export function trackConversionRate() {
  recordConversionRate(element);
}

export function recordClick(element) {
  dispatch({
    type: "click",
    elem: element,
  });
}

export function recordPageView(element) {
  dispatch({
    type: "pageview",
    elem: element,
  });
}

export function recordConversionRate(element) {
  dispatch({
    type: "conversion",
    elem: element
  });
}

export function recordClickPerVisit(element) {
  dispatch({
    type: "clicksvisit",
    elem: element
  });
}
