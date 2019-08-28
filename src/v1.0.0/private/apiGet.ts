import { axios, AxiosResponse } from '.';
export async function apiGet<T>(url: string, _accessToken: string): Promise<T> {
  let data: T;
  try {
    let response: AxiosResponse<T>;
    response = await axios(generateHeader(url, _accessToken));
    if (!response.data) {
      throw new Error();
    }
    data = response.data;
  } catch (apiError) {
    throw errorLog(apiError);
  }
  return data;
}

/** Logging the error for the function apiClient */
export function errorLog(apiError: any) {
  try {
    console.error(
      '\nAPI error in call to api:\n',
      `\n${apiError.message}`,
      `\nError code: ${apiError.response.data.code}`,
      `\n${apiError.response.data.message}`
    );
  } catch (dataError) {
    console.error(
      '\nAPI error in the response from the api:',
      `\n${dataError.message}`
    );
  }
  return apiError;
}

export function generateHeader(url: string, _accessToken: string) {
  return {
    url,
    methode: 'GET',
    headers: {
      Authorization: `Bearer ${_accessToken}`,
    },
  };
}