// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const database_id = process.env.NOTION_DATABASE_ID;

const queryDB = async (req, res) => {
  const response = await notion.databases.query({
    database_id,
    filter: {
      property: "status",
      select: {
        equals: "published",
      },
    },
  });
  res.status(200).json({ response });
};

// const queryDB = async (req, res) => {
//   // const response = await notion.pages.retrieve({
//   //   page_id: "b770bc46-d190-459c-beeb-8511aecd41c8",
//   // });
//   // const response = await notion.blocks.retrieve({
//   //   block_id: "b770bc46-d190-459c-beeb-8511aecd41c8",
//   // });
//   const response = await notion.blocks.children.list({
//     block_id: "b770bc46-d190-459c-beeb-8511aecd41c8",
//     page_size: 100,
//   });
//   res.status(200).json({ response });
// };

export default queryDB;
