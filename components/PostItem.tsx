import { IProjectDataType, Itag, Iicon } from "api/apiType";
import Image from "next/image";
export default function PostItem(data: IProjectDataType) {
  const { properties, icon } = data;

  const title = properties["이름"].title[0]?.plain_text;

  const Icons = (icon: Iicon) => {
    if (icon.type === "file") {
      const { url } = icon.file;
      return <Image src={url} width={30} height={30} alt="icon" />;
    } else if (icon.type === "emoji") {
      return <h1 className="text-2xl">{icon.emoji}</h1>;
    } else if (icon.type === "external") {
      const { url } = icon.external;
      return <Image src={url} width={30} height={30} alt="icon" />;
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    }
  };

  return (
    <>
      {title === undefined ? null : (
        <div className="post-card">
          <div className="p-3">
            <Icons {...icon} />
            <h1 className="text-xl font-bold">{title}</h1>
          </div>
        </div>
      )}
    </>
  );
}
