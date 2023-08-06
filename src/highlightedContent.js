

function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  const cleanPlainText = plainText.replace(/<br\s*\/?>/gi, " "); // Replace <br> tags with spaces
  const highlightedText = cleanPlainText.split("").map((char, index) => {
    const startPosition = plainTextPositions.find((position) => position.start === index);
    if (startPosition) {
      const wordToHighlight = cleanPlainText.substring(startPosition.start, startPosition.end);
      return `<mark>${wordToHighlight}</mark>`;
    }
    return char;
  }).join("");
  
  const regex = new RegExp(cleanPlainText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), "gi");
  const modifiedHtmlContent = htmlContent.replace(regex, () => highlightedText);
  
  return modifiedHtmlContent;
}

export default highlightHTMLContent;
