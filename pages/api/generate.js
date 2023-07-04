import { loadDefaultErrorComponents } from 'next/dist/server/load-components';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);({})
const opencv = require('opencv4nodejs');
const cv = require('opencv4nodejs');
const fs = require('fs');
const path = require('path');

const { create, all } = require('mathjs');
const math = create(all);





const basePromptPrefix = "";
const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.7,
    max_tokens: 250,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();
  $(document).ready(function() {
    $.ajax({
      url: 'https://www.troyhunt.com/authentication-and-the-have-i-been-pwned-api/',
      type: 'GET',
      dataType: 'json',
      success: function() { alert('hello!'); },
      error: function() { alert('boo!'); }
      ,
      headers: {
  'User-Agent': 'uaheader'
}
    });
  });

  

  res.status(200).json({ output: basePromptOutput });
  const basePromptOutputText = basePromptOutput.text;({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}${basePromptOutputText}`,
    temperature: 0.7,
    max_tokens: 250,
  });
  res.status(200).json({ output: basePromptOutput });
  
  
  
  
};

export default generateAction;