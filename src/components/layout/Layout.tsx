import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="w-full h-min-screen">
      <Header />
      <main className="site-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
