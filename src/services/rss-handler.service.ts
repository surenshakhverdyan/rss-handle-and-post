import { Request } from 'express';
import OpenAI from 'openai';

import Record from '../schemas/record';

const client = new OpenAI({ apiKey: process.env.OPEN_AI_KEY });

export const rssHandlerService = async (data: Request): Promise<boolean | void> => {
  const items = data.body.data.items_new;
  
  for (let i = 0; i < items.length; i++) {
    const element = items[i];
    await Record.create({
      title: element.title,
      description: element.description_text,
      imageLink: element.thumbnail,
      gptDescription: await gpt(element.description_text)
    });
  }

  return true;
};

const gpt = async (text: string): Promise<string> => {
  const response = await client.chat.completions.create({
    messages: [{ role: 'user', content: `modify the provided text while maintaining the same content, return me only your provided text. ${text}` }],
    model: 'gpt-3.5-turbo',
  });

  return response.choices[0].message.content;
}
