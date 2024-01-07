import {Flex, Box, Heading, Button} from "@radix-ui/themes";
import Header from "../components/header";
import {PortfolioCard, AssetCard} from "../components/card";

const Overview = () => {
  return (
    <div>
      <Header title="Overview" />
      <Flex mb="3" gap="4">
        <Heading className="w-2/6">Total Balance</Heading>
        <Heading className="w-1/6">Wallets</Heading>
      </Flex>
      <Flex gap="4">
        <Box className="w-2/6">
          <PortfolioCard />
        </Box>
        <Box className="w-1/6">
          <AssetCard color="bg-orange-100" />
        </Box>
        <Box className="w-1/6">
          <AssetCard color="bg-purple-100" />
        </Box>
        <Box className="w-1/6">
          <AssetCard color="bg-green-100" />
        </Box>
      </Flex>
    </div>
  );
};
export default Overview;
