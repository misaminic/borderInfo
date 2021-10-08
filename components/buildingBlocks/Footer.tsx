import styled from 'styled-components';
const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()} <span>BorderInfo</span>
      </h5>
      <h5>All rights reserved</h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  margin-top: auto;
  width: 100%;
  height: 4rem;
  padding: 2.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(/img/chalkboard.jpg);
  text-align: center;
  span {
    color: var(--secondary_color);
  }
  h5 {
    color: var(--secondary_color);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
