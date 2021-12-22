import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import tw from "twin.macro";
import Header from "features/header";

// import Menu from "features/menu";
// import DesctiptionList from "features/desctiptionList";

import Categories from "components/categories";
import ProductRow from "features/productRow";

import Footer from "features/footer";
// import Location from "components/Icons/location";
// import Tunisia from "assets/images/backgrounds/Tunisia.svg";
import Thon from "assets/images/pizzas/thon.webp";
import Peperoni from "assets/images/pizzas/peperoni.webp";

const Container = tw.div`transition duration-300 ease-in-out bg-gray-50 dark:bg-gray-900 min-h-screen w-full overflow-hidden pb-8`;
const Grid = tw.div`mt-4 md:mt-16 `;
// const MenuContainer = tw.div`col-span-5 md:col-span-2 lg:col-span-2`;

const Crossed = tw.span`line-through`;

const InnerContainer = tw.div`flex flex-col w-full justify-center items-center px-8 xl:px-32 `;
const Title = tw.h1`transition duration-300 ease-in-out text-6xl font-extrabold dark:text-yellow-500 text-gray-800 mx-auto italic tracking-widest text-center`;

const Home = () => {
  // const count = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const [state, setState] = useState({});

  return (
    <Container>
      <Header />
      <div className="flex w-full">
        <Title>Kedge Pizzeria</Title>
      </div>

      <Grid>
        {/* <MenuContainer>
          <Menu isOpen={(open) => setOpen(open)} />
        </MenuContainer> */}

        <InnerContainer>
          {Pizzas.map((pizza, i) => {
            return (
              <ProductRow
                key={i}
                title={pizza.title}
                src={pizza.src}
                ingredients={pizza.ingredients}
                discount={pizza.discount}
                prices={pizza.prices}
                extra={pizza.extra}
              />
            );
          })}
        </InnerContainer>
      </Grid>
      <Footer />
    </Container>
  );
};
export default Home;

const CategoriesArray = [
  { id: 0, title: "Small", category: "Small" },
  { id: 1, title: "Medium", category: "Medium" },
  { id: 2, title: "Large", category: "Large" },
];

const Pizzas = [
  {
    id: 0,
    title: "Pizza Margherita",
    src: Thon,
    ingredients:
      "Sauce tomate, mozzarella, tomates cerise, olives, basilic frais",
    discount: 0.1,
    prices: [8, 12, 15],
    extra: "Happy Hour",
  },
  {
    id: 1,
    title: "Pizza Thon",
    src: Thon,
    ingredients:
      "Sauce tomate, mozzarella, thon, tomates cerise, olives, basilic frais",
    discount: 0.1,
    prices: [13.5, 16, 20],
    extra: "Happy Hour",
  },
  {
    id: 2,
    title: "Pizza peperoni",
    src: Peperoni,
    ingredients:
      "Sauce tomate, mozzarella, peperoni, tomates cerise, olives, basilic frais",
    discount: 0.1,
    prices: [13.5, 16, 20],
    extra: "Happy Hour",
  },
  {
    id: 3,
    title: "Pizza Funghi",
    src: Thon,
    ingredients:
      "Sauce tomate, mozzarella, champignons, tomates cerise, olives, basilic frais",
    discount: 0.1,
    prices: [12, 15, 18],
    extra: "Happy Hour",
  },
];
