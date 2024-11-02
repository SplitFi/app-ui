import { Box, Container, Grid } from "@mutuals/ui";

import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/app/_components/Features/FeatureCard";

export default function HomeFeatures() {
  return (
    <Box my="32">
      <Container maxW="6xl">
        <SectionHeader label={"Embeddable Features"}>
          A Few More Things You’re Going To Love
        </SectionHeader>

        <Grid
          gap={"3"}
          templateColumns={{
            base: "repeat(8, 1fr)",
            lg: "repeat(6, 1fr)",
          }}
        >
          <FeatureCard
            index={1}
            heading="All fungible assets"
            description="Major ERC20s tokens and ETH are supported. Allows for importing custom ERC20 tokens."
            colSpan={{ base: 8, lg: 4 }}
          ></FeatureCard>

          <FeatureCard
            index={2}
            heading="Open Source"
            description="Mutuals is open source and decentralized, with no owner, upgradability, or special privileges."
            colSpan={{ base: 8, lg: 2 }}
          ></FeatureCard>

          <FeatureCard
            index={3}
            heading="Multiple Wallets"
            description="Connect multiple wallets at once. Intuitive multi-account overview about incoming and outgoing funds."
            colSpan={{ base: 8, lg: 2 }}
          ></FeatureCard>

          <FeatureCard
            index={4}
            heading="Free To Use"
            description="Zero protocol fees. Optional donation based funding program with special rewards."
            colSpan={{ base: 8, lg: 2 }}
          ></FeatureCard>

          <FeatureCard
            index={5}
            heading="Gnosis Safe"
            description="Connect multiple wallets at once. Intuitive multi-account overview about incoming and outgoing funds."
            colSpan={{ base: 8, lg: 2 }}
          ></FeatureCard>
        </Grid>
      </Container>
    </Box>
  );
}
