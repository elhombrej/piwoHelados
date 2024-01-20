import * as React from "react";
import { Box, Grid, IconButton } from "@mui/material";
import piwologocolor from "../images/piwologocolor.png";
import piwologo from "../images/piwologo.png";
import piwosalado from "../images/piwosalado.png";
import anana from "../images/iceCreamFlavors/anana.jpg";
import arandanos from "../images/iceCreamFlavors/arandanos.jpg";
import cheesecake from "../images/iceCreamFlavors/cheesecake.jpg";
import chocolateItaliano from "../images/iceCreamFlavors/chocolateItaliano.jpg";
import chocolateSuizo from "../images/iceCreamFlavors/chocolateSuizo.jpg";
import cremaConPasasDeUvaAlRon from "../images/iceCreamFlavors/cremaConPasasDeUvaAlRon.jpg";
import cremaRusa from "../images/iceCreamFlavors/cremaRusa.jpg";
import dulceDeLecheGranizado from "../images/iceCreamFlavors/dulceDeLecheGranizado.jpg";
import ferreroR from "../images/iceCreamFlavors/ferreroR.jpg";
import frambueza from "../images/iceCreamFlavors/frambueza.jpg";
import frutilla from "../images/iceCreamFlavors/frutilla.jpg";
import frutosRojos from "../images/iceCreamFlavors/frutosRojos.jpg";
import limon from "../images/iceCreamFlavors/limon.jpg";
import mantecol from "../images/iceCreamFlavors/mantecol.jpg";
import maracuya from "../images/iceCreamFlavors/maracuya.jpg";
import menta from "../images/iceCreamFlavors/menta.jpg";
import moka from "../images/iceCreamFlavors/moka.jpg";
import nutella from "../images/iceCreamFlavors/nutella.jpg";
import oreo from "../images/iceCreamFlavors/oreo.jpg";
import pistacho from "../images/iceCreamFlavors/pistacho.jpg";
import sambayonConCereza from "../images/iceCreamFlavors/sambayonConCereza.jpg";
import superDulceDeLeche from "../images/iceCreamFlavors/superDulceDeLeche.jpg";
import tiramisu from "../images/iceCreamFlavors/tiramisu.jpg";
import tramontana from "../images/iceCreamFlavors/tramontana.jpg";
import vainilla from "../images/iceCreamFlavors/vainilla.jpg";
import cocoSplit from "../images/iceCreamFlavors/cocoSplit.jpg";
import taccLogo from "../images/sinTacc.png";
import piwociudadvieja from "../images/piwociudadvieja.jpg";
import piwovilladolores from "../images/piwovilladolores.png";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import "leaflet/dist/leaflet.css";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

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

const flavorsArray = [
  { name: "Ananá 🍍", image: anana },
  { name: "Arándanos 🫐", image: arandanos },
  { name: "Cheesecake 🍰", image: cheesecake },
  { name: "Chocolate Italiano 🍫", image: chocolateItaliano },
  { name: "Chocolate Suizo 🍫", image: chocolateSuizo },
  {
    name: "Crema con Pasas de Uva al Ron 🍇🥃",
    image: cremaConPasasDeUvaAlRon,
  },
  { name: "Crema Rusa 🍨", image: cremaRusa },
  { name: "Dulce de Leche Granizado 🐮🍫", image: dulceDeLecheGranizado },
  { name: "Ferrero Rocher 🍫", image: ferreroR },
  { name: "Frambuesa 🍇", image: frambueza },
  { name: "Frutilla 🍓", image: frutilla },
  { name: "Frutos Rojos 🍒", image: frutosRojos },
  { name: "Limón 🍋", image: limon },
  { name: "Mantecol 🧈", image: mantecol },
  { name: "Maracuyá 🥭", image: maracuya },
  { name: "Menta 🌿", image: menta },
  { name: "Moka ☕", image: moka },
  { name: "Nutella 🌰", image: nutella },
  { name: "Oreo 🍪", image: oreo, hasTacc: true },
  { name: "Pistacho 🥜", image: pistacho },
  { name: "Sambayón con Cereza 🍒", image: sambayonConCereza },
  { name: "Super Dulce de Leche 🐮", image: superDulceDeLeche },
  { name: "Tiramisú 🍰", image: tiramisu, hasTacc: true },
  { name: "Tramontana 🍨", image: tramontana, hasTacc: true },
  { name: "Vainilla 🍦", image: vainilla },
  { name: "Coco Split 🥥🍌", image: cocoSplit },
];

