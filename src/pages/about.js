import React from "react"
import Layout from "../components/Layout/layout"
import SkillIcon from "../components/SkillIcon"
import { css } from "@emotion/core"

import { FaHtml5, FaCss3, FaJs, FaReact, FaGitAlt, FaCogs, FaNode } from "react-icons/fa";
import { SiPostgresql, SiGraphql, SiGatsby } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import ResponsiveDesign from "../assets/icons/tablet-phone-and-browser.svg"



export default () => (
  <Layout>
    {console.log('responsive design', ResponsiveDesign)}
    <h1>About Me</h1>
    <p>
      I am a software engineer focusing on full stack development located in the Bay Area.
      I completed my B.S. in Computer Science with a minor in Math from San Jose State University.
    </p>

    <p>
      I am an active volunteer at Code For San Francisco and am currently working on a Bay Area Relief Portal with the aim of helping small businesses and non-profits find
      financial support.
    </p>
    <br />
    <h2>Skills</h2>
    <div css={css`display: flex; flex-wrap: wrap; justify-content: space-evenly;`}>
      <SkillIcon icon={FaHtml5} name="HTML5"/>
      <SkillIcon icon={FaCss3} name="CSS3" />
      <SkillIcon src={ResponsiveDesign} alt="Responsive Design" name="Responsive Design"/>
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