import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 
  
*,
*:before,
*:after {
  box-sizing: border-box;
}

html,
body,
div,
span,
object,
iframe,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
code,
em,
img,
small,
strike,
strong,
sub,
sup,
tt,
b,
u,
i,
ol,
ul,
li,
fieldset,
form,
label,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
main,
canvas,
embed,
footer,
header,
nav,
section,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  text-size-adjust: none;
}

footer,
header,
nav,
section,
main {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input {
  -webkit-appearance: none;
  border-radius: 0;
}

button,
div,
input,
textarea {
  border: none;

  &:focus {
    outline: 0;
  }
}

  .App{
    
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    }
    
    .container{
      position:relative;
      width:1440px;
      // height: 2847px;
      display:flex;
      flex-direction:column;
      align-items:center;
  }
`;

export default GlobalStyles;
