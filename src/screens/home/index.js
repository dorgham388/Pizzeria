import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import tw from "twin.macro";
import Header from "features/header";
import Menu from "features/menu";
import DesctiptionList from "features/desctiptionList";

import Categories from "features/categories";
import Footer from "features/footer";
import Location from "components/Icons/location";
import Tunisia from "assets/images/backgrounds/Tunisia.svg";
import Profil from "assets/images/default/profil.jpg";

const Container = tw.div`transition duration-300 ease-in-out bg-gray-50 dark:bg-gray-900 min-h-screen w-full overflow-hidden pb-8`;
const Grid = tw.div`mt-4 md:mt-16 `;
// const MenuContainer = tw.div`col-span-5 md:col-span-2 lg:col-span-2`;
const Bubble = tw.div`flex justify-center items-center text-xl h-full w-full`;

const RoundedImage = tw.img`rounded-xl md:rounded-none md:rounded-l-xl mx-auto`;

const InnerContainer = tw.div`flex flex-col w-full justify-center items-center px-8 xl:px-32`;

const Home = () => {
  // const count = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const [state, setState] = useState({});

  return (
    <Container>
      <Header />
      <Grid>
        {/* <MenuContainer>
          <Menu isOpen={(open) => setOpen(open)} />
        </MenuContainer> */}

        <InnerContainer>
          <figure class="transition duration-300 ease-in-out  md:flex bg-gray-800 dark:bg-gray-100 rounded-xl p-8 md:p-0 shadow-lg">
            <RoundedImage
              class="w-48 h-48 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
              src={Profil}
              alt=""
              width="384"
              height="512"
            />
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4 flex flex-col justify-between">
              {/* <blockquote> */}
              <div>
                <p class="transition duration-300 ease-in-out text-xl font-semibold text-gray-100 dark:text-gray-800">
                  Over 3+ years of IT experience which includes 2+ years of
                  Extensive experience as a React JS Developer and 1 year of
                  experience as a mobile application Developer.
                </p>
                <p class="transition duration-300 ease-in-out text-md font-semibold text-gray-400 dark:text-gray-800 mt-3">
                  Experienced in MERN stack development Mongo dB, Express, Node,
                  and React.
                </p>
                <p class="transition duration-300 ease-in-out text-md font-semibold text-gray-400 dark:text-gray-800 mt-3">
                  Experienced in working with Redux architecture using complex
                  Object-Oriented concepts in improving the performance of the
                  websites.
                </p>
                <p class="transition duration-300 ease-in-out text-md font-semibold text-gray-400 dark:text-gray-800 mt-3">
                  Worked on an Agile (Scrum) Development Team to deliver regular
                  updates to business team and project managers.
                </p>
              </div>
              {/* </blockquote> */}
              <figcaption class="font-medium">
                <div class="text-yellow-500 font-semibold text-xl">
                  Amir DORGHAM
                </div>
                <div class="text-gray-500">Software Engineer, Tunisia</div>
                <div class="text-gray-500">
                  Consultant at Davidson Consulting
                </div>
              </figcaption>
            </div>
          </figure>
          {/* <Categories categories={CategoriesArray} /> */}
          {/* <div class="mt-24 w-2/3 md-w-1/2 h-64 grid grid-flow-col grid-rows-2 grid-cols-3 gap-4 ">
            <div class="transition duration-300 ease-in-out transform scale-100 hover:scale-110 -rotate-6 bg-gray-200 rounded-3xl">
              <Bubble> Amir Dorgham</Bubble>
            </div>
            <div class="transition duration-300 ease-in-out col-start-3 transform scale-75 hover:scale-90 rotate-6 translate-x-2 translate-y-12 bg-gray-200 rounded-3xl">
              <Bubble>26 ans </Bubble>
            </div>
            <div class="transition duration-300 ease-in-out transform scale-125 hover:scale-150 translate-y-16 translate-x-32  bg-gray-200 rounded-3xl">
              <Bubble>
                <Location /> Paris, France
              </Bubble>
            </div>
            <div class="transition duration-300 ease-in-out transform scale-100 hover:scale-110 transform translate-y-64 translate-x-24 -rotate-6 bg-gray-200 rounded-3xl">
              <Bubble>
                <TunisiaImage src={Tunisia} />
              </Bubble>
            </div>
            <div class="transition duration-300 ease-in-out transform scale-100 hover:scale-110 row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4 bg-gray-200 rounded-3xl">
              <Bubble> +216 582 508 92 </Bubble>
            </div>
          </div> */}
          {/* <DesctiptionList /> */}
        </InnerContainer>
      </Grid>
      {/* <div style={{ color: "white" }}>sss</div> */}
      {/* <Footer /> */}
    </Container>
  );
};
export default Home;

const CategoriesArray = [
  {
    title: "WoW Raid Carries",
    category: "All",
  },
  {
    title: "Casle Nathria",
    category: "Casle Nathria",
  },
  {
    title: "TimeWalking Raids",
    category: "TimeWalking Raids",
  },
  {
    title: "Raid Mounts",
    category: "Raid Mounts",
  },
  {
    title: "Sanctrum of Domination",
    category: "Sanctrum of Domination",
  },
];

const items = [
  { id: 0, title: "WoW Raid Carries", subtitle: "All" },
  { id: 1, title: "Casle Nathria", subtitle: "Casle Nathria" },
  { id: 2, title: "TimeWalking Raids", subtitle: "TimeWalking Raids" },
  { id: 3, title: "Raid Mounts", subtitle: "Raid Mounts" },
  {
    id: 4,
    title: "Sanctrum of Domination",
    subtitle: "Sanctrum of Domination",
  },
];
