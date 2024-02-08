import { Request } from "express";
import * as shopify from "@shopify/shopify-api";
import { createAdminRestApiClient } from "@shopify/admin-api-client";

const client = createAdminRestApiClient({
  storeDomain: process.env.SHOPIFY_HOST,
  apiVersion: shopify.LATEST_API_VERSION,
  accessToken: process.env.SHOPIFY_TOKEN,
});

import Record from "../schemas/record";

export const postRecordsService = async (data: Request): Promise<boolean> => {
  const { _id } = data.body;

  const record = await Record.findById(_id);

  const post = {
    title: record.title,
    imageLink: record.imageLink,
    description: record.gptDescription,
  };

  const response = await client.post("blogs/90907967729/articles", {
    data: {
      article: {
        title: post.title,
        author: "John Smith",
        tags: "This Post, Has Been Tagged",
        body_html: `<img src='${post.imageLink}' /><br/><p>${post.description}<p/>`,
        published_at: "Thu Mar 24 15:45:47 UTC 2011",
      },
    }
  });

  if (response.ok) await record.deleteOne();

  return true;
};
