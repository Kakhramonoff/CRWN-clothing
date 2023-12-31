import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 1440px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 40px;
  row-gap: 50px;
`