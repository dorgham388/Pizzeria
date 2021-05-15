/*
 * Created Date: Wednesday May 12th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, May 15th 2021, 9:59:38 pm
 * Modified By: Jasser Bouzidi
 * -----
 */

import tw from "twin.macro";
import { ReactComponent as HexagoneIcon } from "assets/images/backgrounds/hexagone.svg";
import { ReactComponent as ShieldIcon } from "assets/images/icons/shield.svg";
import { ReactComponent as ContactIcon } from "assets/images/icons/contact24.svg";
import { ReactComponent as ExpertIcon } from "assets/images/icons/expert.svg";
import Description from "components/descriptions/aboutUs";
import CustomCard from "components/cards/aboutUs";
import Text from "components/titles/aboutUs";

const Container = tw.div`flex flex-row flex-wrap justify-evenly items-center w-full `;
const Col = tw.div`pt-2 flex flex-col items-center `;
const Hexagone = tw(
  HexagoneIcon
)`w-36 h-36 transform translate-y--20 rotate-90 flex items-center justify-start absolute z-auto `;
const Contact = tw(ContactIcon)`z-50 transform translate-y--11 `;
const Shield = tw(ShieldIcon)`z-50 transform translate-y--10 `;
const Expert = tw(ExpertIcon)`z-50 transform translate-y--9 `;
const Div = tw.div`shadow-inner`;
const AboutUs = () => {
  return (
    <Container>
      <CustomCard>
        <Hexagone />
        <Col>
          <Div>
            <Contact />
          </Div>
          <Text>We are online NOW and 24/7</Text>
          <Description>
            We will contact you and start working on your order within 7 minutes
          </Description>
        </Col>
      </CustomCard>

      <CustomCard>
        <Hexagone />
        <Col>
          <Expert />
          <Text> Only game experts on our team</Text>
          <Description>
            Every manager, even the owner, has successfully personally completed
            over 300 orders
          </Description>
        </Col>
      </CustomCard>

      <CustomCard>
        <Hexagone />

        <Col>
          <Shield />
          <Text>We only use safe and time-proven methods</Text>
          <Description>
            P.S. Never, ever, ever share your account when you order mythic
            raids
          </Description>
        </Col>
      </CustomCard>
    </Container>
  );
};
export default AboutUs;
