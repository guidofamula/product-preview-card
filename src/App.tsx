import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className='flex justify-center md:grid md:place-content-center min-h-screen bg-primary-cream'>
        <CardContainer />
      </div>
      <Footer />
    </>
  );
}

export default App;
