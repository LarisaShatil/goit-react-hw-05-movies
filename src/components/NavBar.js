import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { Box } from './Box';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

// when there are two classes on one component -   &.active

const NavItem = styled(NavLink)`
  padding:10px;
  display: flex;
  text-decoration: none;
  height: 100%;

  &.active{
    color: red;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
  }
`;

export const NavBar = () => {
  return (
    <div>
      <Box display='grid' gridTemplateColumns='200px 1fr'>
        {navItems.map(({ href, text }) => (
          <NavItem key={href} to={href}>
            {text}
          </NavItem>
        ))}
      </Box>
      <Outlet/>
    </div>
  )
};