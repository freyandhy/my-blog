import Text from "./Text";

const Block = ({ block }) => {
  const { type } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={value.text} />
        </p>
      );
    case "heading_1":
      return (
        <h1 className="font-lato font-bold text-4xl mb-8">
          {value.text[0].plain_text}
        </h1>
      );
    case "heading_2":
      return (
        <h2 className="font-lato font-bold text-2xl">
          {value.text[0].plain_text}
        </h2>
      );
    case "heading_3":
      return (
        <h3 className="font-lato font-bold text-xl">
          {value.text[0].plain_text}
        </h3>
      );
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0].plain_text : "";
      return (
        <figure>
          {/* eslint-disable-next-line */}
          <img src={src} alt={caption} />
        </figure>
      );
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

export default Block;
