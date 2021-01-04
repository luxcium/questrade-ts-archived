import axios, { AxiosResponse, AxiosStatic } from 'axios';

import {
  AxiosProxyHandler,
  CoreApiConfig,
  Credentials,
  LogErrors,
} from '../../typescript';
import { creatUrlAndDataHashes, getQtUrlPathFromArgs } from '../../utils';
import {
  remainingRequests,
  remaningTimeString,
  requestPerSecondLimiter,
} from './requestPerSecondLimit';

export const _tryToGetData = <R, D>(
  _config: CoreApiConfig<D>,
  credentials?: Credentials,
  proxy?: AxiosProxyHandler,
) => {
  return async (_logError: LogErrors): Promise<R> => {
    try {
      let axiosClient: AxiosStatic = axios;
      if (proxy) {
        axiosClient = proxy;
      }

      const possiblePerSeconds =
        credentials?.remainingRequests?.possiblePerSeconds ?? 21;
      let response: AxiosResponse;
      if (possiblePerSeconds <= 20) {
        //
        const requestLimiter = requestPerSecondLimiter(possiblePerSeconds);
        response = await requestLimiter(
          async (): Promise<AxiosResponse<R>> => axiosClient(_config),
        );
      } else {
        response = await axiosClient(_config);
      }
      if (response.status !== 200) {
        console.log('________________________________________________'); // TODO: List the side effects
        console.log(response.status, response.statusText); // TODO: List the side effects
        console.log(response.data); // TODO: List the side effects
        console.table(response.headers); // TODO: List the side effects
        console.log(
          remaningTimeString(
            credentials?.remainingRequests?.secondsRemaning
              ? credentials.remainingRequests.secondsRemaning
              : 0,
          ),
        ); // TODO: List the side effects
        console.log(response.status, response.statusText); // TODO: List the side effects
        console.log('________________________________________________'); // TODO: List the side effects
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++'); // TODO: List the side effects
      } else {
        // console.log(
        //   remaningTimeString(
        //     credentials?.remainingRequests?.secondsRemaning
        //       /? credentials.remainingRequests.secondsRemaning
        //       : 0
        //   )
        // );
      }
      const { data } = response;
      if (!data) {
        throw _logError(new Error("Can't retrive data from call to API"));
      }
      try {
        if (credentials) {
          credentials.remainingRequests = remainingRequests(response);

          credentials.config_ = _config;
          credentials.response_ = response;
          credentials.configUrl_ = `${_config.url}`.split('questrade.com/')[1];

          credentials.urlTimeUTC = new Date(credentials.response_.headers.date);

          const urlToHash = getQtUrlPathFromArgs(_config);
          const dataToHash = `${JSON.stringify(response.data ?? null)}`;

          // TODO: remove dependencies to nodeJS crypto module making it optional ...
          credentials.hashes = creatUrlAndDataHashes(urlToHash, dataToHash);
        }
      } catch (error_) {
        console.error('error_:', error_); // TODO: List the side effects

        console.info(
          "To make tests pass removed 'throw' error messages from code bloc in (Axios) _tryToGetData",
        ); // TODO: List the side effects

        throw error_;
      }
      return data;
    } catch (error) {
      console.error(_logError(error).message); // TODO: List the side effects

      throw error;
    }
  };
};
