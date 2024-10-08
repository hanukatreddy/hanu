import React from 'react';
import styled from 'styled-components';
import loadmore from 'assets/loadmore2.png';
import portfolio3 from 'assets/portfolio3.jpg';
import portfolio4 from 'assets/portfolio4.jpg';
import portfolio5 from 'assets/portfolio5.jpg';
import portfolio6 from 'assets/portfolio6.jpg';
import portfolio7 from 'assets/portfolio7.jpg';
import portfolio8 from 'assets/portfolio8.jpg';
import portfolio9 from 'assets/portfolio9.jpg';
import portfolio10 from 'assets/portfolio10.jpg';

function Portfolio() {
  return (
    <Section id='portfolio'>
      <div className="grid">
        <div className="child-one grid-box"></div>
        <div className="child-two grid-box"></div>
        <div className="child-three grid-box"></div>
        <div className="child-four grid-box"></div>
        <div className="child-five grid-box"></div>
        <div className="child-six grid-box"></div>
        <div className="child-seven grid-box"></div>
        <div className="child-eight grid-box"></div>
      </div>
      <div className="portfolio-more">
        <span>Load More</span>
        <img src={loadmore} alt="Load More" />
      </div>
    </Section>
  )
}

const Section=styled.section`
min-height:100vh;
padding-bottom:2rem;
background-color:var(--secondary-color);
.grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  grid-template-areas:
  "one one two two"
  "one one three four"
  "five six seven seven"
  "eight six seven seven"; 
  .grid-box{
    height:15rem;
    width:100%;
    cursor:pointer;

    &:nth-of-type(1){
      grid-area: one;
      background: url(${portfolio9}) no-repeat right center;
      background-size:cover;
      height:100%;
      z-index:5;
    }

    &:nth-of-type(2){
      grid-area: two;
      background: url(${portfolio4}) no-repeat center center;
      background-size:cover;
      z-index:10;
    }
    &:nth-of-type(3){
      grid-area: three;
      background: url(${portfolio5}) no-repeat right  center;
      background-size:cover;
      height:100%;
      z-index:10;
    }
    &:nth-of-type(4){
      grid-area: four;
      background: url(${portfolio6}) no-repeat center center;
      background-size:cover;
      
    }
    &:nth-of-type(5){
      grid-area: five;
      background: url(${portfolio7}) no-repeat center center;
      background-size:cover;
      z-index:10;
    }
    &:nth-of-type(6){
      grid-area: six;
      background: url(${portfolio8}) no-repeat center center;
      background-size:cover;
      height:100%;
    }
    &:nth-of-type(7){
      grid-area: seven;
      background: url(${portfolio9}) no-repeat right center;
      background-size:cover;
      height:100%;
     
    }
    &:nth-of-type(8){
      grid-area: eight;
      background: url(${portfolio10}) no-repeat right center;
      background-size:cover;
    
     
    }
  }
}
.portfolio-more{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:1rem;
  img{
    width:4rem;
    height:4rem;
    border-radius:50%;
    border:10px groove var(--secondary-color)
  }
  span{
    color:#fff;
    letter-spacing:0.1rem;
    text-transform:uppercase;
  }
}
@media screen and (min-width:280px) and (max-width:1080px){
  .grid{
    padding:0;
    grid-template-columns:1fr;
    grid-template-areas:
    "one"
    "two"
    "three"
    "four"
    "five"
    "six"
    "seven"
    "eight"
    "grid-box"
      height:25rem !important;
  }
}
`;

export default Portfolio
