// Import Component
import Header from "./components/Header";

function App() {

  const title = "Welcome to My App ";
  const age = 50;
  const link = "https:vikarmaulana.blogspot.com";

  // Membuat Arrow Function
  const clickMe = (name) => {
    console.log('Hello, Saya ' + name);
  }

  return (
    <div>
      {/* Component Header */}
      <Header />

      <h1>
        {title}
      </h1>
      <h1>{ age * 3 }</h1>
      <a href={link}>Vikar Maulana</a>

      
    // Menambah clik event
    <button onClick={ () => clickMe('Vikar Maulana Arrisyad') }>Click Me</button>
    </div>

  );
}

export default App;
