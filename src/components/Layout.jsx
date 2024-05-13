import { ToastContainer, toast } from "react-toastify";
import Footer from "./common/Footer";
import Header from "./common/Header";

const Layout = ({ children }) => {
  return (
    <div className="page-wrapper">
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Layout;
