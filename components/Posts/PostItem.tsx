import { IProjectDataType, Itag, Iicon } from "api/apiType";
import Image from "next/image";
import PostImages from "./PostImages";
export default function PostItem(data: IProjectDataType) {
  const { properties, icon } = data;
  const title = properties["이름"].title[0]?.plain_text;

  return (
    <>
      {title === undefined ? null : (
        <div className="post-card">
          <div className="p-3">
            <PostImages {...icon} />
            <h1 className="text-xl font-bold">{title}</h1>
          </div>
        </div>
      )}
    </>
  );
}
