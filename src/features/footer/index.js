/*
 * Created Date: Wednesday May 12th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Friday, May 14th 2021, 12:16:53 am
 * Modified By: Jasser Bouzidi
 * -----
 */
import React from "react";
import tw from "twin.macro";
import Social from "components/Icons/socials";
import Text from "components/titles/footerTitles";
import Description from "components/description/description";
import Separator from "components/separator";
import { ReactComponent as FbIcon } from "assets/images/icons/fb.svg";
import { ReactComponent as InstagramIcon } from "assets/images/icons/instagram.svg";
import { ReactComponent as DiscordIcon } from "assets/images/icons/discord.svg";
import { ReactComponent as SkypeIcon } from "assets/images/icons/skype.svg";
import { ReactComponent as TwitterIcon } from "assets/images/icons/twitter.svg";
import { ReactComponent as LogoImage } from "assets/images/logos/logo.svg";

const Row = tw.div`  flex flex-row  justify-evenly w-full items-start `;
const Col = tw.div` flex  flex-col `;
const Container = tw.div`mb-4 flex fixed bottom-0 flex-col w-full`;
const Fb = tw(FbIcon)`mr-2`;
const Twitter = tw(TwitterIcon)`mr-2`;
const Skype = tw(SkypeIcon)`mr-2`;
const Instagram = tw(InstagramIcon)`mr-2`;
const Discord = tw(DiscordIcon)`mr-2`;
const Logo = tw(LogoImage)``;
const Footer = () => {
  return (
    <Container>
      <Row>
        <Separator />
      </Row>
      <Row>
        <Col>
          <Logo />
          <Description>
            Alisavor Management Limited Klimentos 41-43, Klimentos tower,
            Flat/Office 25, 1061, Nicosia, Cyprus. Registration number: HE402193
          </Description>
        </Col>
        <Col>
          <Text>INFORMATION</Text>
          <Social href="#">Privacy Policy</Social>
          <Social href="#">Terms of Service</Social>
          <Social href="#">Refund Policy</Social>
          <Social href="#">Jobs</Social>
        </Col>
        <Col>
          <Text>CONTACT US</Text>
          <Social href="#">support@bawses.eu</Social>
          <Social href="#">
            <Skype />
            live:bawses
          </Social>
          <Social href="#">
            <Discord />
            bawses#001
          </Social>
        </Col>
        <Col>
          <Text>SOCIAL NETWORKS</Text>
          <Social href="#">
            <Fb />
            Facebook
          </Social>
          <Social href="#">
            <Instagram />
            Instagram
          </Social>
          <Social href="#">
            <Twitter />
            Twitter
          </Social>
        </Col>
        <Col>
          <Description>
            Created by <Social href="#">Baws</Social>
          </Description>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
