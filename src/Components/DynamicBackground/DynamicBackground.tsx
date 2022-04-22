import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import { Engine } from "tsparticles-engine";
import React from "react";

export class DynamicBackground extends React.Component {
  async customInit(engine: Engine): Promise<void> {
    await loadFirePreset(engine);
  }

  render() {
    const options: any = {
      preset: "fire",
      background: {
        image: "./images/Village_1.jpeg",
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
        },
      },
      particles: {
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1000,
          },
          value: 90,
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0, max: 6 },
        },
      },
      detectRetina: true,
    };

    return <Particles options={options} init={this.customInit} />;
  }
}

export default DynamicBackground;
