import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";
import styled from "styled-components";
import Cover from "../../static/About-Cover.jpg"
import Link from "../components/GatsbyLink/GatsbyLink";
import DocuSVG from "../../static/SVG/docu.svg"

const Row = styled.section`
padding: var(--var-padding-l) 0;
background: white; 

&:first-child {
  padding-bottom: 0;
}
`

const BoxContent = styled.div`
max-width: 60vw;
padding: 0 2rem;
margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    max-width: 70vw;
    padding: 0 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    max-width: 90vw;
    padding: 0 1rem;
}
`

const RowHero = styled(Row)`
background: var(--color-white-700);
`

const PhotoFrame = styled.figure`
grid-area: Photo;
width: 100%;
margin: 0;
padding: 2rem 0;
`

const WrapperIntro = styled.div`
display: grid;
grid-template-columns: repeat(8, 1fr);
margin-top: -100px;
padding-bottom: 100px;

@media only screen and (max-width: 768px) {
  margin-top: 0;
  display: block;
}
`

const WrapperNav = styled.div`
> * {
  display: inline-block;
  margin-right: 2rem;
}
`


const GridBio = styled.div`
display: grid;
grid-template-columns: auto [P2] minmax(auto,45ch) ;

`

const GridSkill = styled.div`
display: grid;
grid-template-columns: minmax(auto, 3fr) minmax(auto,7fr);
grid-gap: var(--var-padding-m);
width: 100%;
margin: var(--var-padding-m) 0;
`

const Intro = styled.div`
grid-column: span 5 / 8;
background: var(--color-background-500);
padding: 2rem;
@media only screen and (max-width: 768px) {
  padding: 0;
  background: none;
}
`

const P1 = styled.div`
grid-area: P1;
max-width: 60ch;
`
const P2 = styled.div`
grid-area: P2;
`

const DesignPart = styled.div``
const DesignContent = styled.div`

`
const DesignContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
small {
  font-family: var(--primary-font);
  font-size: 1rem;
  line-height: 32px;
  color: var(--color-secondary-500);
  font-weight: 600;
  display: block;
  margin-bottom: var(--var-padding-m);
}
`

const GridProject = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 1rem;
`


const PassionPart = styled.div``
const PassionContent = styled.div``

const ProjectWrapper = styled.div`
background: var(--color-white-700);
align-content: space-between;
padding: 2rem;
display: flex;
flex-flow: column;
`

const ProjectContent = styled.div``

const ProjectBottom = styled.div`
display: flex;
align-items: baseline;
justify-content: space-between;
justify-self: flex-end;
`

const ProjectIcon = styled.div`
margin-bottom: 2rem;
`

const ProjectTitle = styled.h3``

const ProjectBlurb = styled.p``

const ProjectYear = styled.small`
margin-bottom: 0;`

const ProjectLink = styled(Link)``

const ProjectBox = props => (
  <ProjectWrapper>
    <ProjectIcon><img src={props.img} width="50px"/></ProjectIcon>
    <ProjectContent>
      <ProjectTitle>{props.title}</ProjectTitle>
      <ProjectBlurb>{props.blurb}</ProjectBlurb>
    </ProjectContent>
    <ProjectBottom>
      <ProjectYear>{props.year}</ProjectYear>
      <ProjectLink to={props.url}>↗</ProjectLink>
    </ProjectBottom>
  </ProjectWrapper>

)
class AboutPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
        <title>{`About | ${config.siteTitle}`}</title>
        </Helmet>
        <Layout>
          <RowHero className="full-bleed">
            <BoxContent>
              <small>Little things about myself</small>
              <h1>About <span class="brand">Me</span></h1>
              <PhotoFrame><img src={Cover} width="100%" alt="About Cover Photo"/></PhotoFrame>
              <WrapperIntro>
                <Intro>
                  <small>Welcome!</small>
                  <p>I am constantly learning and treasure every opportunity to design better. I’m learning to code right now and this website is my first attempt. <br/> <br/> I’m hoping to express my creativity in this site though design, code and writing. </p>
                  <WrapperNav>
                  <small className="textlink">01. Bio </small>
                  <small className="textlink">02. Skills </small>
                  <small className="textlink">03. Projects </small>
                  </WrapperNav>
                </Intro>
              </WrapperIntro>
            </BoxContent>
          </RowHero>
          <Row>
            
            <P1>
            <small>01. Bio</small>
            <h2>Journey to Design</h2>
            <p >I studied cultural and film theories at The University of Hong Kong. But it wasn’t until I took a year-long leave and worked in iTunes & App Store, Apple as Cross-Content Intern during college, during which it sparked my interest in digital products and web.</p></P1>
            <PhotoFrame><img src={Cover} width="100%" alt="About Cover Photo"/></PhotoFrame>
            <GridBio>
            <P2><p>After my internship, I took freelance projects as well as volunteered for students and community organisations, 
acquring various skillsets to be a hybrid designer.
<br/><br/>
I started my agency Playa with my partner in 2015, hoping to help small business, entrepreneurs and non-profits launching their projects, bridging the gap between project owners and end-users. We have launched dozen websites and apps in Hong Kong with multiple recognitions. 
<br/><br/>
Currently, I lead design at Hyperair as Principal Designer. Reinventing all-round travel experience.

</p></P2>
            </GridBio>
          </Row>
          <RowHero className="full-bleed">
            <BoxContent>
              <small>02. Skill</small>
              <h1>Design, Photography, Writing.</h1>
              <GridSkill>
                <DesignPart><h3>Design</h3></DesignPart>
                <DesignContent><p>Throughout the years, I always like design.</p><DesignContentGrid><small>Web & App UI Design</small><small>User Experience Design</small><small>Interaction Design</small><small>Prototyping</small><small>Wireframing</small><small>Frontend Development</small></DesignContentGrid></DesignContent>
              </GridSkill>
              <GridSkill>
                <PassionPart><h3>Passion</h3></PassionPart><PassionContent><p>I have also gained wide range of skill set. </p><DesignContentGrid><small>Photography</small><small>Videography</small><small>Social Media</small><small>Copywriting</small></DesignContentGrid></PassionContent>
              </GridSkill>
            </BoxContent>
          </RowHero>
          <Row>
            <small>03. Projects</small>
            <h2>Your Support</h2>
            <GridProject>
              <ProjectBox img={DocuSVG} title="Road Not Taken" blurb="A documentary I directed with multiple Asian film festival selected." year="2016" url="https://vimeo.com/ondemand/roadnottaken"/>
              <ProjectBox img={DocuSVG} title="Pins" blurb="A curated design resources site built by Gatsby JS." year="2018" url="https://pin.desktopofsamuel.com"/>
              <ProjectBox img={DocuSVG} title="Water For Free" blurb="An crowdsourcing initiative that everyone can support." year="2017" url="https://vimeo.com/ondemand/roadnottaken"/>
              
            </GridProject>
          </Row>
        </Layout>
      </div>
    );
  }
}

export default AboutPage;
