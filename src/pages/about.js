import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About Me</h1>
    <p>
      I am a computer science graduate currently diving into web development. I have recently 
      worked with React, Redux, Node.js, Express, MongoDB, GraphQL, and Jest. I love learning
      new things, especially science and tech related.
    </p>

    <br/>

    <h4>How I got into computers</h4>
    <p>
      I became fascinated by computers at a young age. Like many kids, I started by playing
      video games. Two video games in particular, Starcraft and Warcraft, had the greatest 
      effect on me. Both are real-time strategy games that allowed people to create their 
      own custom map with custom objectives. I spent countless hours playing custom maps
      that ranged from having simple objectives to more complicated ones.
    </p>

    <p>
      It was through playing these games that I learned about {' '}
      <a href="https://en.wikipedia.org/wiki/Modding"
        target="_blank" rel="noopener noreferrer"
      >
        modding
      </a> and how {' '}
      <a href="https://en.wikipedia.org/wiki/Mod_(video_games)"
        target="_blank" rel="noopener noreferrer"
      >
        video games can be modded
      </a>. I also learned that people can cheat in the game by {' '}
      <a href="https://en.wikipedia.org/wiki/Cheating_in_online_games"
        target="_blank" rel="noopener noreferrer"
      >
        hacking
      </a> and that the internet allowed people to play together from anywhere in the world.
      And despite learning about all of this I had no idea how any of it worked.
    </p>
    <p>
      My fascination for computers gave rise to my curiosity for them and more. I wanted to
      learn how scraps of metal with electricity flowing through them created pixelated worlds
      of imagination. And from there how electricity and metal worked. At some point I
      became more interested in how the physical world works than computers.
    </p>
    <p>
      No matter what I became interested in though, it became clear that being able to use a
      computer and knowing how to program was vital. Computers are pushing the modern world
      into the future. Various fields of study and entire industries are being or can be 
      revolutionized through computers.
    </p>

  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`