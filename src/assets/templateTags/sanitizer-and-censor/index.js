const badWordsList = ['bad', 'terrible', 'worst', 'idiot'];

// Real-life use case: An HTML builder that sanitizes user input (XSS protection)
// AND censors bad words, all before rendering it to the DOM.
function renderSafeHtml(strings, ...values) {
  const badWordsPattern = new RegExp(badWordsList.join('|'), 'gi');

  const safeValues = values.map((value) => {
    return String(value)
      .replace(badWordsPattern, '***')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  });

  return strings.reduce((result, str, index) => {
    return result + str + (safeValues[index] ?? '');
  }, '');
}

const userBio = "This site is terrible. <script>alert('Hacked!');</script> You are all idiots.";

const finalHTML = renderSafeHtml`<div><p>User Bio: ${userBio}</p></div>`;

console.log(finalHTML);
// Expected Output:
// <div>
//     <p>User Bio: This site is ***. &lt;script&gt;alert('Hacked!');&lt;/script&gt; You are all ***s.</p>
// </div>
