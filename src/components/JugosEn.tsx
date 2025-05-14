import * as React from "react";
import { Box, Grid, IconButton } from "@mui/material";
import piwologocolor from "/piwologocolor.png";
import "./App.css";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import backImg from "/back.png";
import NavBar from "./NavBar";
import { juiceFlavorsArrayEn } from "./Flavors";
import FooterEN from "./FooterEN";

function JugosEn() {
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
            // padding: { xs: 0, md: 10 },
            // margin: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          <br />
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
            <IconButton href="/inicio/en">
              <ArrowBackIosIcon sx={{ fontSize: 40, color: "white" }} />
            </IconButton>
            <h1 style={{ fontSize: 100 }}>
              {" "}
              {/* <img
      src={piwojugos}
      style={{
        // position: "absolute",
        // top: "25%",
        // left: "25%",
        width: "300px",
        height: "auto",
      }}
    /> */}
              JUICES
            </h1>
            <br />
          </Box>

          <Grid item xs={10}>
            <p
              style={{
                color: "#5e5e5e",
                fontSize: 35,
                fontWeight: 500,
              }}
            >
              Our juices are sweetened with <b>Stevia</b> and are{" "}
              <b>100% natural</b> in origin. They do not contain{" "}
              <b>colorants, preservatives, or sugars</b>.
            </p>
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
              // marginTop: 5,
              padding: 5,
            }}
          >
            {juiceFlavorsArrayEn.map((element) => {
              return (
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "flex-start" },
                    justifyContent: "center",
                    marginBottom: 5,
                  }}
                >
                  <Box
                    sx={{
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: { xs: "column", md: "row" },
                      gap: 2,
                      // flexWrap: "wrap",
                    }}
                  >
                    <Box>
                      <img src={element.image} width={300} loading="lazy" />
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
                          fontWeight: 700,
                          padding: 10,
                        }}
                      >
                        {element.name}
                      </span>
                      <h2 style={{ color: "#9e9e9e" }}>{element.icons}</h2>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        <FooterEN />
      </Grid>
    </>
  );
}

export default JugosEn;
