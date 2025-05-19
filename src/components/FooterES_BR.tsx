import React from "react";
import { Grid } from "@mui/material";
import piwologocolor from "/piwologocolor.png";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterES_BR = () => {
  return (
    <>
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
      <Grid
        item
        xs={12}
        style={{ backgroundColor: "gray", width: "100%", textAlign: "center" }}
      >
        <Typography
          fontFamily="monospace"
          sx={{ fontSize: { xs: "9px", sm: "15px" } }}
        >
          Desarrolle su sitio web con{" "}
          <a href="https://padronsistemas.com" style={{ color: "blue" }}>
            padronsistemas.com
          </a>
        </Typography>
      </Grid>
    </>
  );
};
export default FooterES_BR;
