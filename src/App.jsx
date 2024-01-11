import { ThemeContextProvider } from "./Hooks/themeContext";
import Home from "./Home";
import Header from "./components/Header/Header";

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
