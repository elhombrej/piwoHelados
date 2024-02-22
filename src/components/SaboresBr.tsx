import * as React from "react";
import { Box, Grid, IconButton } from "@mui/material";
import piwologocolor from "/piwologocolor.png";
import piwologo from "/piwologo.png";
import piwosalado from "/piwosalado.png";

import taccLogo from "/sinTacc.png";
import "./App.css";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import "leaflet/dist/leaflet.css";
import Menu, { MenuProps } from "@mui/material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import backImg from "/back.png";
import NavBar from "./NavBar";
import { flavorsArrayBr, flavorsArrayNoSugarBr, flavorsArrayNoSugarUy, flavorsArrayUy } from "./Flavors";

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

interface Flavors {
  name: string;
  image: string; // Supongo que aquí se almacenará la ruta de la imagen
  icons: string; // Supongo que aquí se almacenará el emoji relacionado con el producto
  hasNoTacc?: boolean; // Opcional: si el producto no tiene gluten
}

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
    <>
      {" "}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundImage: `url(${backImg})`, // Usa la imagen importada como fondo
          backgroundRepeat: "cover", // Repite la imagen en todo el alto y ancho
          backgroundAttachment: "fixed", // Fija la imagen para que se desplace con la ventana
          backgroundSize: "cover", // Ajusta la imagen al tamaño del contenedor
          filter: "blur(120px)",
        }}
      ></div>
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
        {/* @ts-ignore: Unreachable code error */}
        <NavBar />
        <Grid
          item
          sx={{
            // backgroundColor: "#D6D9D6",
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
            marginTop: 10,

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
            <IconButton href="/inicio/br">
              <ArrowBackIosIcon sx={{ fontSize: 40, color: "white" }} />
            </IconButton>
            <h1 style={{ fontSize: 100 }}>SABORES</h1>
            <br />
          </Box>

          <Grid item xs={10}>
            <p
              style={{
                color: "#6e6e6e",
                fontSize: 35,
                fontWeight: 500,
              }}
            >
              Aplicamos o 'Know How' da fabricação do
              <b> sorvete artesanal italiano</b> através de maquinário, técnicas
              e uma formação distinta de nosso
              <b> mestre sorveteiro</b>.
            </p>
          </Grid>

          <Grid item>
            <Box
              sx={{
                width: "100%",
                // padding: { xs: 0, md: 10 },
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: "row",
                textAlign: "center",
              }}
            >
              <h1 style={{ fontSize: 80 }}>Sem Açúcar</h1>
              <br />
            </Box>
          </Grid>

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
              // paddingTop: 15,
            }}
          >
            {flavorsArrayNoSugarBr.map((element) => {
              return (
                <Grid
                  item
                  xs={6}
                  md={4}
                  lg={3}
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
                      width: { xs: "100px", sm: "200px", md: "200px" },
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
                      flexDirection: "column",
                    }}
                  >
                    <span
                      style={{
                        color: "#6e6e6e",
                        fontSize: 35,
                        fontWeight: 500,
                        padding: 10,
                      }}
                    >
                      {element.name}
                    </span>
                    <div>{element.icons}</div>
                  </Box>
                  {!element.hasNoTacc && (
                    <img
                      src={taccLogo}
                      width={25}
                      style={{ marginLeft: 0 }}
                      loading="lazy"
                    />
                  )}
                </Grid>
              );
            })}
          </Grid>

          <Grid item>
            <Box
              sx={{
                width: "100%",
                // padding: { xs: 0, md: 10 },
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: "row",
                textAlign: "center",
              }}
            >
              <h1 style={{ fontSize: 80 }}>Com Açúcar</h1>
              <br />
            </Box>
          </Grid>

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
              // paddingTop: 15,
            }}
          >
            {flavorsArrayBr.map((element) => {
              return (
                <Grid
                  item
                  xs={6}
                  md={4}
                  lg={3}
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
                      width: { xs: "100px", sm: "200px", md: "200px" },
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
                      flexDirection: "column",
                    }}
                  >
                    <span
                      style={{
                        color: "#6e6e6e",
                        fontSize: 35,
                        fontWeight: 500,
                        padding: 10,
                      }}
                    >
                      {element.name}
                    </span>
                    <div>{element.icons}</div>
                  </Box>
                  {!element.hasNoTacc && (
                    <img
                      src={taccLogo}
                      width={25}
                      style={{ marginLeft: 0 }}
                      loading="lazy"
                    />
                  )}
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
              loading="lazy"
            />
            <b style={{ color: "#2e2e2e" }}>SIGA-NOS!</b>
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
              <a href="mailto:info.piwohelados@gmail.com">
                info.piwohelados@gmail.com
              </a>
            </Typography>
            <br />
            <Typography style={{ color: "#cdcdcd" }}>
              © 2024 Piwo Helados
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Sabores;
