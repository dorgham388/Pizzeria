import React, { useEffect } from "react";
// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import tw from "twin.macro";
import Toggle from "components/theme/toggle";
const Container = tw.div`bg-gray-900 dark:bg-yellow-300 min-h-screen`;

export default function Home() {
  // const count = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const [state, setState] = useState({});

  return (
    <Container>
      <Toggle></Toggle>
    </Container>
  );
}
