import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <Homepage />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
