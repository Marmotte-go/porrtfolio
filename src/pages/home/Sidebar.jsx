import React from "react";
import marmot from "../../img/marmot-1.png";

import Stack from "@mui/material/Stack";
import styled from '@emotion/styled';


const AnimatedImage = styled.img`
// cursor: pointer;
transform: rotate(${({ rotation }) => rotation}deg);
transform-origin: center;
transition: transform 0.3s ease-in-out;

&:hover {
  transform: rotate(${({ rotation }) => rotation}deg) scale(1.5);
}
`;




const Sidebar = ({ position }) => {
  return (
    <>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems={position === "left" ? "flex-start" : "flex-end"}
        spacing={-2}
        sx={{position: "fixed", left: position === "left" ? "-50px" : "auto", right: position === "left" ? "auto" : "-50px", }}
      >
        <AnimatedImage src={marmot} alt="marmot" width="120px" rotation={position === "left" ? 45 : -45} />
        <AnimatedImage src={marmot} alt="marmot" width="120px" rotation={position === "left" ? 45 : -45} />
        <AnimatedImage src={marmot} alt="marmot" width="120px" rotation={position === "left" ? 45 : -45} />
        <AnimatedImage src={marmot} alt="marmot" width="120px" rotation={position === "left" ? 45 : -45} />
        <AnimatedImage src={marmot} alt="marmot" width="120px" rotation={position === "left" ? 45 : -45} />
        <AnimatedImage src={marmot} alt="marmot" width="120px" rotation={position === "left" ? 45 : -45} />
        <AnimatedImage src={marmot} alt="marmot" width="120px" rotation={position === "left" ? 45 : -45} />
        <AnimatedImage src={marmot} alt="marmot" width="120px" rotation={position === "left" ? 45 : -45} />
        <AnimatedImage src={marmot} alt="marmot" width="120px" rotation={position === "left" ? 45 : -45} />
        <AnimatedImage src={marmot} alt="marmot" width="120px" rotation={position === "left" ? 45 : -45} />

      </Stack>
    </>
  );
};

export default Sidebar;
