/*
 * Created Date: Wednesday May 12th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Friday, May 14th 2021, 5:29:24 pm
 * Modified By: Amir Dorgham
 * -----
 */
import React from "react";
import tw from "twin.macro";
import Social from "components/Icons/socials";
import Text from "components/titles/footer";
import Description from "components/descriptions/footer";
import Separator from "components/separators/default";
import { ReactComponent as FbIcon } from "assets/images/icons/fb.svg";
import { ReactComponent as InstagramIcon } from "assets/images/icons/instagram.svg";
import { ReactComponent as DiscordIcon } from "assets/images/icons/discord.svg";
import { ReactComponent as SkypeIcon } from "assets/images/icons/skype.svg";
import { ReactComponent as TwitterIcon } from "assets/images/icons/twitter.svg";
import { ReactComponent as LogoImage } from "assets/images/logos/logo.svg";

const Container = tw.div`mb-4 sm:px-3 flex relative bottom-0 flex-col w-full py-8`;
const Row = tw.div`  flex flex-col lg:flex-row  justify-evenly w-full items-center`;
const MainRow = tw(
  Row
)`grid grid-cols-4  gap-8 flex flex-wrap items-center lg:items-start`;
const Col = tw.div`pt-2 flex flex-col items-center `;
const RowContainer = tw.div`flex flex-row lg:flex-col flex-wrap justify-center`;
const LargeIconsContainer = tw.div`flex flex-row lg:flex-col my-2`;
const WideDescription = tw(Description)`mt-6 md:mt-16 w-8/12 text-center`;
const Fb = tw(FbIcon)`mr-2 w-12 h-12 lg:(w-6 h-6)`;
const Twitter = tw(TwitterIcon)`mr-2 w-12 h-12 lg:(w-6 h-6)`;
const Skype = tw(SkypeIcon)`mr-2 `;
const Instagram = tw(InstagramIcon)`mr-2 w-12 h-12 lg:(w-6 h-6)`;
const Discord = tw(DiscordIcon)`mr-2`;
const Logo = tw(LogoImage)`my-6`;
const Footer = () => {
  return (
    <Container>
      <Row>
        <Separator />
      </Row>
      <Row>
        <Logo />
      </Row>
      <MainRow>
        <Col>
          <Text>INFORMATION</Text>
          <RowContainer>
            <Social href="#">Privacy Policy</Social>
            <Social href="#">Terms of Service</Social>
            <Social href="#">Refund Policy</Social>
            <Social href="#">Jobs</Social>
          </RowContainer>
        </Col>
        <Col>
          <Text>CONTACT US</Text>
          <RowContainer>
            <Social href="#">support@bawses.eu</Social>
            <Social href="#">
              <Skype />
              <span>live:bawses</span>
            </Social>
            <Social href="#">
              <Discord />
              <span>bawses#001</span>
            </Social>
          </RowContainer>
        </Col>
        <Col>
          <Text>SOCIAL NETWORKS</Text>
          <LargeIconsContainer>
            <Social href="#">
              <Fb />
              <span className="hidden lg:inline">Facebook</span>
            </Social>
            <Social href="#">
              <Instagram />
              <span className="hidden lg:inline">Instagram</span>
            </Social>
            <Social href="#">
              <Twitter />
              <span className="hidden lg:inline">Twitter</span>
            </Social>
          </LargeIconsContainer>
        </Col>
        <Col>
          <Description>
            Created by <Social href="#">Bawses Corporation</Social>
          </Description>
        </Col>
      </MainRow>
      <Row>
        <WideDescription>
          Alisavor Management Limited Klimentos 41-43, Klimentos tower,
          Flat/Office 25, 1061, Nicosia, Cyprus. Registration number: HE402193
        </WideDescription>
      </Row>
    </Container>
  );
};
export default Footer;
