import React from 'react'
import Image from 'next/image'
import { Text } from '@radix-ui/themes'
import Link from "next/link";

const Error:React.FC<{}> = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
        <Image src="assets/images/error.svg" alt="error image" width="150" height="150"/>
        <Text size="5" weight="bold" mt="7" mb="4">Sorry, the page you are looking for does not exist.</Text>
        <Link href="/"><Text size="3" weight="bold">Return Home</Text></Link>
    </div>
  )
}

export default Error