function Sabores(props: Props) {
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

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      // width="100vw"
      flexWrap={"nowrap"}
      sx={{
        height: "100vh",
        minHeight: "100vh",
        padding: 0,
        maxWidth: "100vw",
        // backgroundColor: "#D28E31",
        // background: "solid",
      }}
    >
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
              <img src={piwologo} width={"80px"} />
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
              <img src={piwologo} width={"150px"} />
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 30,
                }}
              >
                MAS QUE HELADOS
              </p>
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
                      fontSize: 25,
                      color: "#ffffff",
                    }}
                  >
                    MAS QUE HELADOS
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
                    style={{ height: 60 }}
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
                    style={{ height: 60 }}
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
                </StyledMenu>
              </div>
            </Box>
          </Box>
        </AppBar>
      </HideOnScroll>

      <Grid
        item
        sx={{
          backgroundColor: "#D6D9D6",
          background: "solid",
          width: "100%",
          // minHeight: "400px",
          minHeight: "fit-content",
          padding: { xs: 0, md: 10 },
          // margin: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            // padding: { xs: 0, md: 10 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
            textAlign: "center",
          }}
        >
          <IconButton href="/">
            <ArrowBackIosIcon sx={{ fontSize: 40, color: "white" }} />
          </IconButton>
          <h1 style={{ fontSize: 100 }}>Sabores</h1>
          <br />
        </Box>

        <Grid
          container
          // gap={5}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            // flexWrap: "wrap",
            // minWidth: 300,
            width: "100%",
            // marginTop: 5,
          }}
        >
          {flavorsArray.map((element) => {
            return (
              <Grid
                item
                xs={6}
                md={4}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 5,
                }}
              >
                <Box
                  sx={{
                    width: "200px",
                    height: "auto",
                    borderRadius: 50,
                    overflow: "hidden",
                  }}
                >
                  <ImageButton
                    focusRipple
                    key={piwosalado}
                    sx={{
                      width: "100%",
                    }}
                  >
                    <ImageSrc
                      style={{ backgroundImage: `url(${element.image})` }}
                    />
                    {/* <ImageBackdrop className="MuiImageBackdrop-root" /> */}
                  </ImageButton>
                </Box>
                <Box
                  sx={{
                    // width: { xs: "100%", md: "100%" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h2 style={{ color: "#9e9e9e" }}>{element.name}</h2>

                  {!element.hasTacc && (
                    <img src={taccLogo} width={25} style={{ marginLeft: 0 }} />
                  )}
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      <Grid
        item
        style={{
          backgroundColor: "#ffffff",
          background: "solid",
          width: "100%",
          height: "400px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <img
            src={piwologocolor}
            alt=""
            width={300}
            // style={{ maxWidth: "100vw" }}
          />
          <b style={{ color: "#2e2e2e" }}>SEGUINOS!</b>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <a href="https://www.instagram.com/piwohelados" target="_ black">
              <InstagramIcon style={{ fontSize: 40, margin: 10 }} />
            </a>
            <a href="https://www.facebook.com/piwohelados" target="_ black">
              <FacebookIcon style={{ fontSize: 40, margin: 10 }} />
            </a>
          </div>
          <Typography style={{ color: "#cdcdcd" }}>
            © 2024 Piwo Helados
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

export default Sabores;
