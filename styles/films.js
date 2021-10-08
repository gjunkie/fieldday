import styled from 'styled-components';

export const Main = styled.main`
  line-height: 0;
   
  -webkit-column-count: 3;
  -webkit-column-gap:   0px;
  -moz-column-count:    3;
  -moz-column-gap:      0px;
  column-count:         3;
  column-gap:           0px;
  padding-top:           103px;

  @media (max-width: 800px) {
    -webkit-column-count: 2;
    -moz-column-count:    2;
    column-count:         2;
  }
`;

export const Image = styled.img`
  width: 100% !important;
  height: auto !important;
`;
