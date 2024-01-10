import { Header } from "@features/Header";
import { HomeScreen } from "@widgets/HomeScreen";
import { AboutScreen } from "@widgets/AboutScreen";
import { ServicesScreen } from "@widgets/ServicesScreen";
import { Menu } from "@features/Menu";
import { Footer } from "@features/Footer";
import { useSelector } from "react-redux";

export const HomePage = () => {
  const isMenuOpen = useSelector((state: any) => state.menu.isOpen);

  return (
    <>
      <Header />
      {isMenuOpen ? <Menu /> : null}
      <HomeScreen />
      <AboutScreen />
      <ServicesScreen />
      <Footer />
    </>
  );
};
