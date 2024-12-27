import Header from '../src/components/header/header'; // Adjust the path if your file is in a different folder

const App = () => {
  return (
    <div>
      {/* Add Header Component */}
      <Header />

      {/* Main Content */}
      <main>
        <section id="home" className="p-6">
          <h1 className="text-2xl font-bold">Welcome to the Home Page. Good Morning Bidu</h1>
        </section>
        <section id="about" className="p-6">
          <h1 className="text-2xl font-bold">About Us</h1>
        </section>
        <section id="services" className="p-6">
          <h1 className="text-2xl font-bold">Our Services</h1>
        </section>
        <section id="contact" className="p-6">
          <h1 className="text-2xl font-bold">Contact Us</h1>
        </section>
      </main>
    </div>
  );
};

export default App;
