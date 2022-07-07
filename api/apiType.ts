interface ITitle {
  plain_text: string;
}

export interface Iicon {
  external: { url: string };
  emoji: string;
  file: { expiry_time: string; url: string };
  type: string;
}
export interface Itag {
  id: string;
  name: string;
  color: string;
}
export interface IProjectDataType {
  id: string;
  properties: {
    이름: { title: ITitle[] };
    태그: { multi_select: Itag[] };
  };
  url: string;
  icon: Iicon;
}

export interface IProjectsDataType {
  posts: { results: IProjectDataType[] };
}
