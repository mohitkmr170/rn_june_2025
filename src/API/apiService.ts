import axios, {AxiosRequestConfig} from 'axios';
import {API_CONFIG} from '../Utils/config';

export async function apiGet(
  endPoint: string,
  {
    URL,
    pathParams,
    queryParams,
    config,
  }: {
    URL?: string;
    pathParams?: Record<string, string | number>;
    queryParams?: Record<string, string | number | boolean>;
    config?: AxiosRequestConfig;
  },
) {
  try {
    let client = axios.create({
      baseURL: URL,
      timeout: API_CONFIG.timeout,
    });
    let url = endPoint;
    if (pathParams) {
      Object.entries(pathParams).forEach(([key, value]) => {
        url = url.replace(`:${key}`, encodeURIComponent(String(value)));
      });
    }
    const response = await client.get(url, {
      ...config,
      params: queryParams,
    });
    return response.data;
  } catch (error: any) {
    throw error?.response?.data || error?.message;
  }
}
