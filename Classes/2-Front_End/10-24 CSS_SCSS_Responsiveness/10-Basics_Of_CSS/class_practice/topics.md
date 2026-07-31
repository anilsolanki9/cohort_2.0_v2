# Day 10 Basics of CSS

1. What is CSS, why we use it, How it is used ?
2. Types of CSS (Inline, Internal, External)
3. CSS Selection, Property, Key-value pair
4. CSS Selectors (Element, ID, Class, Decendent, Ancestor, Universal)
5. Linking CSS To HTML (`<link rel="stylesheet" href="./style.css">`)
6. CSS Boilerplate

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}
```

7. CSS Properties

```css
width: 100%;
height: 100vh;
color: green;
background-color: navajowhite;
font-size: larger;
font-family: Arial, Helvetica, sans-serif;
font-weight: 900;
font-style: italic;
text-align: center;
text-transform: capitalize;
```

8. Downloading fonts from any website (Inspect -> Network tab, download from web), and using it in Webpage using (@font-face)

```css
@font-face {
  font-family: love;
  src: url(./Rockybilly.ttf);
}
```

9. Div and its use cases (Contain elements, create rectangular shapes)
