import PropTypes from "prop-types";
import styled from "styled-components";

const StyledA = styled("a")`
  background-color: ${(props) => (props.$isActive ? "red" : "blue")};
  padding: 0.5em 1em;
  border-radius: 0.5em;
  color: white;
  border-bottom: 2px solid
    ${(props) => (props.$isActive ? "white" : "transparent")};
  user-select: none;
  transition: 100ms;
  &:hover {
    color: white;
    border-color: white;
  }
  &:active {
    border-color: transparent;
    background-color: white;
  }
`;
const NavItem = ({ children, isActive }) => {
  return <StyledA $isActive={isActive}>{children}</StyledA>;
};

NavItem.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.array,
};

export default NavItem;
