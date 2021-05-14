import React, { useEffect } from "react";
// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import tw from "twin.macro";
import Header from "features/header";
import Categories from "features/categories";
import Footer from "features/footer";

const Container = tw.div`transition duration-300 ease-in-out bg-gray-50 dark:bg-gray-900 min-h-screen w-full overflow-hidden`;

const Home = () => {
  // const count = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const [state, setState] = useState({});

  return (
    <Container>
      <Header />
      <Categories />
      <Footer />
    </Container>
  );
};
export default Home;
