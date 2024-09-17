import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { WEIGHTS } from "../../constants";

const NavLink = ({ children, ...delegated }) => (
  <Wrapper {...delegated}>
    <LinkText>{children}</LinkText>
    <HoverLinkText>{children}</HoverLinkText>
  </Wrapper>
);

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  position: relative;
  display: block;
  /*
    text slide-up effect
  */
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;
  transition: transform 500ms;
  will-change: transform;
  transform: translateY(var(--translate-from));

  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transition: transform 200ms;
      transform: translateY(var(--translate-to));
    }
  }
`;

const LinkText = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;
`;
const HoverLinkText = styled(Text)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  font-weight: ${WEIGHTS.bold};

  --translate-from: 100%;
  --translate-to: 0%;
`;

export default NavLink;
