import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { GridItem } from "../components/grid-item";
import Layout from "../components/layouts/single-column";
import Section from "../components/section";

import thumbThDesktop from "../public/images/projects/th_desktop.png";
import thumbStatsy from "../public/images/projects/statsy.png";
import thumbMycoTrack from "../public/images/projects/mycotrack.png";
import thumbKomishon from "../public/images/projects/komishon.png";
import thumbGoFileRuby from "../public/images/projects/gofile_ruby.png";
import thumbToyhouDL from "../public/images/projects/toyhoudl.png";
import thumbRafflr from "../public/images/projects/rafflr.png";
import thumbTaskio from "../public/images/projects/taskio.png";
import thumbSoundio from "../public/images/projects/soundio.png";
import thumbTwatter from "../public/images/projects/twatter.png";

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <GridItem
            href="https://github.com/erayalkis/toyhouse_api"
            title="ToyhouDL Desktop"
            thumbnail={thumbThDesktop}
          >
            A Tauri desktop app that combines the Rafflr and ToyhouDL apps into
            one, giving the user download speeds that&apos;s more than twice as
            faster than before.
          </GridItem>
        </Section>
        <Section>
          <GridItem
            href="https://github.com/erayalkis/statsy"
            title="Statsy"
            thumbnail={thumbStatsy}
          >
            An Express.js app for tracking your machine&apos;s usage statistics
            with efficient logging and lightning-fast API endpoints!
          </GridItem>
        </Section>
        <Section>
          <GridItem
            href="https://github.com/erayalkis/mycotrack_frontend"
            title="MycoTrack"
            thumbnail={thumbMycoTrack}
          >
            An analytical dashboard and a management system with a focus on
            mushroom growth cycles and substrate efficiency.
          </GridItem>
        </Section>
        <Section>
          <GridItem
            href="https://github.com/erayalkis/gofile_ruby"
            title="GoFile-Ruby"
            thumbnail={thumbGoFileRuby}
          >
            A Ruby API wrapper library for the popular content sharing site
            GoFile.io.
          </GridItem>
        </Section>
        <Section>
          <GridItem
            href="https://github.com/erayalkis/komishon"
            title="Komishon"
            thumbnail={thumbKomishon}
          >
            A desktop application written in Rust that assists artists and alike
            in tracking commissions by providing them with interactive
            analytics.
          </GridItem>
        </Section>
        <Section>
          <GridItem
            href="https://github.com/erayalkis/toyhouse_downloader"
            title="ToyhouDL"
            thumbnail={thumbToyhouDL}
          >
            A one-click media downloader written in Golang and Vue.js for the
            original content sharing site Toyhou.se.
          </GridItem>
        </Section>
        <Section>
          <GridItem
            href="https://github.com/erayalkis/toyhouse_raffle_app"
            title="Rafflr"
            thumbnail={thumbRafflr}
          >
            A helper app written in Golang and Vue.js for simplifying raffles
            hosted on Toyhou.se.
          </GridItem>
        </Section>
        <Section>
          <GridItem
            href="https://github.com/erayalkis/productivity_app"
            title="Task.io"
            thumbnail={thumbTaskio}
          >
            An To-Do app written in React and Rails that makes planning easy
            with its simple UI that supports draggable components.
          </GridItem>
        </Section>
        <Section>
          <GridItem
            href="https://github.com/erayalkis/media_sharing_app"
            title="Sound.io"
            thumbnail={thumbSoundio}
          >
            A song sharing app built using React and Rails which integrates with
            AWS S3 for media storage.
          </GridItem>
        </Section>
        <Section>
          <GridItem
            href="https://github.com/erayalkis/twatter"
            title="Twatter"
            thumbnail={thumbTwatter}
          >
            A simple Twitter clone written in React and Rails that focuses on
            homepage algorithms.
          </GridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Projects;
