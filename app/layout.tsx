"use client";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import {Theme} from "@radix-ui/themes";
import {Box} from "@radix-ui/themes";
import Sidebar from "./components/sidebar/index";
import {AppProgressBar as ProgressBar} from "next-nprogress-bar";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import color from "@/app/color"

const queryClient = new QueryClient();

export default function RootLayout({children}: {children: React.ReactNode}) {
  const sidebarWidth = 100;
  return (
    <html lang="en">
      <body>
        <Theme>
          <div className="flex flex-row h-screen bg-theme-color-primary overflow-hidden">
            <Box>
              <Sidebar width={sidebarWidth} />
            </Box>
            <Box className="bg-white rounded-3xl p-7 m-2" style={{width: `calc(100% - ${sidebarWidth}px)`}}>
              <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
              <ProgressBar height="4px" color={color.tertiary} options={{showSpinner: true}} shallowRouting />
            </Box>
          </div>
        </Theme>
      </body>
    </html>
  );
}
