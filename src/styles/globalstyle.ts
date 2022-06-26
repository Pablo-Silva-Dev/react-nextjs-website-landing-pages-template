import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
      *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: ${(props) => props.theme.fonts.default};
    }
    
    html{
        font-family: monospace;
        scroll-behavior: smooth;
        background: ${(props) => props.theme.colors.element_base};
    }
    body{
        overflow-x: hidden;
        width: 100%;
        height: 100vh;
    }
    button{
        display: flex;
        justify-content: center;
        text-align: center;
        border: none;
        cursor: pointer;
        padding: 4px;
    }
    li, ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    
    .active-modal {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 320px;
        height: 240px;
        padding: 1rem;
        background: ${(props) => props.theme.colors.element_base};
        border-radius: 4px;
        margin: 25% auto;
        h3{
            font-size: 1.24rem;
            color: ${(props) => props.theme.colors.black100}
        }
        @media(max-width: 720px){
            width: 92%;
        }
  }

  .video-modal{
      background: transparent;
      @media (max-width: 720px) {
        margin: 12px auto;
        align-self: center;
     }
  }

  .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
  }

  .react-modal-overlay-video{
        background: rgba(0, 0, 0, .88);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        
  }

  .collapsible-info-parent{
    width: 100%;
    cursor: pointer;
  }

  .headerScrolling {
    position: fixed;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .headerNotScrolling {
    background-color: transparent;
  }

  .animatedTopScroll {
    right: 24px;
    transition: all 0.3s ease;
  }
  .normalTopScroll {
    right: -80px;
    transition: all 0.3s ease;
  }

  //REACT-RESPONSIVE-CARROUSEL-CUSTOM -DOTS
   .carousel .control-dots .dot {
      -webkit-transition: opacity 0.25s ease-in;
      -moz-transition: opacity 0.25s ease-in;
      -ms-transition: opacity 0.25s ease-in;
      -o-transition: opacity 0.25s ease-in;
      transition: opacity 0.25s ease-in;
      opacity: 0.3;
      filter: alpha(opacity=30);
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 0%;
      width: 16px;
      height: 2px;
      cursor: pointer;
      display: inline-block;
      margin: 0 8px; 
  } 

  //REACT-SLICK-CUSTOM -DOTS
.slick-dots li
 {
    position: relative;
    width: 12px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
  }
  
  .slick-dots li button
  {
    width: 12px;
    height: 12px;  
    display: flex;
    margin: 0 auto;
    border-radius: 100%;
    border: 0;
    outline: none;    
    background-color: ${({ theme }) => theme.colors.primary_light};
    cursor: pointer;
  }

.slick-dots li.slick-active button:before
{
  height: 12px;
  width: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 100%;
}

.slick-dots li button:before
{
  content: '';
}
`;
