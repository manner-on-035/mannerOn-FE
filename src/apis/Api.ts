import axios, { AxiosInstance, AxiosResponse, AxiosRequestHeaders } from 'axios';
import { HTTPResponse, BusinessErrorResponse, RequestParam } from '../types/common';

export const API_SERVER = process.env.REACT_APP_URL || '';

const getHttpResponse = async <T>({ fn }: { fn: () => Promise<AxiosResponse<T>> }): Promise<HTTPResponse<T>> => {
  try {
    const result = await fn();
    const { status, data } = result;
    const successResponse: HTTPResponse<T> = { status, data };
    const token: string = result.headers.accesstoken;

    if (token !== undefined) {
      sessionStorage.setItem('token', token);
    }
    return successResponse;
  } catch (err: any) {
    const errResponse: Pick<BusinessErrorResponse, 'status' | 'message'> = {
      status: 500,
      message: '',
    };
    if (err.response) {
      errResponse.status = err.response.status;
      errResponse.message = err.response.data.errorCode.message;
    } else if (axios.isCancel(err)) {
      errResponse.message = '요청이 취소되었습니다.';
    } else {
      errResponse.message = '네트워크 상태를 확인해주세요.';
    }
    throw errResponse;
  }
};

export const cancelTokenSource = axios.CancelToken.source();

export default class Api {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_SERVER,
      timeout: 0,
      withCredentials: true,
      cancelToken: cancelTokenSource.token,
      paramsSerializer: function (paramObj) {
        return Object.entries(paramObj)
          .map(([k, v]) => {
            if (v === undefined || v === null) {
              return '';
            }
            if (Array.isArray(v)) {
              return v.map((arrV) => `${k}=${arrV}`).reduce((prev, cur) => `${prev}&${cur}`);
            } else {
              return `${k}=${v}`;
            }
          })
          .reduce((prev, cur) => `${prev}&${cur}`);
      },
    });
  }

  public get<T, D = undefined>({ url, data, params, headers, options }: RequestParam<D>): Promise<HTTPResponse<T>> {
    if (sessionStorage.getItem('token') !== null) {
      const setToken = sessionStorage.getItem('token');
      if (headers === undefined) {
        headers = {} as AxiosRequestHeaders;
      }
      headers.accesstoken = setToken as string;
    }
    const fn = () => this.axiosInstance.get(url, { headers, params, ...options });
    return getHttpResponse<T>({ fn });
  }

  public post<T, D = undefined>({ url, data, headers }: RequestParam<D>): Promise<HTTPResponse<T>> {
    if (sessionStorage.getItem('token') !== null) {
      const setToken = sessionStorage.getItem('token');

      if (headers === undefined) {
        headers = {} as AxiosRequestHeaders;
      }
      headers.authorization = setToken as string;
    }
    const fn = () => this.axiosInstance.post(url, data, { headers });
    return getHttpResponse<T>({ fn });
  }
}

export const apiInstance = new Api();
