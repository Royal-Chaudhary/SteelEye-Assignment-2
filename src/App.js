import React, { useState } from "react";
import highlightHTMLContent from "./highlightedContent"; // Import the function from the highlightedContent.js file
import "./App.css"

function App() {
  const [htmlContent, setHtmlContent] = useState(""); // State to store HTML content
  const [plainText, setPlainText] = useState(""); // State to store plain text
  const [plainTextPositions, setPlainTextPositions] = useState([]); // State to store plain text positions

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the highlightHTMLContent function and set the modified HTML content in state
    const modifiedHtmlContent = highlightHTMLContent(htmlContent, plainText, plainTextPositions);
    setHtmlContent(modifiedHtmlContent);
  };

  return (
    <div>
      <h1>Highlight HTML Content</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>HTML Content:</label>
          <textarea
            value={htmlContent}
            onChange={(e) => setHtmlContent(e.target.value)}
            rows={10}
            cols={80}
          />
        </div>
        <div>
          <label>Plain Text:</label>
          <textarea
            value={plainText}
            onChange={(e) => setPlainText(e.target.value)}
            rows={5}
            cols={80}
          />
        </div>
        <div>
          <label>Plain Text Positions (JSON array):</label>
          <textarea
            value={JSON.stringify(plainTextPositions, null, 2)}
            onChange={(e) => setPlainTextPositions(JSON.parse(e.target.value))}
            rows={5}
            cols={80}
          />
        </div>
        <button type="submit">Highlight Content</button>
      </form>
      <div>
        <h2>Highlighted Content:</h2>
        {/* Render the modified HTML content */}
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
  );
}

export default App;
