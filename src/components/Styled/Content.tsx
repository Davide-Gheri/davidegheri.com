import styled from 'styled-components';

export const Content = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 70px 100px 0;
  min-height: 230px;
  font-family: Georgia, serif;
  font-size: 1.5rem;
  line-height: 1.6em;
  background: #fff;
  caret-color: transparent;
  @media (max-width: 1170px) {
    padding: 5vw 7vw 0;
  }
  @media (max-width: 800px) {
    font-size: 1.2rem;
  }
  :before {
    content: '';
    position: absolute;
    top: 15px;
    left: -5px;
    z-index: -1;
    display: block;
    width: 20px;
    height: 200px;
    background: rgba(39, 44, 49, 0.15);
    filter: blur(5px);
    transform: rotate(-5deg);
  }
  :after {
    content: '';
    position: absolute;
    top: 15px;
    right: -5px;
    z-index: -1;
    display: block;
    width: 20px;
    height: 200px;
    background: rgba(39, 44, 49, 0.15);
    filter: blur(5px);
    transform: rotate(5deg);
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  dl,
  pre,
  blockquote,
  .post-full-comments,
  .footnotes {
    min-width: 100%;
  }
  li {
    word-break: break-word;
  }
  li p {
    margin: 0;
  }
  a {
    color: #000;
    word-break: break-word;
    box-shadow: #3eb0ef 0 -1px 0 inset;
  }
  a:hover {
    color: #3eb0ef;
    text-decoration: none;
  }
  strong,
  em {
    /* color: color(var(--darkgrey) l(-5%)); */
    color: #15171A;
  }
  small {
    display: inline-block;
    line-height: 1.6em;
  }
  li:first-child {
    margin-top: 0;
  }
  img,
  video {
    display: block;
    margin: 1.5em auto;
    max-width: 1040px;
    height: auto;
  }
  @media (max-width: 1040px) {
    img,
    video {
      width: 100%;
    }
  }
  img[src$='#full'] {
    max-width: none;
    width: 100vw;
  }
  img + br + small {
    display: block;
    margin-top: -3em;
    margin-bottom: 1.5em;
    text-align: center;
  }
  /* Override third party iframe styles */
  iframe {
    margin: 0 auto !important;
  }
  blockquote {
    margin: 0 0 1.5em;
    padding: 0 1.5em;
    border-left: #3eb0ef 3px solid;
  }
  blockquote p {
    margin: 0 0 1em 0;
    color: inherit;
    font-size: inherit;
    line-height: inherit;
    font-style: italic;
  }
  blockquote p:last-child {
    margin-bottom: 0;
  }
  code {
    padding: 0 5px 2px;
    font-size: 0.8em;
    line-height: 1em;
    font-weight: 400 !important;
    background: #e5eff5;
    border-radius: 3px;
  }
  p code {
    word-break: break-all;
  }
  pre {
    overflow-x: auto;
    margin: 1.5em 0 3em;
    padding: 20px;
    max-width: 100%;
    /* border: color(var(--darkgrey) l(-10%)) 1px solid; */
    border: #15171A 1px solid;
    color: #e5eff5;
    font-size: 1.4rem;
    line-height: 1.5em;
    /* background: color(var(--darkgrey) l(-3%)); */
    background: #15171A;
    border-radius: 5px;
  }
  pre code {
    padding: 0;
    font-size: inherit;
    line-height: inherit;
    background: transparent;
  }
  pre code :not(span) {
    color: inherit;
  }
  /* .fluid-width-video-wrapper { */
  .gatsby-resp-iframe-wrapper {
    margin: 1.5em 0 3em;
  }
  hr {
    margin: 4vw 0;
  }
  hr:after {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    display: block;
    margin-left: -10px;
    width: 1px;
    height: 30px;
    /* background: color(var(--lightgrey) l(+10%)); */
    background: #c5d2d9;
    box-shadow: #fff 0 0 0 5px;
    transform: rotate(45deg);
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #15171A;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }
  h1 {
    margin: 0.5em 0 0.2em 0;
    font-size: 4.6rem;
    font-weight: 700;
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 2rem;
    }
  }
  h2 {
    margin: 0.5em 0 0.2em 0;
    font-size: 3.6rem;
    font-weight: 700;
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 2rem;
    }
  }
  h3 {
    margin: 0.5em 0 0.2em 0;
    font-size: 2.8rem;
    font-weight: 700;
  }
  @media (max-width: 500px) {
    h3 {
      font-size: 2rem;
    }
  }
  h4 {
    margin: 0.5em 0 0.2em 0;
    font-size: 2.8rem;
    font-weight: 700;
  }
  @media (max-width: 500px) {
    h4 {
      font-size: 2rem;
    }
  }
  h5 {
    display: block;
    margin: 0.5em 0;
    padding: 1em 0 1.5em;
    border: 0;
    color: #3eb0ef;
    font-family: Georgia, serif;
    font-size: 3.2rem;
    line-height: 1.35em;
    text-align: center;
  }
  @media (min-width: 1180px) {
    h5 {
      max-width: 1060px;
    }
  }
  @media (max-width: 500px) {
    h5 {
      padding: 0 0 0.5em;
      font-size: 2rem;
    }
  }
  h6 {
    margin: 0.5em 0 0.2em 0;
    font-size: 2.3rem;
    font-weight: 700;
  }
  @media (max-width: 500px) {
    h6 {
      font-size: 2rem;
    }
  }
  /* Tables */
  table {
    display: inline-block;
    overflow-x: auto;
    margin: 0.5em 0 2.5em;
    max-width: 100%;
    width: auto;
    border-spacing: 0;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
    white-space: nowrap;
    vertical-align: top;
  }
  table {
    -webkit-overflow-scrolling: touch;
    background: radial-gradient(ellipse at left, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 0
        center,
      radial-gradient(ellipse at right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 100% center;
    background-attachment: scroll, scroll;
    background-size: 10px 100%, 10px 100%;
    background-repeat: no-repeat;
  }
  table td:first-child {
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 20px 100%;
    background-repeat: no-repeat;
  }
  table td:last-child {
    background-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-position: 100% 0;
    background-size: 20px 100%;
    background-repeat: no-repeat;
  }
  table th {
    color: #15171A;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.2px;
    text-align: left;
    text-transform: uppercase;
    /* background-color: color(var(--whitegrey) l(+4%)); */
    background-color: #e5eff5;
  }
  table th,
  table td {
    padding: 6px 12px;
    /* border: color(var(--whitegrey) l(-1%) s(-5%)) 1px solid; */
    border: #e5eff5 1px solid;
  }
  @media (max-width: 500px) {
    padding: 0;
    :before {
      display: none;
    }
    :after {
      display: none;
    }
  }
`;
