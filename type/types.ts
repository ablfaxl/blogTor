

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

export type MyBlogTypes = {
  _id: string;
  title: string;
  content: string;
  creatorId: string;
  imgurl: string;
  averageScore: number;
  createdAt: string;
  updatedAt: string;
  rateCount: number;
};

export type MyBlogPropsTypes = {
  data: {
    _id: string;
    title: string;
    content: string;
    creatorId: string;
    imgurl: string;
    averageScore: number;
    createdAt: string;
    updatedAt: string;
    rateCount: number;
  };
};

export interface BlogsTypes {
  data: [
    {
      _id: string;
      title: string;
      content: string;
      creatorId: string;
      imgurl: string;
      averageScore: number;
      createdAt: string;
      updatedAt: string;
      creator: {
        _id: string;
        username: string;
        name: string;
        bio: string;
        blogs: string[];
        avatar: string;
        averageScore: number;
        createdAt: string;
        updatedAt: string;
      };
      rateCount: number;
    }
  ];
}

export type BLogMapTypes = {
  _id: string;
  title: string;
  content: string;
  creatorId: string;
  imgurl: string;
  averageScore: number;
  createdAt: string;
  updatedAt: string;
  creator: {
    _id: string;
    username: string;
    name: string;
    bio: string;
    blogs: string[];
    avatar: string;
    averageScore: number;
    createdAt: string;
    updatedAt: string;
  };
  rateCount: number;
};

export interface ContextTypes {
  params: { id: string };
  locales: undefined;
  locale: undefined;
  defaultLocale: undefined;
}

export interface TopBlogTypes {
  data: {
    _id: string;
    title: string;
    content: string;
    creatorId: string;
    imgurl: string;
    averageScore: number;
    createdAt: string;
    updatedAt: string;
    rateCount: number;
  }[];
}

export interface TopWriterTypes {
  data: {
    _id: string;
    username: string;
    name: string;
    bio: string;
    avatar: string;
    averageScore: number;
    createdAt: string;
    updatedAt: string;
  }[];
}
