import { useState, useEffect } from "react";

function App() {
  const API_KEY = "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";
  const URL = "https://api.openai.com/v1/completions";

  const [response, setResponse] = useState("");

  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "model": "gpt-3.5-turbo-instruct",
      "prompt": "Say this is a test",
      "max_tokens": 10,
    })
  }

  useEffect(() => {
    const getResponse = async () => {
      const fetch2 = await fetch(URL, options);
      const response = await fetch2.json();
      console.log("Response: ", response);
    }

    getResponse();

  }, [response])

  return (
    <div className="App">
      <h1>Completiosn app - Open AI</h1>
      <p>{response}</p>
    </div>
  );
}

export default App;
