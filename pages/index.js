import Head from 'next/head';
import { useState } from 'react';


const Home = () => {
const [userInput, setUserInput] = useState('');
const onUserChangedText = (event) => {
  console.log(event.target.value);
  setUserInput(event.target.value);
};
  return (
    <div className="root">
      <Head>
        <title>Rizz AI</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Cool one-liners to strike conversations on dating apps!</h1>
          </div>
          <div className="header-subtitle">
            <h2>enter your interests seperated by a comma as shown below</h2>
          </div>
          <div className="prompt-container">
            <textarea
              placeholder="eg. painting, football, hiking"
              className="prompt-box"
              value={userInput}
              onChange={onUserChangedText}
            />
            
            <div className="prompt-buttons">
              <a className="generate-button" onClick={null}>
                <div className="generate">
                  <p>Generate</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
