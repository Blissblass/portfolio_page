import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Paragraph from "../components/paragraph";
import Layout from "../components/layouts/single-column";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import { IoLogoLinkedin, IoLogoGithub, IoMail } from "react-icons/io5";
import Image from "next/image";
import theme from "../lib/theme";

import thumbMycoTrack from "../public/images/projects/mycotrack.png";
import thumbKomishon from "../public/images/projects/komishon.png";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("#f4f4f4", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        I&apos;m a full-stack developer based in{" "}
        <span title="Turkey" aria-label="Turkey">
          TR
        </span>
        !
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Eray Alkış
          </Heading>
          <Text color={theme.colors.redLight}>Full-Stack Engineer</Text>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor={theme.colors.redLight}
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/me.png"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          👨🏽‍💻 whoami
        </Heading>
        <Paragraph>
          I was formerly a full-stack developer at{" "}
          <Link variant="red-link" href="https://agentnoon.com/" isExternal>
            Agentnoon
          </Link>
          , where I built various components and API&apos;s for use by leading
          companies around the world. Based in Bursa, I have a passion for all
          things code, with an ambition to create intuitive, simple and
          performant user experiences. I aspire to grow my skills as a developer
          every day, and I&apos;m currently in search of a full-time opportunity
          in hopes of starting a new challenge.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/work" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} variant="red-button">
              Experience
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          🤝 Community Involvement
        </Heading>
        <Paragraph>
          Giving back to my community is a joy for me; I help develop various
          open source projects, as well as teach and mentor aspiring developers.
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          🍿 Off-hours
        </Heading>
        <Paragraph>
          When I&apos;m not deep in code, one of my hobbies is writing. 📝 To
          practice critical thinking and problem solving skills, I like to
          immerse myself in thought, building intricate worlds and characters
          with intertwined stories.
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          🕸 On the web
        </Heading>
        <List>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/eray-alkış-83ab9519b"
              isExternal
            >
              <Button
                variant="ghost"
                colorScheme="red"
                color={theme.colors.redLight}
                leftIcon={<IoLogoLinkedin />}
              >
                erayalkış
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/erayalkis" isExternal>
              <Button
                variant="ghost"
                colorScheme="red"
                color={theme.colors.redLight}
                leftIcon={<IoLogoGithub />}
              >
                erayalkis
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:erayalkis@hotmail.com" isExternal>
              <Button
                variant="ghost"
                colorScheme="red"
                color={theme.colors.redLight}
                leftIcon={<IoMail />}
              >
                erayalkis [at] hotmail.com
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
      <Section delay={0.4}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://github.com/erayalkis/mycotrack_frontend"
            title="MycoTrack"
            thumbnail={thumbMycoTrack}
          >
            An analytical dashboard and a management system with a focus on
            mushroom growth cycles and substrate efficiency.
          </GridItem>
          <GridItem
            href="https://github.com/erayalkis/komishon"
            title="Komishon"
            thumbnail={thumbKomishon}
          >
            A desktop application that assists artists and alike in tracking
            client commissions by providing them with interactive analytics.
          </GridItem>
        </SimpleGrid>
        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} variant="red-button">
              Projects
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
);

export default Home;
