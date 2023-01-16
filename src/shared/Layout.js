import styled from "styled-components";

const LayoutStyles = styled.div`
  max-width: 1536px;
  /* max-width: 1920px; */
  /* max-height: 864px; */
  width: 100%;
  display: flex;
  align-items: center;
  color: black;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

function Layout({ children }) {
  return (
    <div>
      <LayoutStyles>{children} </LayoutStyles>
    </div>
  );
}

export default Layout;
