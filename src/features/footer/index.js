/*
 * Created Date: Wednesday May 12th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Friday, May 14th 2021, 1:23:24 am
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

const Row = tw.div`  flex flex-col lg:flex-row  justify-evenly w-full items-start  `;
const Col = tw.div`pt-2 flex flex-col `;
const Container = tw.div`mb-4 px-3 flex relative bottom-0 flex-col w-full`;
const RowContainer = tw.div` flex flex-row lg:flex-col`;
const LogoColumn = tw(Col)`hidden lg:inline`;
const DescriptionHidden = tw(Description)`inline w-8/12 lg:hidden`;
const Fb = tw(FbIcon)`mr-2 w-12 h-12 lg:(w-6 h-6)`;
const Twitter = tw(TwitterIcon)`mr-2 w-12 h-12 lg:(w-6 h-6)`;
const Skype = tw(SkypeIcon)`mr-2 `;
const Instagram = tw(InstagramIcon)`mr-2 w-12 h-12 lg:(w-6 h-6)`;
const Discord = tw(DiscordIcon)`mr-2`;
const Logo = tw(LogoImage)``;
const Footer = () => {
  return (
    <Container>
      <Row>
        <Separator />
      </Row>
      <Row>
        <LogoColumn>
          <Logo />
          <Description>
            Alisavor Management Limited Klimentos 41-43, Klimentos tower,
            Flat/Office 25, 1061, Nicosia, Cyprus. Registration number: HE402193
          </Description>
        </LogoColumn>
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
              live:bawses
            </Social>
            <Social href="#">
              <Discord />
              bawses#001
            </Social>
          </RowContainer>
        </Col>
        <Col>
          <Text>SOCIAL NETWORKS</Text>
          <RowContainer>
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
          </RowContainer>
        </Col>
        <Col>
          <Description>
            Created by <Social href="#">Baws</Social>
          </Description>
        </Col>
      </Row>

      <DescriptionHidden>
        Alisavor Management Limited Klimentos 41-43, Klimentos tower,
        Flat/Office 25, 1061, Nicosia, Cyprus. Registration number: HE402193
      </DescriptionHidden>
    </Container>
  );
};
export default Footer;
