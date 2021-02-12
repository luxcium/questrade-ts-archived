import {
  ClientPromise,
  ClientRequestConfig,
} from '../../../resources/side-effects/types';
import { RateLimiterOptions } from '../../../typescript';
import { limitingRequest } from '../requestPerSecondLimit';

export const newRequestLimiter = <R>(
  options: RateLimiterOptions,
): ClientPromise<R> => {
  const {
    xRemaining,
    xReset,
    httpClient,
    config,
    cb,
    credentials,
    timeThen,
    maxPerSec,
    maxPerHour,
  } = options;

  // cb(fn(args));
  void xRemaining,
    xReset,
    httpClient,
    cb,
    credentials,
    timeThen,
    maxPerSec,
    maxPerHour;
  return limitingRequest(
    async (conf: ClientRequestConfig = config) => httpClient<R>(conf),
    20,
  );
};
// newRequestLimiter