
import React,{Children, createContext, useContext} from "react";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const User=createContext('')

const Hero = () => {
  const router=useRouter()
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
  
    router.push(`/play/${e.currentTarget.id}`);
  };

  return (
    
    <Box margin={5}>
      <Stack direction={'column'} justifyContent={'center'} alignItems={'center'}>
      <Stack direction={'row'} >
      <Box
      onClick={handleClick}
      id="0"
      m={4}
  bgcolor={"white"}
  sx={{
    cursor: 'pointer',
    height: 160,
    width: 160,
    border: "20px solid red",
    boxShadow: "2px 5px 10px red",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "transform 0.7s", // Add a smooth transition for the scale
    ":hover": {
      transform: "scale(1.2)", // Scale on hover
    },
  }}
  
>
  <Image src={"/assets/fist.png"} alt="fist" height={100} width={100} />
</Box>

        <Box
         onClick={handleClick}
    id="1"
        m={4}
          bgcolor={"white"}
          sx={{
            cursor:'pointer',
            height: 160,
            width: 160,
            border: "20px solid yellow",
            boxShadow: "2px 5px 10px yellow",
            borderRadius: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 0.7s", // Add a smooth transition for the scale
            ":hover": {
              transform: "scale(1.2)", // Scale on hover
            },
          }}
        >
          <Image
          
            src={"/assets/scissor.png"}
            alt="fist"
            height={100}
            width={100}
          />
        </Box>
      </Stack>
      <Box
       onClick={handleClick}
      id="2"
      m={4}
        bgcolor={"white"}
        sx={{
          cursor:'pointer',
          height: 160,
          width: 160,
          border: "20px solid purple",
          boxShadow: "2px 5px 10px purple",
          borderRadius: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "transform 0.7s", // Add a smooth transition for the scale
          ":hover": {
            transform: "scale(1.2)", // Scale on hover
          },
        }}
      >
        <Image src={"/assets/paper.png"} alt="paper" height={100} width={100} />
      </Box>
      </Stack>
    
    </Box>
  );
};
export const useUser=()=>useContext(User)
export default Hero;
