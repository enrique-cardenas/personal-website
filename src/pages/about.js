import React, { useEffect, useRef } from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout/layout"
import SkillIcon from "../components/SkillIcon"
import { Link } from "gatsby"

import { css } from "@emotion/core"

import { FaHtml5, FaCss3, FaJs, FaReact, FaGitAlt, FaCogs, FaNode } from "react-icons/fa";
import { SiPostgresql, SiGraphql, SiGatsby } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import ResponsiveDesign from "../assets/icons/tablet-phone-and-browser.svg"



export default ({location}) => {
  const commentRef = useRef();
  useEffect( () => {
    commentRef.current.innerHTML = `<!-- This icon by Freepik from "https://www.flaticon.com/" --> ${commentRef.current.innerHTML}`;
  }, [] );

  return (
    <Layout>
      <SEO/>
      <h1>About Me</h1>
      <p>
        I am a software engineer focusing on full stack development located in the Bay Area.
        I completed my B.S. in Computer Science with a minor in Math from San Jose State University.
      </p>
      <p>
        I am currently volunteering in Code For San Francisco and helping create a {' '}
        <Link to="/projects/bay-area-relief-portal/">web portal</Link> with the aim of helping small
        businesses and non-profits, in the San Francisco Bay Area, find financial support.
      </p>
      <br />
      <h2>Skills & Tools</h2>
      <p>I have working familiarity with the following technologies.</p>
      <div css={css`display: flex; flex-wrap: wrap; justify-content: space-evenly;`}>
        <SkillIcon icon={FaHtml5} name="HTML5"/>
        <SkillIcon icon={FaCss3} name="CSS3" />
        <SkillIcon src={ResponsiveDesign} 
          alt="Responsive Design" 
          name="Responsive Design" 
          ref={commentRef}
        />
        <SkillIcon icon={FaJs} name="JavaScript" />
        <SkillIcon icon={FaReact} name="React" />
        <SkillIcon icon={FaGitAlt} name="Git" />
      </div>
      <div css={css`display: flex; flex-wrap: wrap; justify-content: space-evenly;`}>
        <SkillIcon icon={FaCogs} name="RESTful APIs" />
        <SkillIcon icon={FaNode} name="Node" />
        <SkillIcon icon={GrMysql} name="MySQL" />
        <SkillIcon icon={SiPostgresql} name="Postgres" />
        <SkillIcon icon={SiGraphql} name="GraphQL" />
        <SkillIcon icon={SiGatsby} name="Gatsby" />
      </div>

    </Layout>
  )
}