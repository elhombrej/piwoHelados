import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
} from "@mui/material";
import { useState } from "react";
import heladosImg from "./images/helados.png";
import piwologocolor from "./images/piwologocolor.png";
import piwologo from "./images/piwologo.png";
import pedidosyalogo from "./images/pedidosya.svg";
import piwoheader from "./images/piwoheader.jpg";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Fade as FadeReveal } from "react-reveal";
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';


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

const images = [
  piwoheader,
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

function App(props: Props) {
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
              justifyContent: "space-evenly",
              display: "flex",
            }}
          >
            {/* <h1>CAFE</h1> */}
            <div>
              {" "}
              <a href="https://www.facebook.com/piwohelados" target="_ black">
                <FacebookIcon
                  style={{ color: "#ffffff", fontSize: 40, marginRight: 30 }}
                />
              </a>
              <a href="https://www.instagram.com/piwohelados" target="_ black">
                <InstagramIcon style={{ color: "#ffffff", fontSize: 40 }} />
              </a>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                margin: 0,
              }}
            >
              <img src={piwologo} width={"150px"} />
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 30,
              }}
            >
              MAS QUE HELADOS
            </p>
            {/* <h1>JUGOS NATURALES</h1> */}
          </Box>
          {/* </Toolbar> */}
        </AppBar>
      </HideOnScroll>
      {/* <Grid
        item
        style={{
          backgroundColor: "#ffffff",
          backgroundImage: `url(${piwoheader})`, // Utiliza la imagen de fondo
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Ajusta según tus necesidades
          width: "100vw",
          height: "400px",
          minHeight: "400px",
          marginTop: 50,
        }}
      ></Grid>{" "} */}
      <Grid
        item
        style={{
          maxWidth: "100%",
          height: "400px",
          minHeight: "400px",
          marginTop: 90,
        }}
      >
        <Fade indicators={true} canSwipe={true} arrows={false}>
          <div className="each-slide">
            <div>
              <img src={images[0]} />
            </div>
            <p>First Slide</p>
          </div>
          <div className="each-slide">
            <p>Second Slide</p>
            <div>
              <img src={images[1]} />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={images[2]} />
            </div>
            <p>Third Slide</p>
          </div>
        </Fade>
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
          alignItems={"center"}
          justifyContent={"center"}
          spacing={5}
        >
          <Grid item xs={12} md={3}>
            <FadeReveal bottom cascade>
              <Card>
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h1 style={{ fontSize: 60, fontWeight: "bold" }}>SABORES</h1>

                  {/* <Button variant="text" size="large"> */}
                  <h2>
                    Cada uno de nuestros sabores nace de una receta única. Cada
                    uno de nuestros sabores nace de una receta única. Cada uno
                    de nuestros sabores nace de una receta única.
                  </h2>
                  <h2>
                    Cada uno de nuestros sabores nace de una receta única.
                  </h2>
                  <h2>
                    Cada uno de nuestros sabores nace de una receta única.
                  </h2>
                  {/* </Button> */}
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
                </CardContent>
              </Card>
            </FadeReveal>
          </Grid>

          <Grid item xs={12} md={3}>
            <FadeReveal bottom cascade>
              <Card>
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h1 style={{ fontSize: 60, fontWeight: "bold" }}>SABORES</h1>

                  {/* <Button variant="text" size="large"> */}
                  <h2>
                    Cada uno de nuestros sabores nace de una receta única. Cada
                    uno de nuestros sabores nace de una receta única. Cada uno
                    de nuestros sabores nace de una receta única.
                  </h2>
                  <h2>
                    Cada uno de nuestros sabores nace de una receta única.
                  </h2>
                  <h2>
                    Cada uno de nuestros sabores nace de una receta única.
                  </h2>
                  {/* </Button> */}
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
                </CardContent>
              </Card>
            </FadeReveal>
          </Grid>

          <Grid item xs={12} md={3}>
            <FadeReveal bottom cascade>
              <Card>
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h1 style={{ fontSize: 60, fontWeight: "bold" }}>SABORES</h1>

                  {/* <Button variant="text" size="large"> */}
                  <h2>
                    Cada uno de nuestros sabores nace de una receta única. Cada
                    uno de nuestros sabores nace de una receta única. Cada uno
                    de nuestros sabores nace de una receta única.
                  </h2>
                  <h2>
                    Cada uno de nuestros sabores nace de una receta única.
                  </h2>
                  <h2>
                    Cada uno de nuestros sabores nace de una receta única.
                  </h2>
                  {/* </Button> */}
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
                </CardContent>
              </Card>
            </FadeReveal>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        style={{
          backgroundColor: "#D6D9D6",
          background: "solid",
          width: "100%",
          height: "400px",
          minHeight: "400px",
          padding: 50,
        }}
      >
        <img
          src={pedidosyalogo}
          alt=""
          width={300}
          // style={{ maxWidth: "100vw" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Card>
            <a
              href="https://www.pedidosya.com.uy/restaurantes/montevideo/piwo-resto-menu?category=71&search=piwo"
              target="_ black"
              style={{ fontSize: 100 }}
            >
              PIWO RESTO
            </a>
          </Card>

          <Card>
            <a
              href="https://www.pedidosya.com.uy/restaurantes/montevideo/piwo-cafe-menu?category=71&search=piwo"
              target="_ black"
              style={{ fontSize: 100 }}
            >
              PIWO CAFE
            </a>
          </Card>
        </div>
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
          <div>
            <a href="https://www.instagram.com/piwohelados" target="_ black">
              <InstagramIcon style={{ fontSize: 40, marginRight: 30 }} />
            </a>
            <a href="https://www.facebook.com/piwohelados" target="_ black">
              <FacebookIcon style={{ fontSize: 40, marginRight: 30 }} />
            </a>
          </div>
        </div>
      </Grid>
      {/* <Grid
          item
          sx={{
            backgroundColor: "#D28E31",
            background: "solid",
            width: "100vw",
            height: "400px",
          }}
        >
          Piwo
        </Grid> */}
    </Grid>
  );
}

export default App;
