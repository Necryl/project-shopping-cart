import PropTypes from "prop-types";
import styled from "styled-components";

const NavItem = ({ children, href, isActive }) => {
  const StyledA = styled("a")`
    background-color: ${() => (isActive ? "red" : "blue")};
    padding: 0.5em 1em;
    border-radius: 0.5em;
    color: white;
    border-bottom: 2px solid transparent;
    &:hover {
      color: white;
      border-color: white;
    }
    &:active {
      border-color: transparent;
      background-color: white;
    }
  `;
  return <StyledA href={href}>{children}</StyledA>;
};

NavItem.propTypes = {
  isActive: PropTypes.bool,
  href: PropTypes.string,
  children: PropTypes.string,
};

export default NavItem;
