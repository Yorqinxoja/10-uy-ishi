import { Suspense, lazy } from "react";
const Home = lazy(() => import("./routes/home/Home"));
const Single = lazy(() => import("./routes/single/Single"));
import { Route, Routes } from "react-router-dom";
import Nav from "./components/navbar/Nav";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route
          path="/"
          element={
            <Suspense class name=" mt-[100px]" fallback="Loading...">
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/single"
          element={
            <Suspense fallback="Loading...">
              <Single />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
