/*
 * Created Date: Wednesday May 12th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, May 15th 2021, 7:50:13 pm
 * Modified By: Jasser Bouzidi
 * -----
 */
import CustomCard from "components/cards/aboutUs";
import tw from "twin.macro";
import { ReactComponent as HexagoneIcon } from "assets/images/backgrounds/hexagone.svg";
import { ReactComponent as ShieldIcon } from "assets/images/icons/shield.svg";
import { ReactComponent as ContactIcon } from "assets/images/icons/contact24.svg";
import { ReactComponent as ExpertIcon } from "assets/images/icons/expert.svg";

const Row = tw.div`flex flex-row flex-wrap justify-evenly items-center w-full `;
const Col = tw.div`pt-2 flex flex-col items-center `;
const Hexagone = tw(
  HexagoneIcon
)`w-36 h-36 transform translate-y--20 rotate-90 flex items-center justify-start absolute z-auto `;
const Contact = tw(ContactIcon)`z-50 transform translate-y--9 `;
const Shield = tw(ShieldIcon)`z-50 transform translate-y--8 `;
const Expert = tw(ExpertIcon)`z-50 transform translate-y--7 `;
const AboutUs = () => {
  return (
    <Row>
      <Col>
        <CustomCard>
          <Hexagone />
          <Contact />
        </CustomCard>
      </Col>
      <Col>
        <CustomCard>
          <Hexagone />
          <Expert />
        </CustomCard>
      </Col>
      <Col>
        <CustomCard>
          <Hexagone />
          <Shield />
        </CustomCard>
      </Col>
    </Row>
  );
};
export default AboutUs;
