import { AxiosStatic, default as axios } from 'axios';
import { _axiosAccountGetApi } from '../../..';
import { endpointFormatDateTool } from '../../../../../utils';
import { IExecution, IExecutions } from '../../../../typescript';
import { Credentials } from '../../../typescript';

// + _getExecutions
/** _getExecutions */
export const _getExecutions = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => (startDate: string) => async (endDate: string): Promise<IExecution[]> => {
  //
  return (await _axiosAccountGetApi(_axios)(credentials)<IExecutions>(
    `/executions?${endpointFormatDateTool(startDate, endDate)}`
  )()).executions;
};