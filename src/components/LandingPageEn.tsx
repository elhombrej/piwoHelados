import * as React from "react";
import { Box, Grid } from "@mui/material";
import piwologocolor from "/piwologocolor.png";
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
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "react-slideshow-image/dist/styles.css";
import { Slide as SlideShow } from "react-slideshow-image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { divIcon } from "leaflet";
import { renderToString } from "react-dom/server";
import backImg from "/back.png";
import shake from "/shake.png";
import NavBar from "./NavBar";
import FooterEN from "./FooterEN";

const images = [piwoheader, sandwich, piwojugos, piwolocal1];

function LandingPageEn() {
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

  const materialIcon = divIcon({
    html: renderToString(<LocationOnIcon color="primary" />),
  });

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
                  Piwo is a Uruguayan company specialized in the production of
                  ICE CREAM and natural JUICES. Additionally, we have an
                  extensive line of COFFEE, PASTRIES, and savory FOOD.
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
                  From a very varied flavor menu, our SUGAR-FREE proposals stand
                  out, VEGAN options, and original flavors such as FERNET, BEER,
                  ARAZÁ, FIG, and PEAR ice creams.
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
                  We also work with Thai ice cream, an innovative technique for
                  making ICE CREAM ON THE SPOT on a base of American cream or
                  chocolate.
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
                  We use 100% RECYCLABLE, BIODEGRADABLE, or COMPOSTABLE
                  products, both for ice cream and cafeteria products.
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
                    padding: "20px", // Adjust internal space according to your needs
                    maxWidth: "600px", // Adjust maximum width according to your needs
                    margin: "0 auto", // Center content horizontally
                    height: "100%",
                    minWidth: "300px",
                  }}
                >
                  <a href="/sabores/en">
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
                        padding: "20px", // Add some padding around the text
                        boxSizing: "border-box", // Include padding in the total size of the rectangle
                      }}
                    >
                      <p
                        style={{
                          fontSize: 60,
                          fontWeight: 700,
                          color: "white", // Change text color to make it visible
                          textAlign: "center", // Align text center horizontally
                          marginBottom: "20px", // Move text a bit downwards
                        }}
                      >
                        ICE CREAM
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
                      href="/sabores/en"
                      style={{
                        fontSize: 50,
                        marginTop: 50,
                        fontWeight: "bold",
                      }}
                    >
                      {`SEE FLAVORS>`}
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
                    padding: "20px", // Adjust internal space according to your needs
                    maxWidth: "600px", // Adjust maximum width according to your needs
                    margin: "0 auto", // Center content horizontally
                    height: "100%",
                    minWidth: "300px",
                  }}
                >
                  <a href="/jugos/en">
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
                        padding: "20px", // Add some padding around the text
                        boxSizing: "border-box", // Include padding in the total size of the rectangle
                      }}
                    >
                      <p
                        style={{
                          fontSize: 60,
                          fontWeight: 700,
                          color: "white", // Change text color to make it visible
                          textAlign: "center", // Align text center horizontally
                          marginBottom: "20px", // Move text a bit downwards
                        }}
                      >
                        JUICES
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
                      href="/jugos/en"
                      style={{
                        fontSize: 50,
                        marginTop: 50,
                        fontWeight: "bold",
                      }}
                    >
                      {`SEE FLAVORS>`}
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
                    padding: "20px", // Adjust internal space according to your needs
                    maxWidth: "600px", // Adjust maximum width according to your needs
                    margin: "0 auto", // Center content horizontally
                    height: "100%",
                    minWidth: "300px",
                  }}
                >
                  <a href="/batidos/en">
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
                        padding: "20px", // Add some padding around the text
                        boxSizing: "border-box", // Include padding in the total size of the rectangle
                      }}
                    >
                      <p
                        style={{
                          fontSize: 60,
                          fontWeight: 700,
                          color: "white", // Change text color to make it visible
                          textAlign: "center", // Align text center horizontally
                          marginBottom: "20px", // Move text a bit downwards
                        }}
                      >
                        SMOOTHIES
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
                      href="/batidos/en"
                      style={{
                        fontSize: 50,
                        marginTop: 50,
                        fontWeight: "bold",
                      }}
                    >
                      {`SEE FLAVORS>`}
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
                  SPECIALTY COFFEE SHOP
                </h1>
                <p style={{ color: "#6e6e6e", fontSize: 35, fontWeight: 500 }}>
                  We have <b>professional baristas</b> to serve the best coffee
                  in its different versions.
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
                  ALL-DAY PASTRY SHOP
                </h1>
                <p style={{ color: "#6e6e6e", fontSize: 35, fontWeight: 500 }}>
                  Our desserts are <b>homemade</b>, combining different elements
                  that make their flavor, texture, and color an{" "}
                  <b>exquisite experience</b>.
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
                  objectFit: "cover", // Add this property
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
            minHeight: "fit-content",
            padding: 50,
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
              width: "100%",
              marginTop: 5,
            }}
          >
            <Grid item xs={12} md={5}>
              <a
                href="https://www.pedidosya.com.uy/restaurantes/montevideo/piwo-cafe-menu?category=71&search=piwo"
                target="_black"
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
                    padding: "20px",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: 300,
                      height: "fit-content",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 60,
                        fontWeight: 700,
                        color: "white",
                        textAlign: "center",
                        margin: 0,
                      }}
                    >
                      PIWO CAFÉ
                    </p>
                  </div>
                </div>
              </a>

              <Box
                sx={{
                  width: { xs: "100%", md: "100%" },
                }}
              >
                <p style={{ color: "black", fontSize: 35 }}>
                  Check out our options of <b>savory dishes and drinks</b>,
                  available for takeout.
                </p>
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <a
                href="https://www.pedidosya.com.uy/restaurantes/montevideo/piwo-resto-menu?category=71&search=piwo"
                target="_black"
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
                    padding: "20px",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: 300,
                      height: "fit-content",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 60,
                        fontWeight: 700,
                        color: "white",
                        textAlign: "center",
                        margin: 0,
                      }}
                    >
                      PIWO RESTO
                    </p>
                  </div>
                </div>
              </a>

              <Box
                sx={{
                  width: { xs: "100%", md: "100%" },
                }}
              >
                <p style={{ color: "black", fontSize: 35 }}>
                  An extensive menu of <b>SAVORY</b> dishes and <b>DRINKS</b>{" "}
                  available for online takeout.
                </p>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item width={"100%"}>
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
              <h1 style={{ color: "#2e2e2e", fontSize: 80 }}>OUR LOCATIONS</h1>
              <p style={{ color: "#6e6e6e", fontSize: 35, fontWeight: 500 }}>
                We are located in <b>Ciudad Vieja, Sarandi 340</b>
              </p>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ height: "400px", width: "100%", paddingTop: 50 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13088.164123241184!2d-56.21470959999999!3d-34.903322949999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f7f819e03c191%3A0xeedff358b503569!2sPiwo%20Helados!5e0!3m2!1sen!2suy!4v1751493930210!5m2!1sen!2suy"
                width="100%"
                height="100%"
                loading="lazy"
              ></iframe>{" "}
              {/* <MapContainer
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
                      <img loading="lazy" src={piwologocolor} width={"100%"} />
                      <br />
                      {point.name}
                    </Popup>
                  </Marker>
                ))}
              </MapContainer> */}
            </Grid>{" "}
          </Grid>
        </Grid>

        <FooterEN />
      </Grid>
    </>
  );
}

export default LandingPageEn;
