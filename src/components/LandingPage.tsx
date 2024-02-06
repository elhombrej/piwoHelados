import * as React from "react";
import { Box, Grid, IconButton } from "@mui/material";
import piwologocolor from "/piwologocolor.png";
import piwologo from "/piwologo.png";
import pedidosyalogo from "/pedidosya.svg";
import piwoheader from "/piwoheader.jpg";
import piwocafe from "/piwocafe.jpg";
import piwosalado from "/piwosalado.png";
import piwociudadvieja from "/piwociudadvieja.jpg";
import piwovilladolores from "/piwovilladolores.png";
import piwolocal2 from "/piwolocal2.png";
import piwojugos from "/piwojugos.jpg";
import piwolocal1 from "/piwolocal1.jpg";
import cakes from "/cakes.jpg";
import jugoBack from "/jugoBack.png";
import frutosRojos from "/iceCreamFlavors/frutosRojos.jpg";
import barista from "/barista.jpg";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import "leaflet/dist/leaflet.css";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "react-slideshow-image/dist/styles.css";
import { Slide as SlideShow } from "react-slideshow-image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { divIcon } from "leaflet";
import { renderToString } from "react-dom/server";
import backImg from "/back.png";
import shake from "/shake.png";

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

const images = [piwoheader, piwolocal2, piwojugos, piwolocal1];

