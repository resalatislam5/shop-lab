import { Box } from "@mui/material";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  sx,
}: {
  children: ReactNode;
  sx?: object;
}) => {
  return (
    <Box
      maxWidth={"1536px"}
      mx={"auto"}
      paddingX={{ sm: "40px", xs: "20px" }}
      sx={{ ...sx }}
    >
      {children}
    </Box>
  );
};

export default MaxWidthWrapper;
