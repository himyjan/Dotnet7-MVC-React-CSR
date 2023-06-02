import { ReactNode } from "react";
import { Container } from "reactstrap";
import { NavMenu } from "./NavMenu";

export const Layout = ({
  children,
}: {
  children: ReactNode;
}) => {
    return (
      <div>
        <NavMenu />
        <Container tag="main">{children}</Container>
      </div>
    );
}
