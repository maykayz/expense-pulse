"use client";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import {Theme} from "@radix-ui/themes";
import {Box} from "@radix-ui/themes";
import Sidebar from "./components/sidebar/index";
import {AppProgressBar as ProgressBar} from "next-nprogress-bar";

export default function RootLayout({children}: {children: React.ReactNode}) {
  const sidebarWidth = 100;
  return (
    <html lang="en">
      <body>
        <Theme>
          <div className="flex flex-row h-screen bg-gray-900 overflow-hidden">
            <Box>
              <Sidebar width={sidebarWidth} />
            </Box>
            <Box className="bg-white rounded-3xl p-7 m-2" style={{width: `calc(100% - ${sidebarWidth}px)`}}>
              {children}
              <ProgressBar height="4px" color="rgb(168 85 247)" options={{showSpinner: true}} shallowRouting />
            </Box>
          </div>
        </Theme>
      </body>
    </html>
  );
}
