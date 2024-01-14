import { ThemeContextProvider } from "./Hooks/themeContext";
import DarkToggle from "./components/Header/DarkToggle";
import Header from "./components/Header/Header";
import Home from "./components/Home";

function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <main className="px-2 sm:px-10 md:px-16 lg:px-24">
        <Home />
      </main>
      <div className="fixed bottom-10 right-10">
        <DarkToggle />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
