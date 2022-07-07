import { IProjectDataType, Itag, Iicon } from "api/apiType";
import Link from "next/link";
import PostImages from "./PostImages";
export default function PostItem(data: IProjectDataType) {
  const { properties, icon } = data;
  const title = properties["이름"].title[0]?.plain_text;
  return (
    <>
      {title === undefined ? null : (
        <Link href={`https://bead-minute-575.notion.site/${data.url.slice(22)}`}>
          <div className="post-card cursor-pointer">
            <div className="p-3">
              <PostImages {...icon} />
              <h1 className="text-xl font-bold">{title}</h1>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
