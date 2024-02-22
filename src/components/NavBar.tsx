import * as React from "react";
import { Box, IconButton } from "@mui/material";
import piwologo from "/piwologo.png";
import piwociudadvieja from "/piwociudadvieja.png";
import piwovilladolores from "/piwovilladolores.png";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "react-slideshow-image/dist/styles.css";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import "leaflet/dist/leaflet.css";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "react-slideshow-image/dist/styles.css";

const pathSegments = window.location.pathname.split("/");

// Seleccionar los segmentos deseados
let desiredPathSegment = "";
let desiredLanguage = "";

if (pathSegments.length >= 3) {
  desiredLanguage = pathSegments[2];
  desiredPathSegment = "/" + pathSegments[1];
} else if (pathSegments.length >= 2) {
  desiredLanguage = pathSegments[1];
}

// Si no hay segmentos o si el idioma no se establece, establecer español como valor predeterminado
if (!desiredLanguage) {
  desiredLanguage = "uy";
}

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function NavBar(props: Props) {
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 200,
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor",
      },
    },
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  }));

  const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  }));

  const points = [
    {
      latitude: -34.900648821436256,
      longitude: -56.14527830948932,
      name: "Piwo Villa Dolores",
      image: piwovilladolores,
    },
    {
      latitude: -34.90828748640591,
      longitude: -56.208099671234436,
      name: "Piwo Ciudad Vieja",
      image: piwociudadvieja,
    },
  ];

  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        // "&:active": {
        //   backgroundColor: alpha(
        //     theme.palette.primary.main,
        //     theme.palette.action.selectedOpacity
        //   ),
        // },
      },
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getMessage = () => {
    if (desiredLanguage === "en") {
      return "MORE THAN ICE CREAM - 🇺🇸";
    } else if (desiredLanguage === "br") {
      return "MAIS QUE GELADO - 🇧🇷";
    } else {
      return "MÁS QUE HELADOS - 🇺🇾";
    }
  };

  return (
    <HideOnScroll {...props}>
      <AppBar style={{ backgroundColor: "#2e2e2e" }}>
        {/* <Toolbar> */}
        <Box
          sx={{
            alignItems: "center",
            justifyContent: { xs: "space-evenly", md: "space-evenly" },
            display: "flex",
          }}
        >
          {/* <h1>CAFE</h1> */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <img src={piwologo} width={"80px"} loading="lazy" />
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 30,
              }}
            ></p>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {" "}
            <a href="https://www.facebook.com/piwohelados" target="_ black">
              <FacebookIcon
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: 20, sm: 40 },
                  marginRight: 5,
                }}
              />
            </a>
            <a href="https://www.instagram.com/piwohelados" target="_ black">
              <InstagramIcon
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: 20, sm: 40 },
                  marginRight: 5,
                }}
              />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=59896728179&type=phone_number&app_absent=0"
              target="_ black"
            >
              <WhatsAppIcon
                sx={{ color: "#ffffff", fontSize: { xs: 20, sm: 40 } }}
              />
            </a>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              margin: 0,
            }}
          >
            <img src={piwologo} width={"150px"} loading="lazy" />
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <div>
              <IconButton
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                // variant="contained"
                // disableElevation
                onClick={handleClick}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: 30,
                    color: "#ffffff",
                  }}
                >
                  {getMessage()}
                </p>
                <KeyboardArrowDownIcon sx={{ color: "#ffffff" }} />
              </IconButton>
            </div>
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <div>
              <IconButton
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                // variant="contained"
                // disableElevation
                onClick={handleClick}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: 30,
                    color: "#ffffff",
                  }}
                >
                  {getMessage()}
                </p>
                <KeyboardArrowDownIcon sx={{ color: "#ffffff" }} />
              </IconButton>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{ margin: 0 }}
              >
                <MenuItem
                  onClick={handleClose}
                  disableRipple
                  sx={{ height: 60 }}
                >
                  <a
                    href={
                      import.meta.env.VITE_FRONTEND_URL +
                      desiredPathSegment +
                      "/uy"
                    }
                    //   target="_ black"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        //   color: "#ffffff",
                        fontSize: { xs: 20, sm: 40 },
                        marginRight: 2,
                      }}
                    >
                      🇺🇾
                    </Typography>
                    <p style={{ fontSize: 30 }}>Uruguay</p>
                  </a>
                </MenuItem>

                <MenuItem
                  onClick={handleClose}
                  disableRipple
                  sx={{ height: 60 }}
                >
                  <a
                    href={
                      import.meta.env.VITE_FRONTEND_URL +
                      desiredPathSegment +
                      "/br"
                    }
                    //   target="_ black"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        //   color: "#ffffff",
                        fontSize: { xs: 20, sm: 40 },
                        marginRight: 2,
                      }}
                    >
                      🇧🇷
                    </Typography>
                    <p style={{ fontSize: 30 }}>português</p>
                  </a>
                </MenuItem>

                <MenuItem
                  onClick={handleClose}
                  disableRipple
                  sx={{ height: 60 }}
                >
                  <a
                    href={
                      import.meta.env.VITE_FRONTEND_URL +
                      desiredPathSegment +
                      "/en"
                    }
                    //   target="_ black"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        //   color: "#ffffff",
                        fontSize: { xs: 20, sm: 40 },
                        marginRight: 2,
                      }}
                    >
                      🇺🇸
                    </Typography>
                    <p style={{ fontSize: 30 }}>English</p>
                  </a>
                </MenuItem>

                <MenuItem
                  onClick={handleClose}
                  disableRipple
                  sx={{ height: 60, display: { xs: "flex", md: "none" } }}
                >
                  <a
                    href="https://www.facebook.com/piwohelados"
                    target="_ black"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FacebookIcon
                      sx={{
                        color: "#ffffff",
                        fontSize: { xs: 20, sm: 40 },
                        marginRight: 5,
                      }}
                    />
                    <p style={{ fontSize: 30 }}>Facebook</p>
                  </a>
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  disableRipple
                  sx={{ height: 60, display: { xs: "flex", md: "none" } }}
                >
                  <a
                    href="https://www.instagram.com/piwohelados"
                    target="_ black"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <InstagramIcon
                      sx={{
                        color: "#ffffff",
                        fontSize: { xs: 20, sm: 40 },
                        marginRight: 5,
                      }}
                    />
                    <p style={{ fontSize: 30 }}>Instagram</p>
                  </a>
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  disableRipple
                  sx={{ height: 60, display: { xs: "flex", md: "none" } }}
                >
                  <a
                    href="https://api.whatsapp.com/send/?phone=59896728179&type=phone_number&app_absent=0"
                    target="_ black"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <WhatsAppIcon
                      sx={{
                        color: "#ffffff",
                        fontSize: { xs: 20, sm: 40 },
                      }}
                    />
                    <p style={{ fontSize: 30 }}>WhatsApp</p>
                  </a>
                </MenuItem>
              </StyledMenu>
            </div>
          </Box>
          {/* <h1>JUGOS NATURALES</h1> */}
        </Box>
        {/* </Toolbar> */}
      </AppBar>
    </HideOnScroll>
  );
}

export default NavBar;
