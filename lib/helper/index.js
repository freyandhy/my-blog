// export const generateSlug = (data) => {
//   const id = removeDash(data.id);
//   const slug = data.properties.slug.rich_text[0].plain_text;
//   return slug;
// };

// export const renderBlock = (block) => {
//   const { type, id } = block;
//   const value = block[type];

//   console.log(type);
//   console.log(value);

//   switch (type) {
//     case "paragraph":
//       return (
//         <p>
//           {value.text[0].plain_text}
//           {/* <Text text={value.text} /> */}
//         </p>
//       );
//     case "heading_1":
//       return (
//         <h1>
//           {value.text[0].plain_text}
//           {/* <Text text={value.text} /> */}
//         </h1>
//       );
//     // case "heading_2":
//     //   return (
//     //     <h2>
//     //       <Text text={value.text} />
//     //     </h2>
//     //   );
//     // case "heading_3":
//     //   return (
//     //     <h3>
//     //       <Text text={value.text} />
//     //     </h3>
//     //   );
//     // case "bulleted_list_item":
//     // case "numbered_list_item":
//     //   return (
//     //     <li>
//     //       <Text text={value.text} />
//     //     </li>
//     //   );
//     // case "to_do":
//     //   return (
//     //     <div>
//     //       <label htmlFor={id}>
//     //         <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
//     //         <Text text={value.text} />
//     //       </label>
//     //     </div>
//     //   );
//     // case "toggle":
//     //   return (
//     //     <details>
//     //       <summary>
//     //         <Text text={value.text} />
//     //       </summary>
//     //       {value.children?.map((block) => (
//     //         <Fragment key={block.id}>{renderBlock(block)}</Fragment>
//     //       ))}
//     //     </details>
//     //   );
//     // case "child_page":
//     //   return <p>{value.title}</p>;
//     // case "image":
//     //   const src =
//     //     value.type === "external" ? value.external.url : value.file.url;
//     //   const caption = value.caption ? value.caption[0].plain_text : "";
//     //   return (
//     //     <figure>
//     //       {/* eslint-disable-next-line */}
//     //       <img src={src} alt={caption} />
//     //       {caption && <figcaption>{caption}</figcaption>}
//     //     </figure>
//     //   );
//     // case "divider":
//     //   return <hr key={id} />;
//     // case "quote":
//     //   return <blockquote key={id}>{value.text[0].plain_text}</blockquote>;
//     default:
//       return `❌ Unsupported block (${
//         type === "unsupported" ? "unsupported by Notion API" : type
//       })`;
//   }
// };
