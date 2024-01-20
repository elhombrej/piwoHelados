import * as React from "react";
import { Box, Grid, IconButton } from "@mui/material";
import piwologocolor from "../images/piwologocolor.png";
import piwologo from "../images/piwologo.png";
import pedidosyalogo from "../images/pedidosya.svg";
import piwoheader from "../images/piwoheader.jpg";
import piwocafe from "../images/piwocafe.jpg";
import piwosalado from "../images/piwosalado.png";
import piwociudadvieja from "../images/piwociudadvieja.jpg";
import piwovilladolores from "../images/piwovilladolores.png";
import piwolocal2 from "../images/piwolocal2.png";
import piwojugos from "../images/piwojugos.jpg";
import piwolocal1 from "../images/piwolocal1.jpg";
import cakes from "../images/cakes.jpg";
import barista from "../images/barista.jpg";
import desayunosYMeriendas from "../images/desayunosYMeriendas.jpg";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
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
              {/* <a
                href="https://api.whatsapp.com/send/?phone=098540412&type=phone_number&app_absent=0"
                target="_ black"
              >
                <WhatsAppIcon
                  sx={{ color: "#ffffff", fontSize: { xs: 20, sm: 40 } }}
                />
              </a> */}
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
                    MAS QUE HELADOS
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
                    sx={{ height: 60 }}
                  >
                    <a
                      href="https://piwohelados.com"
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
                      href="https://piwohelados.com/br"
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
                      href="https://piwohelados.com/en"
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
                  {/* <MenuItem
                    onClick={handleClose}
                    disableRipple
                    style={{ height: 60 }}
                  >
                    <a
                      href="https://api.whatsapp.com/send/?phone=098540412&type=phone_number&app_absent=0"
                      target="_ black"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <WhatsAppIcon
                        sx={{ color: "#ffffff", fontSize: { xs: 20, sm: 40 } }}
                      />
                      <p style={{ fontSize: 30 }}>WhatsApp</p>
                    </a>
                  </MenuItem> */}
                </StyledMenu>
              </div>
            </Box>
            {/* <h1>JUGOS NATURALES</h1> */}
          </Box>
          {/* </Toolbar> */}
        </AppBar>
      </HideOnScroll>

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
            <div>
              <img src={images[0]} />
            </div>
            <p
              style={{
                color: "#ffffff",
                fontWeight: "bold",
                fontSize: 25,
                padding: 40,
              }}
            >
              Cada uno de nuestros sabores nace de una receta única. Cada uno de
              nuestros sabores nace de una receta única. Cada uno de nuestros
              sabores nace de una receta única.
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
              Cada uno de nuestros sabores nace de una receta única. Cada uno de
              nuestros sabores nace de una receta única. Cada uno de nuestros
              sabores nace de una receta única.
            </p>
            <div>
              <img src={images[1]} />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={images[2]} />
            </div>
            <p
              style={{
                color: "#ffffff",
                fontWeight: "bold",
                fontSize: 25,
                padding: 40,
              }}
            >
              Cada uno de nuestros sabores nace de una receta única. Cada uno de
              nuestros sabores nace de una receta única. Cada uno de nuestros
              sabores nace de una receta única.
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
              Cada uno de nuestros sabores nace de una receta única. Cada uno de
              nuestros sabores nace de una receta única. Cada uno de nuestros
              sabores nace de una receta única.
            </p>
            <div>
              <img src={images[3]} />
            </div>
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
          padding: 50,
        }}
      >
        <Grid
          container
          direction={"row"}
          alignItems={"flex-start"}
          justifyContent={"center"}
          spacing={5}
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
                <h1
                  style={{ fontSize: 60, fontWeight: "bold", color: "#2e2e2e" }}
                >
                  HELADOS
                </h1>

                {/* <Button variant="text" size="large"> */}
                <p style={{ color: "#9e9e9e", fontSize: 25 }}>
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
                  {/* <Button variant="text" size="large"> */}
                  <a href="/sabores/es" style={{ fontSize: 50 }}>
                    VER SABORES
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
                  justifyContent: "center",
                }}
              >
                <h1
                  style={{ fontSize: 60, fontWeight: "bold", color: "#2e2e2e" }}
                >
                  JUGOS
                </h1>

                {/* <Button variant="text" size="large"> */}
                <p style={{ color: "#9e9e9e", fontSize: 25 }}>
                  Nuestros jugos están endulzados con <b>Stevia</b> y son de
                  origen y elaborados de forma
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
                  <a href="/" style={{ fontSize: 50 }}>
                    VER SABORES
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
                <h1
                  style={{ fontSize: 60, fontWeight: "bold", color: "#2e2e2e" }}
                >
                  BATIDOS
                </h1>

                {/* <Button variant="text" size="large"> */}
                <p style={{ color: "#9e9e9e", fontSize: 25 }}>
                  Seleccion de las mejores <b>frutas de estacion</b> para
                  nuestros batidos, milkshakes o <b>milkshakes con helado</b>{" "}
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
                  <a href="/" style={{ fontSize: 50 }}>
                    VER SABORES
                  </a>
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
            padding: 5,
            gap: 0,
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
              <p style={{ color: "#9e9e9e", fontSize: 35 }}>
                Trabajamos con la marca de <b> Cafés de especialidad</b> mas
                reconocida de Colombia, <b> Amor Perfecto</b>. Contamos con
                <b> baristas profesionales</b> para servir el mejor café en sus
                distintas versiones.
              </p>
            </motion.div>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{ height: { xs: "500px", md: "500px" }, width: "auto" }}
          >
            <img
              src={barista}
              width={"100%"}
              height={"100%"}
              style={{
                borderRadius: 10,
                boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.5)",
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

      <Grid item>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            padding: 10,
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
              src={cakes}
              width={"100%"}
              height={"100%"}
              style={{
                borderRadius: 10,
                boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.5)",
                objectFit: "cover", // Añade esta propiedad
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
              <h1 style={{ color: "#2e2e2e", fontSize: 80 }}>
                PASTELERIA A TODA HORA
              </h1>
              <p style={{ color: "#9e9e9e", fontSize: 35 }}>
                Contamos con una linea de <b> postres</b> elaborada de forma
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
              height: { xs: "500px", md: "500px" },
              width: "auto",
              display: { xs: "flex", md: "none" },
            }}
          >
            <img
              src={cakes}
              width={"100%"}
              height={"100%"}
              style={{
                borderRadius: 10,
                boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.5)",
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
        <img src={pedidosyalogo} alt="" width={300} />

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
              <h2 style={{ color: "#9e9e9e" }}>
                Cada uno de nuestros sabores nace de una receta única. Cada uno
                de nuestros sabores nace de una receta única. Cada uno de
                nuestros sabores nace de una receta única.
              </h2>
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
              <h2 style={{ color: "#9e9e9e" }}>
                Cada uno de nuestros sabores nace de una receta única. Cada uno
                de nuestros sabores nace de una receta única. Cada uno de
                nuestros sabores nace de una receta única.
              </h2>
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

      <Grid item>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            padding: 10,
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
              <p style={{ color: "#9e9e9e", fontSize: 35 }}>
                Estamos instalados con nuestro local comercial en la{" "}
                <b> Peatonal Sarandi 340</b> de la Ciudad Vieja y nuestro Food
                Truck en la Plaza de Comidas de <b> Eco Parque Villa Dolores</b>
                .
              </p>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={5} style={{ height: "400px", width: "100%" }}>
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
                >
                  <Popup>
                    <img
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

export default LandingPage;
