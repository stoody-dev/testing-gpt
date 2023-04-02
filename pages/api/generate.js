import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});


export default async (req, res) => {
  const openai = new OpenAIApi(configuration);
  const { pro } = req.body;
  const response = await openai.complete({
    pro,
    maxTokens: 100,
    temperature: 0.3,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0,
    bestOf: 1,
    n: 1,
    stream: false,
    stop: [],
  });

  return res.send(response)
}