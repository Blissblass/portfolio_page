import { Container, Heading, SimpleGrid, Link, Text } from "@chakra-ui/react";
import { GridItem } from "../components/grid-item";
import Layout from "../components/layouts/single-column";
import Section from "../components/section";

import thumbCadenzabox from "../public/images/work/cadenzabox.png";
import thumbAgentnoon from "../public/images/work/agentnoon.png";
import thumbFreelance from "../public/images/work/freelance.jpg";

const Work = () => (
  <Layout title="Recent work">
    <Container>
      <Text>
        Need a detailed review? Check out{" "}
        <Link variant={"red-link"} href="/docs/resume.pdf" isExternal>
          my resume
        </Link>
        !
      </Text>
      <Heading as="h3" fontSize={20} my={4}>
        Recent work
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <GridItem
            href="https://cadenzabox.com"
            title="Cadenzabox"
            thumbnail={thumbCadenzabox}
          >
           &quot;A library as unique as your music.&quot;
           Cadenzabox makes the music search and delivery process simple and intuitive.
          </GridItem>
        </Section>
        <Section>
          <GridItem
            href="https://agentnoon.com"
            title="Agentnoon"
            thumbnail={thumbAgentnoon}
          >
            An OpEx-focused app for simplifying the headcount planning process
            for companies.
          </GridItem>
        </Section>
        <Section>
          <GridItem title="Freelance" thumbnail={thumbFreelance}>
            Self-employed, full of exciting opportunities with amazing
            companies.
          </GridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Work;
