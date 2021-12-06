const Text = ({ text }) => {
  if (!text) {
    return null;
  }

  return text.map((value, index) => {
    const {
      annotations: { bold, color, italic, underline, strikethrough },
      text,
    } = value;
    return (
      <span
        key={index}
        className={[
          color !== "default" ? `text-${color}-500` : "text-gray-600",
          bold && "font-bold",
          italic && "italic",
          underline && "underline",
          strikethrough && "line-through",
          //   code ? styles.code : "",
        ].join(" ")}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

export default Text;
