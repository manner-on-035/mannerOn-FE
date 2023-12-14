import { AxiosRequestHeaders, AxiosRequestConfig } from 'axios';

export type QueryParamsType = Record<string | number, any>;
export interface RequestParam<T> {
  url: string;
  data?: T;
  params?: QueryParamsType;
  headers?: AxiosRequestHeaders;
  options?: AxiosRequestConfig;
}

export interface HTTPResponse<T> {
  status: number;
  data: T;
}

export interface BusinessErrorResponse {
  data: any;
  errorCode: {
    status: number;
    message: string;
    code: string;
  };
  fieldErrors: {
    field: string;
    value: string;
    reason: string;
  }[];
  message: string;
  status: number;
}

export interface ApiState<T> {
  loading: boolean;
  response: null | HTTPResponse<T>;
  error: null | BusinessErrorResponse;
}
