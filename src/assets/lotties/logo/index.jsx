/*
 * Created Date: Wednesday March 10th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, May 15th 2021, 1:23:14 am
 * Modified By: Amir Dorgham
 * -----
 */

import React from "react";
import Lottie from "react-lottie";
import animationData from "./animationData.json";
import tw from "twin.macro";
const Container = tw.div`bg-gray-200 rounded-full mb-8`;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function UncontrolledLottie() {
  return (
    <Container>
      <Lottie options={defaultOptions} height={150} width={150} />
    </Container>
  );
}

export default UncontrolledLottie;
