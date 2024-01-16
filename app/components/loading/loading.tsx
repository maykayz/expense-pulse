import React from 'react'
import {Box} from "@radix-ui/themes";
import {DotLoader} from "react-spinners";

const loading:React.FC<{}> = () => {
  return (
    <Box className="h-full flex-1 flex flex-row justify-center items-center "><DotLoader color="#111827" /></Box>
  )
}

export default loading