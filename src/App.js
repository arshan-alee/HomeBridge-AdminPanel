import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Header from "./components/Shared/Header";
import { routes } from "./utils/Routes";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <div>
      {/* <Header/>  */}
      <Routes>
        <Route path="/" element={<Login />} />
        {routes.map((item, i) => (
          <Route
            path={"/admin/" + item.name.toLowerCase()}
            element={<ProtectedRoute>{item.component}</ProtectedRoute>}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
