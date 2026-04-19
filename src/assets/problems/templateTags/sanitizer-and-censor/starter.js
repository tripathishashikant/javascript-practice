const badWordsList = ['bad', 'terrible', 'worst', 'idiot'];

// Starter: Sanitizer and Censor
// TODO: Escape < and > in dynamic values and censor bad words before rendering.
function renderSafeHtml(strings, ...values) {
  // Your code here
}

const userBio = "This site is terrible. <script>alert('Hacked!');</script> You are all idiots.";

const finalHTML = renderSafeHtml`<div><p>User Bio: ${userBio}</p></div>`;

console.log(finalHTML);
