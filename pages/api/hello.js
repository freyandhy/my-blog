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

export default queryDB;
