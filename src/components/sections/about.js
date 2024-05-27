import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;
  padding: 0 52px;
  font-size: var(--fz-lg);
  padding-left: 7px;
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Solidity', 'JavaScript (ES6+)', 'TypeScript', 'ReactJS', 'NextJS', 'Angular', 'Hardhat', 'IPFS', 'Uniswap', 'Aave'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
            Hello there! I'm Aayush Giri, a seasoned developer with a deep passion for {' '} DeFi {' '} , Blockchain, 
            and Web3 technologies. My journey into blockchain development began in 2020, sparked by my curiosity 
            about the <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi33LG60NL_AhVsh1YBHdrxAWAQFnoECBgQAQ&url=https%3A%2F%2Fbitcoin.org%2Fbitcoin.pdf&usg=AOvVaw05-4mYD7EyyKjwcHh8i0Vw&opi=89978449">Bitcoin whitepaper</a>. This curiosity quickly turned into a profound interest, leading me to 
            explore the transformative potential of blockchain technology.
            </p>
            <p>
              Today, as a blockchain engineer, I'm at the forefront of this rapidly 
              evolving landscape, focusing on building accessible, inclusive Web3 products that have a meaningful real-world impact.
              I've been recognized for my work at various platforms, including <a href="https://ethglobal.com/">ETHGlobal</a> Tokyo, HackFS, 
              and ETHGlobal India.

              In addition to this, I've been actively contributing to open-source projects, pushing the boundaries of what's possible 
              in the blockchain space. My main focus these days is building accessible, inclusive Web3 products that have a meaningful 
              real-world impact.
            </p>

            <p>
              I also recently{' '}
              <a href="https://medium.com/@aayushgiri1234">
                launched a Blogging page
              </a>{' '}
              that serves as a comprehensive guide for building DApps with Solidity and other Web2 technologies.
              Welcome to my world of blockchain innovation!
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