function LandingPage(props: Props) {
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

  const materialIcon = divIcon({
    html: renderToString(<LocationOnIcon color="primary" />),
  });

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

  return (
    <>
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
          margin: 0,
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
                <a
                  href="https://www.instagram.com/piwohelados"
                  target="_ black"
                >
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
                      🇺🇾 MÁS QUE HELADOS
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
                        fontSize: 25,
                        color: "#ffffff",
                      }}
                    >
                      🇺🇾 MÁS QUE HELADOS
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
                        href={import.meta.env.VITE_FRONTEND_URL}
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
                        href={import.meta.env.VITE_FRONTEND_URL + "/br"}
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
                        href={import.meta.env.VITE_FRONTEND_URL + "/en"}
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

        {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          minHeight: "100vh",
          zIndex: -1,
          backgroundImage: `url(${backImg})`, // Usa la imagen importada como fondo
          backgroundRepeat: "repeat", // Repite la imagen en todo el alto y ancho
          backgroundAttachment: "fixed", // Fija la imagen para que se desplace con la ventana
          backgroundSize: "auto", // Ajusta la imagen al tamaño del contenedor
          filter: "blur(8px)",
        }}
      ></div> */}
        <Grid
          item
          style={{
            maxWidth: "100%",
            width: "100%",
            height: "400px",
            minHeight: "400px",
            marginTop: 90,
          }}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Fade indicators={true} canSwipe={true} arrows={true}>
            <div className="each-slide">
              <p
                style={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontSize: 25,
                  padding: 40,
                }}
              >
                Piwo es una empresa Uruguaya especializada en la fabricacién de
                helados y jugos naturales ademas contamos con una aplia linea de
                cafeteria, reposteria y comidas saladas.
              </p>
              <div>
                <img src={images[3]} loading="lazy" />
              </div>
            </div>

            <div className="each-slide">
              <div>
                <img src={images[0]} loading="lazy" />
              </div>
              <p
                style={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontSize: 25,
                  padding: 40,
                }}
              >
                De una muy surtida carta de sabores, destacan nuestras
                propuestas sin azucar, opciones veganas, y gustos originales
                como el de Fernet, el de Cerveza, Maracuya, Nutella.
              </p>
            </div>
            <div className="each-slide">
              <p
                style={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontSize: 25,
                  padding: 40,
                }}
              >
                El helado Tailandés, es una técnica innovadora sobre el helado
                artesanal, que implica la elaboracién del helado en el momento
                sobre la base de una crema americana o base de chocolate,
                disponible en Eco Parque Villa Dolores.
              </p>
              <div>
                <img src={images[1]} loading="lazy" />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img src={images[2]} loading="lazy" />
              </div>
              <p
                style={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontSize: 25,
                  padding: 40,
                }}
              >
                Al igual que en nuestro local, el Food truck de Piwo utiliza
                vasos reciclables, tanto para los productos de heladeria como de
                cafeteria de la marca Darnel Group (productos 100% reciclables,
                biodegradables o compostables).
              </p>
            </div>
          </Fade>
        </Grid>

        <Grid
          item
          style={{
            maxWidth: "100%",
            width: "100%",
            height: "400px",
            minHeight: "400px",
            marginTop: 45,
          }}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <SlideShow
            slidesToScroll={1}
            slidesToShow={1}
            indicators={true}
            autoplay={true}
            responsive={[
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            <div
              style={{
                backgroundImage: `url(${images[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                minHeight: "400px",
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${images[1]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                minHeight: "400px",
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${images[2]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                minHeight: "400px",
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${images[3]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                minHeight: "400px",
              }}
            ></div>
          </SlideShow>
        </Grid>

        <Grid
          item
          // padding={50}

          style={{
            display: "flex",
            flexDirection: "row",
            paddingRight: 5,
            paddingLeft: 5,
            paddingTop: 50,
            paddingBottom: 30,
            // background: "linear-gradient(to top, #ffffff, #adceed)",
          }}
        >
          <Grid
            container
            direction={"row"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            spacing={5}
            // padding={10}
            sx={{
              paddingRight: { xs: 5, md: 0 },
              paddingLeft: { xs: 5, md: 0 },
            }}
          >
            <Grid item xs={12} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ImageButton
                    // focusRipple
                    key={piwocafe}
                    sx={{
                      width: { xs: "100%", md: "100%" },
                      minHeight: 200,
                    }}
                  >
                    <a href="/sabores/es">
                      <ImageSrc
                        style={{ backgroundImage: `url(${frutosRojos})` }}
                      />
                      <Image>
                        <p
                          style={{
                            fontSize: 60,
                            height: 10,
                            fontWeight: 700,
                            // fontFamily: "Bebas Neue, sans-serif",
                          }}
                        >
                          {`HELADOS`}
                        </p>
                      </Image>
                    </a>
                  </ImageButton>

                  {/* <Button variant="text" size="large"> */}
                  <p
                    style={{ color: "#6e6e6e", fontSize: 35, fontWeight: 500 }}
                  >
                    Aplicamos el 'Know How' de la fabricacion del
                    <b> helado artesanal Italiano</b> a travez de maquinarias,
                    tecnicas y una distinguida formacion de nuestro{" "}
                    <b>maestro heladero</b>.
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <a href="/sabores/es" style={{ fontSize: 50 }}>
                      {`VER SABORES>`}
                    </a>
                  </div>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ImageButton
                    focusRipple
                    key={piwocafe}
                    sx={{
                      width: { xs: "100%", md: "100%" },
                      minHeight: 200,
                    }}
                  >
                    <a href="/jugos/es">
                      <ImageSrc
                        style={{ backgroundImage: `url(${jugoBack})` }}
                      />
                      <Image>
                        <p
                          style={{
                            fontSize: 60,
                            height: 10,
                            fontWeight: 700,
                            // fontFamily: "Bebas Neue, sans-serif",
                          }}
                        >
                          {`JUGOS`}
                        </p>
                      </Image>
                    </a>
                  </ImageButton>

                  {/* <Button variant="text" size="large"> */}
                  <p
                    style={{ color: "#5e5e5e", fontSize: 35, fontWeight: 500 }}
                  >
                    Nuestros jugos están endulzados con <b>Stevia</b> y son de
                    origen
                    <b> 100% natural</b>. No contienen{" "}
                    <b>colorantes, conservantes, ni azúcares</b>.
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* <Button variant="text" size="large"> */}
                    <a href="/jugos/es" style={{ fontSize: 50 }}>
                      {`VER SABORES>`}
                    </a>
                    {/* </Button> */}
                  </div>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <ImageButton
                    focusRipple
                    key={piwocafe}
                    sx={{
                      width: { xs: "100%", md: "100%" },
                      minHeight: 200,
                    }}
                  >
                    {/* <a href="/batidos/es"> */}
                    <ImageSrc style={{ backgroundImage: `url(${shake})` }} />
                    <Image>
                      <p
                        style={{
                          fontSize: 60,
                          height: 10,
                          fontWeight: 700,
                          // fontFamily: "Bebas Neue, sans-serif",
                        }}
                      >
                        {`BATIDOS`}
                      </p>
                    </Image>
                    {/* </a> */}
                  </ImageButton>

                  {/* <Button variant="text" size="large"> */}
                  <p
                    style={{ color: "#6e6e6e", fontSize: 35, fontWeight: 500 }}
                  >
                    Seleccion de las mejores <b>frutas de estacion</b> para
                    nuestros batidos, licuados o <b>milkshakes con helado</b>{" "}
                    elaborados en el momento.
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* <Button variant="text" size="large"> */}
                    {/* <a href="/" style={{ fontSize: 50 }}>
                    VER SABORES
                  </a> */}
                    {/* </Button> */}
                  </div>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              paddingRight: 5,
              paddingLeft: 5,
              paddingBottom: 10,
            }}
          >
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 style={{ color: "#2e2e2e", fontSize: 80 }}>
                  CAFETERIA DE ESPECIALIDAD
                </h1>
                <p style={{ color: "#6e6e6e", fontSize: 35, fontWeight: 500 }}>
                  Trabajamos con la marca de <b> Cafés de especialidad</b> mas
                  reconocida de Colombia, <b> Amor Perfecto</b>. Contamos con
                  <b> baristas profesionales</b> para servir el mejor café en
                  sus distintas versiones.
                </p>
              </motion.div>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{ height: { xs: "400px", md: "500px" }, width: "auto" }}
            >
              <img
                src={barista}
                width={"100%"}
                height={"100%"}
                style={{
                  objectFit: "cover",
                  background: "solid",
                  backgroundSize: "cover",
                }}
                loading="lazy"
              />
            </Grid>{" "}
          </Grid>
        </Grid>

        <Grid
          item
          // sx={{ background: "linear-gradient(to bottom, #ffffff, #D6D9D6)" }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              paddingRight: 5,
              paddingLeft: 5,
              paddingBottom: 10,
            }}
          >
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                height: { xs: "500px", md: "500px" },
                width: "auto",
                display: { xs: "none", md: "flex" },
              }}
            >
              <img
                loading="lazy"
                src={cakes}
                width={"100%"}
                height={"100%"}
                style={{
                  // borderRadius: 10,
                  // boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.5)",
                  objectFit: "cover", //
                  background: "solid",
                  backgroundSize: "cover",
                  // backgroundPosition: "absolute",
                  // maxWidth: "100%",
                }}
              />
            </Grid>{" "}
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1
                  style={{
                    color: "#2e2e2e",
                    fontSize: 80,
                  }}
                >
                  PASTELERIA A TODA HORA
                </h1>
                <p style={{ color: "#6e6e6e", fontSize: 35, fontWeight: 500 }}>
                  La línea de <b> postres DOMUM</b> es elaborada de forma
                  casera, combinando diferentes elementos que hacen de su sabor,
                  textura y color una <b>exquisita experiencia</b>.
                </p>
              </motion.div>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                height: { xs: "500px", md: "450px" },
                width: "auto",
                display: { xs: "flex", md: "none" },
              }}
            >
              <img
                loading="lazy"
                src={cakes}
                width={"100%"}
                height={"100%"}
                style={{
                  // borderRadius: 10,
                  // boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.5)",
                  objectFit: "cover", // Añade esta propiedad
                  background: "solid",
                  backgroundSize: "cover",
                  // backgroundPosition: "absolute",
                  // maxWidth: "100%",
                }}
              />
            </Grid>{" "}
          </Grid>
        </Grid>

        <Grid
          item
          style={{
            backgroundColor: "#D6D9D6",
            background: "solid",
            width: "100%",
            // minHeight: "400px",
            minHeight: "fit-content",
            padding: 50,
            // margin: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img loading="lazy" src={pedidosyalogo} alt="" width={300} />

          <Grid
            container
            gap={5}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              // flexWrap: "wrap",
              // minWidth: 300,
              width: "100%",
              marginTop: 5,
            }}
          >
            <Grid item xs={12} md={5}>
              <ImageButton
                focusRipple
                key={piwocafe}
                sx={{
                  width: { xs: "100%", md: "100%" },
                  minHeight: 200,
                }}
              >
                <a
                  href="https://www.pedidosya.com.uy/restaurantes/montevideo/piwo-cafe-menu?category=71&search=piwo"
                  target="_ black"
                >
                  <ImageSrc style={{ backgroundImage: `url(${piwocafe})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: "relative",
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      <p style={{ fontSize: 50, height: 10 }}>PIWO CAFE</p>
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </a>
              </ImageButton>

              <Box
                sx={{
                  width: { xs: "100%", md: "100%" },
                  // minHeight: 200,
                }}
              >
                <p style={{ color: "black", fontSize: 35 }}>
                  Una extensa carta de <b> CAFETERIA</b> y delicias
                  <b> DULCES</b> disponible para llevar online.
                </p>
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <ImageButton
                focusRipple
                key={piwosalado}
                sx={{
                  width: { xs: "100%", md: "100%" },
                  minHeight: 200,
                }}
              >
                <a
                  href="https://www.pedidosya.com.uy/restaurantes/montevideo/piwo-resto-menu?category=71&search=piwo"
                  target="_ black"
                >
                  <ImageSrc style={{ backgroundImage: `url(${piwosalado})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: "relative",
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      <p style={{ fontSize: 50, height: 10 }}>PIWO RESTO</p>
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </a>
              </ImageButton>

              <Box
                sx={{
                  width: { xs: "100%", md: "100%" },
                  // minHeight: 200,
                }}
              >
                <p style={{ color: "black", fontSize: 35 }}>
                  Una extensa carta de platos<b> SALADOS</b> y <b> BEBIDAS</b>{" "}
                  disponible para llevar online.
                </p>
              </Box>
            </Grid>
            {/* 
          <Box>
            <ImageButton
              focusRipple
              key={piwosalado}
              sx={{
                width: { xs: "90%", md: "90%" },
                minHeight: 200,
              }}
            >
              <a
                href="https://www.pedidosya.com.uy/restaurantes/montevideo/piwo-resto-menu?category=71&search=piwo"
                target="_ black"
              >
                <ImageSrc style={{ backgroundImage: `url(${piwosalado})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                      position: "relative",
                      p: 4,
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                  >
                    <p style={{ fontSize: 50, height: 10 }}>PIWO RESTO</p>
                    <ImageMarked className="MuiImageMarked-root" />
                  </Typography>
                </Image>
              </a>
            </ImageButton>

            <Box
              sx={{
                width: { xs: "90%", md: "90%" },
                // minHeight: 200,
              }}
            >
              <h2 style={{ color: "#9e9e9e" }}>
                Cada uno de nuestros sabores nace de una receta única. Cada uno
                de nuestros sabores nace de una receta única. Cada uno de
                nuestros sabores nace de una receta única.
              </h2>
            </Box>
          </Box> */}
          </Grid>
          {/* </div> */}
        </Grid>

        <Grid
          item
          // sx={{ background: "linear-gradient(to bottom, #D6D9D6, #ffffff)" }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              paddingRight: 5,
              paddingLeft: 5,
              paddingBottom: 10,
            }}
          >
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 style={{ color: "#2e2e2e", fontSize: 80 }}>
                  NUESTROS LOCALES
                </h1>
                <p style={{ color: "#6e6e6e", fontSize: 35, fontWeight: 500 }}>
                  Estamos instalados con nuestro local comercial en la{" "}
                  <b> Peatonal Sarandi 340</b> de la Ciudad Vieja y nuestro Food
                  Truck en la Plaza de Comidas de{" "}
                  <b> Eco Parque Villa Dolores</b>.
                </p>
              </motion.div>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ height: "400px", width: "100%" }}
            >
              <MapContainer
                center={[-34.904468, -56.176189]}
                zoom={12}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {points.map((point, index) => (
                  <Marker
                    key={index}
                    position={[point.latitude, point.longitude]}
                    icon={materialIcon}
                  >
                    <Popup>
                      <img
                        loading="lazy"
                        src={piwologocolor}
                        width={"100%"}
                        // style={{ borderRadius: 50 }}
                      />
                      <br />
                      {point.name}
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </Grid>{" "}
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
              loading="lazy"
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

export default LandingPage;
