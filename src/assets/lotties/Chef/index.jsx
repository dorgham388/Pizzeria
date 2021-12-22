/*
 * Created Date: Wednesday March 10th 2021
 * Author: Amir Dorgham
 * -----
 * Last Modified: Wednesday, December 22nd 2021, 12:38:01 am
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
      <Lottie options={defaultOptions} height={200} width={200} />
    </Container>
  );
}

export default UncontrolledLottie;
