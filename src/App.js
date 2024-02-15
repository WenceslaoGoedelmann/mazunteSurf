import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import NavarBasic from "./components/Navbar/Navbar";



import Routes from "./routes/Routes";

function App() {
  return (
    < >
      <Layout>
    <NavarBasic/>
        <Routes/>
        <Footer/>
      </Layout>
    </>
  );
}

export default App;
