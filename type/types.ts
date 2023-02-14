export type ResData = {
  token: string;
  data: {
    token: string;
  };
  status: number;
  statusText: string;
  headers: {
    'content-length': string;
    'content-type': string;
  };
  config: {
    transitional: {
      silentJSONParsing: boolean;
      forcedJSONParsing: boolean;
      clarifyTimeoutError: boolean;
    };
    adapter: string[];
    transformRequest: null[];
    transformResponse: null[];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: {};
    headers: {
      Accept: string;
      'Content-Type': string;
    };
    method: string;
    url: string;
    data: string;
  };
  request: {};
};

export type ResponseUpdateProfileTYpes = {
  data: {
    msg: string;
  };
  status: number;
  statusText: string;
  headers: {} | string;
  config: {
    transitional: {
      silentJSONParsing: boolean;
      forcedJSONParsing: boolean;
      clarifyTimeoutError: boolean;
    };
    adapter: string[];
    transformRequest: [null];
    transformResponse: [null];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: {};
    headers: {
      Accept: string;
      'Content-Type': string;
      auth: string;
    };
    method: string;
    url: string;
    data: string;
  };
  request: {};
};
