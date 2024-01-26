import React from 'react'
import {Box} from "@radix-ui/themes";
import {PulseLoader} from "react-spinners";
import theme from "@/app/color";


const loading:React.FC<{}> = () => {
  return (
    <Box className="h-full flex-1 flex flex-row justify-center items-center "><PulseLoader size={10} color={theme.chartPrimaryColor} /></Box>
  )
}

export default loading