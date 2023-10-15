"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "./page.module.css";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
 Stack,
  Slide,

} from "@mui/material";
import Hero from "@/components/Hero";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box
        justifyContent={"space-evenly"}
        alignItems={"center"}
        sx={{
          border: "2px solid white",
          width: "50vw",
          height: "15vh",
          p: 2,
          marginX: "auto",
          marginTop: 4,
          borderRadius: 10,
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Switch to column on small screens
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            color: "#FFF",
            fontSize: { md: "40px", xs: "20px" },
          }}
        >
          Rock
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            color: "#FFF",
            fontSize: { md: "40px", xs: "20px" },
          }}
        >
          Paper
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            color: "#FFF",
            fontSize: { md: "40px", xs: "20px" },
          }}
        >
          Scissors
        </Typography>
      </Box>
      <Hero />
      <Button
        sx={{
          position: "fixed",
          bottom: "20px", // Adjust as needed to control the distance from the bottom
          right: "20px", // Adjust as needed to control the distance from the right
        }}
        variant="outlined"
        color="error"
        onClick={handleClickOpen}
      >
        Rules
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle textAlign={'center'}>{"Rules"}</DialogTitle>
        <DialogContent >
          <Stack direction={'row'} justifyContent={'space-evenly'}>
        <Image src={'/assets/paper.png'} alt="paper" width={50} height={50}/>
        <Typography mx={2}>Beats <Typography sx={{fontSize:'20px'}}>&rarr; &rarr;</Typography></Typography>
        <Image src={'/assets/fist.png'} alt="fist" width={50} height={50}/>
        </Stack>

        <Stack direction={'row'} justifyContent={'space-evenly'}>
        <Image src={'/assets/scissor.png'} alt="paper" width={50} height={50}/>
        <Typography mx={2}>Beats <Typography sx={{fontSize:'20px'}}>&rarr; &rarr;</Typography></Typography>
        <Image src={'/assets/paper.png'} alt="fist" width={50} height={50}/>
        </Stack>

        <Stack direction={'row'} justifyContent={'space-evenly'}>
        <Image src={'/assets/fist.png'} alt="paper" width={50} height={50}/>
        <Typography mx={2}>Beats <Typography sx={{fontSize:'20px'}}>&rarr; &rarr;</Typography></Typography>
        <Image src={'/assets/scissor.png'} alt="fist" width={50} height={50}/>
        </Stack>

        </DialogContent>
      </Dialog>
    </Box>
  );
}
