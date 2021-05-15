import React, { useEffect } from "react";
// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import tw from "twin.macro";
import Header from "features/header";
import Menu from "features/menu";
import Categories from "features/categories";
import Footer from "features/footer";
import AboutUs from "features/aboutUs";

const Container = tw.div`transition duration-300 ease-in-out bg-gray-50 dark:bg-gray-900 min-h-screen w-full overflow-hidden`;
const Grid = tw.div`mt-4 md:mt-16 grid grid-cols-5  lg:grid-cols-8 gap-0 `;
const MenuContainer = tw.div`col-span-5 md:col-span-2 lg:col-span-2`;
const InnerContainer = tw.div`col-span-5  md:col-span-3 lg:col-span-6`;

const Home = () => {
  // const count = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const [state, setState] = useState({});

  return (
    <Container>
      <Header />
      <Grid>
        <MenuContainer>
          <Menu />
        </MenuContainer>
        <InnerContainer>
          <Categories />
        </InnerContainer>
      </Grid>
      <AboutUs />
      <Footer />
    </Container>
  );
};
export default Home;
