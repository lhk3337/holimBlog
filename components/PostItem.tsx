import { IProjectDataType, Itag } from "api/apiType";
export default function PostItem(data: IProjectDataType) {
  const { properties, cover } = data;
  const title = properties["이름"].title[0]?.plain_text;
  return (
    <>
      {title === undefined ? null : (
        <div className="post-card">
          <div className="p-3">
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>
        </div>
      )}
    </>
  );
}
