"use client";
import useClickOutSite from "@/hooks/useClickOutSite";
import {
  DarkMode,
  ExpandLess,
  ExpandMore,
  MenuOpen,
  ShoppingCart,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Image from "next/image";
import { cloneElement, useRef, useState } from "react";
import style from "./header.module.css";
import { PRODUCT_CATAGORIES } from "@/components/config";
import CustomLink from "@/components/ui/CustomLink";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement<{ elevation?: number }>;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

// Navber items
const Header = (props: Props) => {
  // Active index
  const [openItem, setOpenItem] = useState<null | string>();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // useEffect(() => {
  //   if (openItem) {
  //     document.body.setAttribute("style", "background: #7F7F7F");
  //   } else {
  //     document.body.setAttribute("style", "background: background.default");
  //   }
  // }, [openItem]);
  const navRef = useRef<HTMLDivElement | null>(null);
  useClickOutSite(navRef, () => setOpenItem(null));
  return (
    <>
      <CssBaseline />
      {/* Mobile phone */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, height: "100%", bgcolor: "background.default" }}
          role="presentation"
          // onClick={toggleDrawer(false)}
        >
          <Typography
            variant="h6"
            padding={2}
            sx={{
              borderBottom: "1px solid #A0A0A0",
            }}
          >
            SHOP LAB
          </Typography>
          <Box ref={navRef}>
            <List>
              {/* Main items */}
              {PRODUCT_CATAGORIES.map((text) => (
                <>
                  <ListItem key={text.value} disablePadding>
                    <ListItemButton
                      onClick={() =>
                        setOpenItem(text.value === openItem ? null : text.value)
                      }
                    >
                      <ListItemText
                        sx={{ color: "text.primary" }}
                        secondary={text.lable}
                      />
                      <ListItemIcon>
                        {openItem === text.value ? (
                          <ExpandLess sx={{ color: "text.primary" }} />
                        ) : (
                          <ExpandMore sx={{ color: "text.primary" }} />
                        )}
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                  {/* subItem */}
                  <ListItem>
                    {openItem === text.value && (
                      <List>
                        {text.feature.map((item, index) => (
                          <ListItem key={index} disablePadding>
                            <ListItemButton onClick={toggleDrawer(false)}>
                              <ListItemIcon>
                                {/* <ExpandMore /> */}
                                <Image
                                  width={20}
                                  height={20}
                                  src={item.img}
                                  alt={item.name}
                                />
                              </ListItemIcon>
                              <ListItemText secondary={item.name} />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </ListItem>
                </>
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            padding: { sm: "30px 20px", xs: "30px 20px" },
            marginBottom: "350px",
            bgcolor: "background.default",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box ref={navRef} display={"flex"} gap={6} alignItems={"center"}>
              {/* Left side logo */}
              <CustomLink
                sx={{
                  fontWeight: 500,
                  color: "text.primary",
                }}
                href="/"
              >
                SHOP LAB
              </CustomLink>
              {/* Middle nav links */}
              <Box display={{ xs: "none", md: "flex" }} gap={"20px"}>
                {PRODUCT_CATAGORIES.map((e) => (
                  <Box position={"relative"} key={e.value}>
                    <Button
                      onClick={() =>
                        setOpenItem(e.value === openItem ? null : e.value)
                      }
                      sx={{
                        color: "text.primary",
                        "&:hover": { color: "text.secondary" },
                      }}
                    >
                      {e.lable}{" "}
                      {e.value === openItem ? <ExpandLess /> : <ExpandMore />}
                    </Button>
                    {/* hover Item */}
                    <Box
                      position={"absolute"}
                      display={"flex"}
                      gap={5}
                      sx={{
                        width: "100%",
                      }}
                    >
                      {e.value === openItem && (
                        <Box
                          display={"flex"}
                          gap={5}
                          sx={{
                            bgcolor: "background.paper",
                            boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
                            padding: "20px",
                            borderRadius: "10px",
                            "&::before": {
                              content: "''",
                              position: "absolute",
                              width: 0,
                              height: 0,
                              borderTop: "25px solid transparent",
                              borderRight: "27px solid transparent",
                              borderBottom: "30px solid",
                              borderBottomColor: "background.paper",
                              margin: "-58px 0 0 0px",
                              borderLeft: "24px solid transparent",
                            },
                          }}
                        >
                          {e.feature.map((item, i) => (
                            <CustomLink
                              sx={{
                                color: "background.default",
                              }}
                              href={item.herf}
                              key={i}
                            >
                              <Image
                                aria-hidden="true"
                                src={item.img}
                                width={250}
                                height={250}
                                alt="e"
                                objectFit="contain"
                                className={style.hoverImg}
                              />
                              <Typography variant="body1">
                                {item.name}
                              </Typography>
                            </CustomLink>
                          ))}
                        </Box>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            {/* Right login and theme */}
            <Box display={"flex"} gap={{ md: "20px", xs: "10px" }}>
              {/* buy icon */}
              <Button
                sx={{
                  color: "text.primary",
                  "&:hover": { color: "text.secondary" },
                }}
              >
                <ShoppingCart />
              </Button>
              {/* mode */}
              <Button
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: "text.primary",
                  "&:hover": { color: "text.secondary" },
                }}
              >
                <DarkMode />
              </Button>
              {/* Login button */}
              <CustomLink
                sx={{
                  border: "1px solid",
                  BorderColor: "text.secondary",
                  color: "text.primary",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  display: { xs: "none", md: "flex" },
                }}
                href="/"
              >
                Login
              </CustomLink>
              {/* dropdown button */}
              <Button
                onClick={toggleDrawer(true)}
                sx={{
                  display: { md: "none", xs: "flex" },
                  color: "text.primary",
                  "&:hover": { color: "text.secondary" },
                }}
              >
                <MenuOpen />
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
};

export default Header;
