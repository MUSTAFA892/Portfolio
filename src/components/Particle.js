import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 60, // Slightly reduced for elegance
            density: {
              enable: true,
              value_area: 900, // Tighter density for refined distribution
            },
          },
          color: {
            value: ["#c770f0", "#cd5ff8", "#be6adf"], // Purple hues from theme
          },
          shape: {
            type: "circle",
            stroke: {
              width: 1.5,
              color: "#68187a", // Darker purple stroke for contrast
              opacity: 0.8,
            },
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 1.2,
              opacity_min: 0.2,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: true,
              speed: 3,
              size_min: 2,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 120,
            color: "#c770f0", // Matches --imp-text-color
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3, // Faster for dynamic motion
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out", // Particles disappear when leaving canvas
            bounce: false,
            attract: {
              enable: true,
              rotateX: 1000, // Enhanced orbital motion
              rotateY: 1500,
            },
            trail: {
              enable: true,
              length: 10,
              fillColor: "#68187a", // Dark purple trail
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: ["grab", "repulse"], // Combined for richer interaction
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 150,
              line_linked: {
                opacity: 0.5,
              },
            },
            repulse: {
              distance: 120,
              duration: 0.5,
            },
            push: {
              particles_nb: 4, // More particles on click for impact
            },
          },
        },
        retina_detect: true,
        background: {
          color: "transparent", // Inherits #tsparticles gradient from styles.css
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
      }}
    />
  );
}

export default Particle;