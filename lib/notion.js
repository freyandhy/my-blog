import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const database_id = process.env.NOTION_DATABASE_ID;

export const getDatabase = async (filter) => {
  const response = await notion.databases.query({ database_id, filter });
  return response.results;
};
