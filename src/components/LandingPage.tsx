import * as React from "react";
import { Box, Grid, IconButton } from "@mui/material";
import piwologocolor from "/piwologocolor.png";
import piwologo from "/piwologo.png";
import pedidosyalogo from "/pedidosya.svg";
import piwoheader from "/piwoheader.png";
import piwocafe from "/piwocafe.png";
import piwosalado from "/piwosalado.png";
import piwociudadvieja from "/piwociudadvieja.png";
import piwovilladolores from "/piwovilladolores.png";
import sandwich from "/sandwich.png";
import piwojugos from "/piwojugos.png";
import piwolocal1 from "/piwolocal1.png";
import cakes from "/cakes.png";
import jugoBack from "/jugoBack.png";
import frutosRojos from "/iceCreamFlavors/frutosRojos.png";
import barista from "/barista.png";
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
import { DivOverlay, divIcon } from "leaflet";
import { renderToString } from "react-dom/server";
import backImg from "/back.png";
import shake from "/shake.png";
import NavBar from "./NavBar";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

const images = [piwoheader, sandwich, piwojugos, piwolocal1];

function LandingPage(props: Props) {
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
        {/* @ts-ignore: Unreachable code error */}
        <NavBar />

        <Grid
          item
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          style={{
            maxWidth: "100%",
            width: "100%",
            height: "500px",
            minHeight: "500px",
            marginTop: 90,
            // backgroundColor: "#59b0ff",
          }}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <div
            style={{
              maxWidth: "100%",
              width: "100%",
            }}
          >
            <Fade indicators={true} canSwipe={true} arrows={true}>
              <div className="each-slide">
                <p
                  style={{
                    color: "#ffffff",
                    fontWeight: "bold",
                    fontSize: 30,
                    padding: 40,
                  }}
                >
                  Piwo es una empresa Uruguaya especializada en la fabricación
                  de HELADOS y JUGOS naturales. Además, contamos con una amplia
                  línea de CAFETERÍA, REPOSTERÍA y COMIDAS saladas.
                </p>
                <div>
                  <img src={images[3]} loading="lazy" />
                </div>
              </div>

              <div className="each-slide">
                <p
                  style={{
                    color: "#ffffff",
                    fontWeight: "bold",
                    fontSize: 30,
                    padding: 40,
                  }}
                >
                  De una muy surtida carta de sabores, destacan nuestras
                  propuestas SIN AZÚCAR, opciones VEGANAS, y gustos originales
                  como los helados de FERNET, CERVEZA, ARAZÁ, HIGO Y PERA.
                </p>

                <div>
                  <img src={images[0]} loading="lazy" />
                </div>
              </div>

              <div className="each-slide">
                <p
                  style={{
                    color: "#ffffff",
                    fontWeight: "bold",
                    fontSize: 30,
                    padding: 40,
                  }}
                >
                  También trabajamos el helado Tailandés, una técnica innovadora
                  de elaboración de HELADO EN EL MOMENTO sobre una base de crema
                  americana o chocolate.
                </p>
                <div>
                  <img src={images[1]} loading="lazy" />
                </div>
              </div>

              <div className="each-slide">
                <p
                  style={{
                    color: "#ffffff",
                    fontWeight: "bold",
                    fontSize: 30,
                    padding: 40,
                  }}
                >
                  Utilizamos productos 100% RECICLABLES, BIODEGRADABLES o
                  COMPOSTABLES, tanto para los productos de heladería como de
                  cafetería.
                </p>

                <div>
                  <img src={images[2]} loading="lazy" />
                </div>
              </div>
            </Fade>
          </div>
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
            paddingBottom: 50,
            // background: "linear-gradient(to top, #ffffff, #adceed)",
          }}
        >
          <Grid
            container
            direction={"row"}
            alignItems={"stretch"}
            justifyContent={"center"}
            height={"100%"}
            // padding={10}
            width={"100%"}
            spacing={{ xs: 10, md: 10, lg: 5 }}
            sx={{
              paddingRight: { xs: 0, md: 0 },
              paddingLeft: { xs: 0, md: 0 },
            }}
          >
            <Grid item xs={12} md={12} lg={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div
                  style={{
                    border: "4px solid white",
                    padding: "20px", // Ajusta el espacio interno según tus necesidades
                    maxWidth: "600px", // Ajusta el ancho máximo según tus necesidades
                    margin: "0 auto", // Centra el contenido horizontalmente
                    height: "100%",
                    minWidth: "300px",
                  }}
                >
                  <a href="/sabores/uy">
                    {/* <Image> */}
                    <div
                      style={{
                        width: "100%",
                        height: 200,
                        backgroundImage: `url(${frutosRojos})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        padding: "20px", // Añade un poco de relleno alrededor del texto
                        boxSizing: "border-box", // Incluye el padding en el tamaño total del rectángulo
                      }}
                    >
                      <p
                        style={{
                          fontSize: 60,
                          fontWeight: 700,
                          color: "white", // Cambia el color del texto para que sea visible
                          textAlign: "center", // Alinea el texto en el centro horizontalmente
                          marginBottom: "20px", // Mueve el texto un poco más hacia abajo
                        }}
                      >
                        HELADOS
                      </p>
                    </div>

                    {/* </Image> */}
                  </a>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <a
                      href="/sabores/uy"
                      style={{
                        fontSize: 50,
                        marginTop: 50,
                        fontWeight: "bold",
                      }}
                    >
                      {`VER SABORES>`}
                    </a>
                  </div>
                </div>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={12} lg={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div
                  style={{
                    border: "4px solid white",
                    padding: "20px", // Ajusta el espacio interno según tus necesidades
                    maxWidth: "600px", // Ajusta el ancho máximo según tus necesidades
                    margin: "0 auto", // Centra el contenido horizontalmente
                    height: "100%",
                    minWidth: "300px",
                  }}
                >
                  <a href="/jugos/uy">
                    {/* <Image> */}
                    <div
                      style={{
                        width: "100%",
                        height: 200,
                        backgroundImage: `url(${jugoBack})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        padding: "20px", // Añade un poco de relleno alrededor del texto
                        boxSizing: "border-box", // Incluye el padding en el tamaño total del rectángulo
                      }}
                    >
                      <p
                        style={{
                          fontSize: 60,
                          fontWeight: 700,
                          color: "white", // Cambia el color del texto para que sea visible
                          textAlign: "center", // Alinea el texto en el centro horizontalmente
                          marginBottom: "20px", // Mueve el texto un poco más hacia abajo
                        }}
                      >
                        JUGOS
                      </p>
                    </div>

                    {/* </Image> */}
                  </a>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <a
                      href="/jugos/uy"
                      style={{
                        fontSize: 50,
                        marginTop: 50,
                        fontWeight: "bold",
                      }}
                    >
                      {`VER SABORES>`}
                    </a>
                  </div>
                </div>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={12} lg={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div
                  style={{
                    border: "4px solid white",
                    padding: "20px", // Ajusta el espacio interno según tus necesidades
                    maxWidth: "600px", // Ajusta el ancho máximo según tus necesidades
                    margin: "0 auto", // Centra el contenido horizontalmente
                    height: "100%",
                    minWidth: "300px",
                  }}
                >
                  <a href="/batidos/uy">
                    {/* <Image> */}
                    <div
                      style={{
                        width: "100%",
                        height: 200,
                        backgroundImage: `url(${shake})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        padding: "20px", // Añade un poco de relleno alrededor del texto
                        boxSizing: "border-box", // Incluye el padding en el tamaño total del rectángulo
                      }}
                    >
                      <p
                        style={{
                          fontSize: 60,
                          fontWeight: 700,
                          color: "white", // Cambia el color del texto para que sea visible
                          textAlign: "center", // Alinea el texto en el centro horizontalmente
                          marginBottom: "20px", // Mueve el texto un poco más hacia abajo
                        }}
                      >
                        BATIDOS
                      </p>
                    </div>

                    {/* </Image> */}
                  </a>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <a
                      href="/batidos/uy"
                      style={{
                        fontSize: 50,
                        marginTop: 50,
                        fontWeight: "bold",
                      }}
                    >
                      {`VER SABORES>`}
                    </a>
                  </div>
                </div>
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
                <h1 style={{ color: "#2e2e2e", fontSize: 80 }}>
                  PASTELERÍA A TODA HORA
                </h1>
                <p style={{ color: "#6e6e6e", fontSize: 35, fontWeight: 500 }}>
                  Nuestros postres son <b>elaborados de forma casera</b>{" "}
                  combinando diferentes elementos que hacen de su sabor, textura
                  y color una <b>experiencia exquisita</b>.
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
              <a
                href="https://www.pedidosya.com.uy/restaurantes/montevideo/piwo-cafe-menu?category=71&search=piwo"
                target="_ black"
              >
                <div
                  style={{
                    width: "100%",
                    height: 200,
                    backgroundImage: `url(${piwocafe})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    padding: "20px", // Añade un poco de relleno alrededor del texto
                    boxSizing: "border-box", // Incluye el padding en el tamaño total del rectángulo
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: 300, // Ancho del contenedor
                      height: "fit-content", // Alto del contenedor
                      backgroundColor: "rgba(0, 0, 0, 0.5)", // Color oscuro con transparencia
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 60,
                        fontWeight: 700,
                        color: "white", // Cambia el color del texto para que sea visible
                        textAlign: "center", // Alinea el texto en el centro horizontalmente
                        margin: 0, // Elimina el margen del texto para evitar espacios no deseados
                      }}
                    >
                      PIWO CAFÉ
                    </p>
                  </div>
                </div>

                {/* </Image> */}
              </a>

              <Box
                sx={{
                  width: { xs: "100%", md: "100%" },
                  // minHeight: 200,
                }}
              >
                <p style={{ color: "black", fontSize: 35 }}>
                  Consulta nuestras opciones de <b>platos salados y bebidas</b>,
                  disponibles para llevar.
                </p>
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <a
                href="https://www.pedidosya.com.uy/restaurantes/montevideo/piwo-resto-menu?category=71&search=piwo"
                target="_ black"
              >
                <div
                  style={{
                    width: "100%",
                    height: 200,
                    backgroundImage: `url(${piwosalado})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    padding: "20px", // Añade un poco de relleno alrededor del texto
                    boxSizing: "border-box", // Incluye el padding en el tamaño total del rectángulo
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: 300, // Ancho del contenedor
                      height: "fit-content", // Alto del contenedor
                      backgroundColor: "rgba(0, 0, 0, 0.5)", // Color oscuro con transparencia
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 60,
                        fontWeight: 700,
                        color: "white", // Cambia el color del texto para que sea visible
                        textAlign: "center", // Alinea el texto en el centro horizontalmente
                        margin: 0, // Elimina el margen del texto para evitar espacios no deseados
                      }}
                    >
                      PIWO RESTÓ
                    </p>
                  </div>
                </div>

                {/* </Image> */}
              </a>

              <Box
                sx={{
                  width: { xs: "100%", md: "100%" },
                  // minHeight: 200,
                }}
              >
                <p style={{ color: "black", fontSize: 35 }}>
                  Una extensa carta de platos <b>SALADOS</b> y <b>BEBIDAS</b>{" "}
                  disponible para llevar online.
                </p>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          width={"100%"}

          // sx={{ background: "linear-gradient(to bottom, #D6D9D6, #ffffff)" }}
        >
          <Grid
            container
            width={"100%"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              paddingRight: 5,
              paddingLeft: 5,
              paddingBottom: 10,
            }}
          >
            <Grid item xs={12} md={5} width={"100%"}>
              <h1 style={{ color: "#2e2e2e", fontSize: 80 }}>
                NUESTROS LOCALES
              </h1>
              <p style={{ color: "#6e6e6e", fontSize: 35, fontWeight: 500 }}>
                <b>LOCAL COMERCIAL:</b> Sarandí 340, Ciudad Vieja.
              </p>

              <p style={{ color: "#6e6e6e", fontSize: 35, fontWeight: 500 }}>
                <b>CASONA</b> del eco parque Villa Dolores.
              </p>

              <p style={{ color: "#6e6e6e", fontSize: 35, fontWeight: 500 }}>
                <b>FOOD TRUCK</b> del eco parque Villa Dolores.
              </p>
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
            <b style={{ color: "#2e2e2e" }}>SEGUÍNOS!</b>
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
