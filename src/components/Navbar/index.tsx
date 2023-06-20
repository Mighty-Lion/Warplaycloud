import {NavbarList, NavbarListLink} from "@/components/Navbar/index.styles";

export function Navbar() {
  return (
    <NavbarList>
      <NavbarListLink to="/">Home</NavbarListLink>
      <NavbarListLink to="/Posts">Posts</NavbarListLink>
      <NavbarListLink to="/">3</NavbarListLink>
      <NavbarListLink to="/">4</NavbarListLink>
      <NavbarListLink to="/">5</NavbarListLink>
    </NavbarList>
  );
}
