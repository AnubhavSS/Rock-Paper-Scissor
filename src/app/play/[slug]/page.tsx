"use client";
import Lottie from "lottie-react";
import { Container, Box, Typography, Stack, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Win from "./win.json";
import Lose from "./lose.json";

const Play = ({ params }: { params: { slug: string } }) => {
  const label = ["rock", "scissor", "paper"];
  const imgs = ["/assets/fist.png", "/assets/scissor.png", "/assets/paper.png"];

  const [timer, settimer] = useState<number>(3);
  const [score, setscore] = useState<number>(0);
  const [winner, setwinner] = useState<null | number>(null);
  const [pc, setpc] = useState<null | number>(null);
  const router = useRouter();

  const calculateAnswer = (ans: number) => {
    setpc(ans);
    const picked = label[parseInt(params?.slug)];
    const cpu = label[ans];
    if (picked === cpu) return 0;
    else if (picked === "scissor" && cpu === "paper") return 1;
    else if (cpu === "scissor" && picked === "paper") return -1;
    else if (picked === "rock" && cpu === "paper") return -1;
    else if (picked === "paper" && cpu === "rock") return 1;
    else if (picked === "scissor" && cpu === "rock") return -1;
    else if (picked === "rock" && cpu === "scissor") return 1;
  };

  useEffect(() => {
    const randomValue = Math.floor(Math.random() * 3);

    const intervalId = setInterval(() => {
      settimer((prev) => prev - 1);
    }, 1000);

    if (timer === -1) {
      clearInterval(intervalId); // Clear the interval when timer becomes 0
      const ans = calculateAnswer(randomValue);
      if (ans === 1) {
        setwinner(1);
        setscore((prev) => prev + 1);
      } else if (ans === -1) {
        setscore((prev) => prev - 1);
        setwinner(-1);
      } else if (ans === 0) {
        setwinner(0);
      }
    }

    return () => {
      clearInterval(intervalId); // Cleanup the interval when the component unmounts
    };
  }, [timer]);

  return (
    <Container>
      {winner && (
        <Box
          m={"22px auto"}
          sx={{
            cursor: "pointer",
            height: 100,
            width: 300,

            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {winner === 1 ? (
            <Lottie animationData={Win} autoPlay={true} loop />
          ) : (
            <Lottie animationData={Lose} autoPlay={true} loop />
          )}
        </Box>
      )}

      <Stack mt={16} sx={{ flexDirection: { md: "row", xs: "column" } }}>
        <Stack m={"25px auto"} direction={"column"}>
          <Typography
            textAlign={"center"}
            sx={{
              fontWeight: 400,
              color: "#FFF",
              fontSize: { md: "40px", xs: "20px" },
            }}
          >
            Your Pick
          </Typography>
          {winner === 1 ? (
            <Box
              sx={{
                height: 240,
                width: 240,
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: 30,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  height: 210,
                  width: 210,
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderRadius: 27,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ImageContainer
                  img={imgs[parseInt(params?.slug)]}
                  color={"blue"}
                />
              </Box>
            </Box>
          ) : (
            <ImageContainer img={imgs[parseInt(params?.slug)]} color={"blue"} />
          )}
        </Stack>
        {winner !== null && (
          <Box m={"25px auto"}>
            {
              <Typography
                sx={{
                  fontWeight: 700,
                  color: "#FFF",
                  fontSize: { md: "40px", xs: "20px" },
                }}
              >
                {winner === 1 ? "You Win" : winner === -1 ? "You Lose" : "Draw"}
              </Typography>
            }
            <Button variant="contained" onClick={() => router.push("/")}>
              Play Again
            </Button>
          </Box>
        )}
        <Stack direction={"column"} m={"25px auto"}>
          <Typography
            textAlign={"center"}
            sx={{
              fontWeight: 400,
              color: "#FFF",
              fontSize: { md: "40px", xs: "20px" },
            }}
          >
            CPU Pick
          </Typography>
          {timer !== -1 ? (
            <Box
              m={"25px auto"}
              sx={{
                height: 190,
                width: 190,
                backgroundColor: "rgba(0,0,0,0.6)",
                borderRadius: 27,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  color: "#FFF",
                  fontSize: { md: "100px", xs: "80px" },
                }}
              >
                {timer}
              </Typography>
            </Box>
          ) : winner === -1 ? (
            <Box
              sx={{
                height: 240,
                width: 240,
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: 30,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  height: 210,
                  width: 210,
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderRadius: 27,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ImageContainer img={imgs[pc]} color={"red"} />
              </Box>
            </Box>
          ) : (
            <ImageContainer img={imgs[pc]} color={"red"} />
          )}
        </Stack>
      </Stack>
    </Container>
  );
};

const ImageContainer = ({ img, color }: { img: string; color: string }) => {
  return (
    <Box
      id="paper"
      m={"28px auto"}
      bgcolor={"white"}
      sx={{
        cursor: "pointer",
        height: 180,
        width: 180,
        border: `20px solid ${color}`,
        boxShadow: `2px 5px 10px red ${color}`,
        borderRadius: 24,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src={img} alt="paper" height={120} width={120} />
    </Box>
  );
};

export default Play;
