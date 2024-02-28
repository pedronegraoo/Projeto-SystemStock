import { Outlet } from "react-router-dom";
import * as S from "../styles/rootLayout";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function RootLayout() {
  return (
    <>
      <Header />

      <S.WrapperLayout>
        <Outlet />
      </S.WrapperLayout>

      <Footer />
    </>
  );
}

export default RootLayout;
