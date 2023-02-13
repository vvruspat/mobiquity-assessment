import "./App.css";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App" data-testid="app-container">
      <ErrorBoundary>
        <Home></Home>
      </ErrorBoundary>
    </div>
  );
}

export default App;
