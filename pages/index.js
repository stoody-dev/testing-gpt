import  { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/Stoodyverse.png';
<<<<<<< HEAD
import { Configuration, OpenAIApi } from 'openai';
=======
>>>>>>> 9cee533e49eea1c78878cb45b777ad4b6a4dd9b4

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

const callGenerateEndpoint = async () => {
  setIsGenerating(true);
  
<<<<<<< HEAD
 

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
console.log(respo)
return 
=======
  console.log("Calling OpenAI...")
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userInput }),
  });

  const data = await response.json();
  const { output } = data;
  console.log("OpenAI replied...", output.text)
>>>>>>> 9cee533e49eea1c78878cb45b777ad4b6a4dd9b4

  setApiOutput(`${output.text}`);
  setIsGenerating(false);
}
  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };
  return (
    <div className="root">
      <Head>
        <title>Stoodyverse</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Stoodyverse</h1>
          </div>
          <div className="header-subtitle">
            <h2>A homeverse extension</h2>
          </div>
        </div>
        <div className="prompt-container">
          <textarea placeholder="start typing here" className="prompt-box" value ={userInput}
          onChange={onUserChangedText}/>;
          <div className="prompt-buttons">
            <a className="generate-button" onClick={callGenerateEndpoint}>
              <div className="generate">
              <p>Generate</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with love</p>
          </div>
          
        </a>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Home;
