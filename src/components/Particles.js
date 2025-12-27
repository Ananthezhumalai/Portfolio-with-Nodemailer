import React from "react";
import Particles from "react-tsparticles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  particlesCanvas: {
    position: "fixed",
    opacity: 0.3,
    top: 0,
    left: 0
  }
}));

const ParticlesBackground = () => {
  const classes = useStyles();

  return (
    <Particles
      className={classes.particlesCanvas}
      options={{
        particles: {
          number: {
            value: 45,
            density: {
              enable: true,
              area: 800
            }
          },
          shape: {
            type: "circle"
          },
          size: {
            value: 8,
            random: true
          },
          opacity: {
            value: 0.5,
            random: true
          },
          move: {
            enable: true,
            speed: 1
          }
        }
      }}
    />
  );
};

export default ParticlesBackground;
