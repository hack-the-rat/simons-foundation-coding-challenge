# Problem 2: CSS Grid Layout
See the layouts below, which are, from left to right, for desktop (1280px wide and up), tablet (768-1279px), and mobile (<768px). The challenge is to produce markup and CSS that would generate this responsive layout without using any media queries. The "deliverable" for this challenge can be as simple as an HTML file with styling in the head, a CodePen or gist on Github, etc., though you can choose to use a preprocessor like Sass, PostCSS, Stylus, or Less and organize the files any way you'd like.

## For reference:
A series of articles by Rachel Andrew on CSS Grid: https://www.smashingmagazine.com/2020/01/understanding-css-grid-container/
Grid by Example: https://gridbyexample.com/learn/
CSS Tricks's Complete Guide to CSS Grid: https://css-tricks.com/snippets/css/complete-guide-grid/
MDN web docs on grid: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout

![Grid templates for the "desktop", "tablet", and "mobile" layouts](./grid-picture.png)

 ### Answer
 Admittedly, I had more difficulty with this problem than the other two.  The challenge said I should produce markup and CSS that would generate this responsive layout without using any media queries.  To accomplish this, I had to create three "divs" and put them under one parent "div" with the class "grid-container".  The three "divs" had the class of "desktop" with a minimum width of 1280px, "tablet" with a width between 768px and 1279px, and "mobile" with a maximum width of 768px.  Next, I set up the grid and the template areas and organized them for each "div" class.  I also created different background colors and border colors for each to better tell them apart.
