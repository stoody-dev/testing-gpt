import  { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/Stoodyverse.png';

import { Configuration, OpenAIApi } from 'openai';
import { RequiredError } from 'openai/dist/base';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

const callGenerateEndpoint = async () => {
  setIsGenerating(true);
const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPEN_API})

  const openai = new OpenAIApi(configuration);

const respo = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: userInput,
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});


const response = await fetch('/api/generate', {
  await openai.createCompletion({
    model: "text-davinci-003",
    prompt: userInput,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })




  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };
  default:
    undefined;
  };
  'use strict';
  const { useState } = require('react');
  const { Configuration, OpenAIApi } = require('openai');
  const { default: buildspaceLogo } = require('../assets/Stoodyverse.png');
  RequiredError;
  const Home = () => { 
    const [userInput, setUserInput] = useState('');
    const [apiOutput, setApiOutput] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const callGenerateEndpoint = async () => {
      setIsGenerating(true);
      const configuration = new Configuration({
        apiKey: process.env.NEXT_PUBLIC_OPEN_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: userInput,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      setApiOutput(response.data.choices[0].text);
      setIsGenerating(false);
    };
  

export default Home;
