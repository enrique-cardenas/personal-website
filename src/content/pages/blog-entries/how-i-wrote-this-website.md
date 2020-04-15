---
title: "Building a personal website with Gatsby and styling with Emotion"
date: "2020-04-14"
---

My previous [personal website](https://enriquecardenas.netlify.com/) was made using just HTML, CSS, and the Bootsrap library. And while I learned a lot, I dreaded updating it. When I began to learn React I instantly loved how it split up views into components. This made it easier to replicate and edit parts.

After learning more about React I wanted to see what people have made with it and eventually found [Gatsby](https://www.gatsbyjs.org/), a static site generator. Some have even called it create-react-app on steroids. At its core, Gatsby loads only the critical HTML, CSS, and JavaScript which in turn makes sites load very fast (more on that [here](https://www.gatsbyjs.org/blog/2017-09-13-why-is-gatsby-so-fast/)).

I went through the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/) and ended up with a site similar to this. From there I simply added a header, footer, and edited the CSS. The tutorial uses the [Emotion](https://emotion.sh/docs/introduction) library to write CSS styles with Javascript. I've heard of CSS in JS before and wanted to learn more about it. After spending some time learning about how the Emotion library works I managed to create a responsive navbar, which you can see in the top right corner if you shrink the screen.

What I really like about Gatsby is that I'm able to [programmatically create pages from data](https://www.gatsbyjs.org/tutorial/part-seven/). This allows me to make multiple blog pages simply by writing into an md file and creating a page template component. In my old website, for each blog post I would have had to create a new HTML file, make sure it had the header and footer elements, and then have a link in the home page to the blog page and vice versa.