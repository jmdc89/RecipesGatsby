import { createGlobalStyle } from "styled-components"

const globalStyle = createGlobalStyle`
*,
::after,
::before {
  box-sizing: border-box;
}

:root {
  /* COLORS  */
  /* primary */
  --primary-0: #f0efff;
  --primary-50: #d8d6ff;
  --primary-100: #c1beff;
  --primary-200: #aaa5ff;
  --primary-300: #938dff;
  --primary-400: #7b74ff;
  /* main */
  --primary-500: #645cff;
  --primary-600: #554ed9;
  --primary-700: #4640b3;
  --primary-800: #37338c;
  --primary-900: #282566;
  --primary-1000: #191740;
  --primary-1100: #0a0919;
  /* grey */
  --grey-0: #fafbfc;
  --grey-50: #f2f4f8;
  --grey-100: #eaedf3;
  --grey-200: #e2e7ef;
  --grey-300: #dbe0ea;
  --grey-400: #d3dae6;
  --grey-500: #cbd3e1;
  --grey-600: #adb3bf;
  --grey-700: #8e949e;
  --grey-800: #70747c;
  --grey-900: #51545a;
  --grey-1000: #333538;
  --grey-1100: #141516;

  /* rest */
  --black: #222;
  --white: #fff;
  --red-light: #f8d7da;
  --red-dark: #842029;
  --green-light: #d1e7dd;
  --green-dark: #0f5132;
  /* box shadows */
  --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  /* typography */
  --defaultFontSize: 87.5%;
  --headingFont: "Inconsolata", monospace;
  --bodyFont: "Montserrat", sans-serif;
  --smallText: 0.8em;
  --extraSmallText: 0.7em;
  /* rest */
  --backgroundColor: var(--grey-0);
  --textColor: var(--grey-1000);
  --borderRadius: 0.25rem;
  --letterSpacing: 1px;
  --transition: 0.3s ease-in-out all;
  --max-width: 1120px;
  --fixed-width: 600px;
}
html {
  font-size: var(--defaultFontSize);
}
@media only screen and (min-width: 576px) {
  :root {
    --defaultFontSize: 100%;
  }
}
@media only screen and (min-width: 768px) {
  :root {
    --defaultFontSize: 112.5%;
  }
}

body {
  background: var(--backgroundColor);
  color: var(--textColor);
  font-family: var(--bodyFont);
  font-weight: 400;
  line-height: 1.75;
}

p {
  margin: 0;
  margin-bottom: 1rem;
  max-width: 40em;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  margin-bottom: 1.38rem;
  font-family: var(--headingFont);
  font-weight: 400;
  line-height: 1.3;
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
}

h1 {
  font-size: 3.052rem;
}

h2 {
  font-size: 2.441rem;
}

h3 {
  font-size: 1.953rem;
}

h4 {
  font-size: 1.563rem;
}

h5 {
  font-size: 1.25rem;
}

small,
.text-small {
  font-size: var(--smallText);
}

ul {
  padding: 0;
  list-style-type: none;
}
a {
  text-decoration: none;
}
.img {
  width: 100%;
  display: block;
  object-fit: cover;
}

/* .form {
  width: 100%;
  background: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  padding: 2rem 2.5rem;
} */

label {
  display: block;
  font-size: var(--smallText);
  margin-bottom: 0.5rem;
  text-transform: capitalize;
}

input,
textarea {
  width: 100%;
  padding: 0.375rem 0.75rem;
  border-radius: var(--borderRadius);
  background: var(--grey-0);
  border-color: transparent;
  border: 1px solid var(--grey-300);
}

/* .form-row {
  margin-bottom: 1rem;
} */

textarea {
  width: 100%;
  height: 7rem;
}

::placeholder {
  color: var(--grey-600);
}

/* .form-alert {
  color: var(--red-dark);
  font-size: var(--extraSmallText);
  letter-spacing: var(--letterSpacing);
  text-transform: capitalize;
} */

hr {
  border-top: var(--line);
}
`

export default globalStyle
