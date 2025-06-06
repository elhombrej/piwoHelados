import * as React from "react";
import { Box, Grid, IconButton } from "@mui/material";
import piwologocolor from "/piwologocolor.png";
import piwosalado from "/piwosalado.png";
import taccLogo from "/sinTacc.png";
import "./App.css";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import "leaflet/dist/leaflet.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import backImg from "/back.png";
import NavBar from "./NavBar";
import { flavorsArrayNoSugarEn, flavorsArrayEn } from "./Flavors";
import FooterEN from "./FooterEN";

function Sabores() {
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
            <IconButton href="/inicio/en">
              <ArrowBackIosIcon sx={{ fontSize: 40, color: "white" }} />
            </IconButton>
            <h1 style={{ fontSize: 100 }}>FLAVORS</h1>
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
              We apply the 'Know How' of the manufacturing of
              <b> Italian artisanal ice cream</b> through machinery, techniques,
              and distinguished training from our
              <b> master ice cream maker</b>.
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
              paddingTop: 15,
            }}
          >
            {flavorsArrayEn.map((element) => {
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

          <Grid item xs={10}>
            <p
              style={{
                color: "#6e6e6e",
                fontSize: 35,
                fontWeight: 500,
              }}
            >
              <b>Sugar-free flavors available:</b> Chocolate, Lemon,
              Passionfruit, Strawberry, Vanilla
            </p>
          </Grid>
        </Grid>
        <FooterEN />{" "}
      </Grid>
    </>
  );
}

export default Sabores;
