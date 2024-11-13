import Link from "next/link";

import { Link as MLink } from "@mui/material";
import { ReactNode } from "react";

function CustomLink({
  children,
  href,
  sx,
}: {
  children: ReactNode;
  href: string;
  sx?: object;
}) {
  return (
    <MLink
      component={Link}
      href={href}
      sx={{ color: "#000", textDecoration: "none", fontSize: "20px", ...sx }}
    >
      {children}
    </MLink>
  );
}

export default CustomLink;
