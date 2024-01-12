import { ThemeContextProvider } from "./Hooks/themeContext";
import Header from "./components/Header/Header";
import Home from "./components/Home";

function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <main className="px-24">
        <Home />
      </main>
    </ThemeContextProvider>
  );
}

export default App;
