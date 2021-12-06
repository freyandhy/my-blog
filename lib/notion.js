import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const database_id = process.env.NOTION_DATABASE_ID;

export const getDatabase = async (filter) => {
  const response = await notion.databases.query({ database_id, filter });
  return response.results;
};

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (block_id) => {
  const response = await notion.blocks.children.list({
    block_id,
    page_size: 100,
  });
  return response.results;
};

export const getBlockIdBySlug = async (slug) => {
  const filter = { property: "slug", text: { equals: slug } };
  const response = await notion.databases.query({ database_id, filter });
  return response.results[0].id;
};
