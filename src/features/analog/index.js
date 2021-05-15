/*
 * Created Date: Saturday May 15th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, May 15th 2021, 2:26:36 pm
 * Modified By: Amir Dorgham
 * -----
 */

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { withTranslation } from "react-i18next";
import tw from "twin.macro";
import fb from "assets/images/logos/fb.webp";
import linkedIn from "assets/images/logos/linkedin.jpg";
import gmail from "assets/images/logos/gmail.png";
import whatsapp from "assets/images/logos/whatsApp.webp";

const Container = tw.div`flex justify-center w-full  py-2`;
const AnimationContainer = tw.div`flex justify-center items-center   bg-yellow-500 bg-opacity-50 rounded-xl m-4`;

const Grid = tw.div`grid grid-cols-3 gap-2 `;
const GridItem = tw.div`col-span-1 text-white flex justify-center items-center text-center my-3  `;

const AnalaogOption = tw.img`w-12 rounded-lg`;

const Analog = (props) => {
  const constraintsRef = useRef(null);
  const [animating, setAnimating] = useState(false);

  return (
    <Container>
      <Grid>
        <GridItem />
        <GridItem>
          <AnalaogOption src={fb} />
        </GridItem>
        <GridItem />
        <GridItem>
          <AnalaogOption src={whatsapp} />
        </GridItem>
        <GridItem>
          <AnimationContainer>
            <motion.div
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              onDragEnd={(event, info) =>
                console.log(info.point.x, info.point.y)
              }
              // dragElastic={0.2}
              className="opacity-70 bg-gray-50   w-8 h-8 m-8 rounded-md"
              ref={constraintsRef}
            />
            <motion.div drag dragConstraints={constraintsRef} />
          </AnimationContainer>
        </GridItem>
        <GridItem>
          <AnalaogOption src={gmail} />
        </GridItem>
        <GridItem />
        <GridItem>
          <AnalaogOption src={linkedIn} />
        </GridItem>
        <GridItem />
      </Grid>
    </Container>
  );
};
export default withTranslation()(Analog);
