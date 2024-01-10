import { Header } from "@features/Header";
import { HomeScreen } from "@widgets/HomeScreen";
import { AboutScreen } from "@widgets/AboutScreen";
import { ServicesScreen } from "@widgets/ServicesScreen";

export const HomePage = () => {
  return (
    <>
      <Header />
      <HomeScreen />
      <AboutScreen />
      <ServicesScreen />
    </>
  );
};
