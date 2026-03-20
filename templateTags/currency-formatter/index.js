/*
 * Problem: HTML Sanitizer and Censor (XSS Protection)
 * 
 * Create a tagged template function named `renderSafeHtml` that safely builds HTML strings.
 * The tag should:
 * 1. Escape any HTML characters (<, >) in the dynamic user input to prevent XSS attacks.
 * 2. Censor any bad words from the dynamic user input using the provided `badWordsList`.
 * 3. Leave the static strings (the developer-authored HTML) completely untouched.
 */

const badWordsList = ['bad', 'terrible', 'worst', 'idiot'];

// Real-life use case: An HTML builder that sanitizes user input (XSS protection) 
// AND censors bad words, all before rendering it to the DOM.
function renderSafeHtml(strings, ...values) {
    // Your code here
}

// Simulated API response (a malicious troll)
const userBio = "This site is terrible. <script>alert('Hacked!');</script> You are all idiots.";

// We trust our hardcoded HTML structure, but we DO NOT trust the user variable.
const finalHTML = renderSafeHtml`<div>
    <p>User Bio: ${userBio}</p>
</div>`;

console.log(finalHTML);
// Expected Output: 
// <div>
//     <p>User Bio: This site is ***. &lt;script&gt;alert('Hacked!');&lt;/script&gt; You are all ***s.</p>
// </div>