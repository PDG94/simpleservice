import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Login,
  Detail,
  Register,
  Reset,
  Services,
  Create,
  NotFound,
  Landing,
  AdminOnlyRoute,
  AddService,
  Orders,
  ViewServices,
  Dashboard,
  AddCategories,
  Prohibido,
  Edit
} from "./components/index";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      {/* inyecta propiedades a nuesto componente para acceder al historial de navegacion */}
      <div className="App">
        <Routes>
          {/* permite navegar de ruta a ruta es buena practica aplicarlo*/}
          <Route exact path="/" element={<Landing />} />
          {/* componente que utilizamos para crear nuestras rutas a otras paginas*/}
          <Route path="/home" element={<Home />} />

          <Route path="/Services" element={<Services />} />

          <Route path="/Detail/:id" element={<Detail />} />

          <Route path="/Create" element={<Create />} />

          <Route path="*" element={<NotFound />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/reset" element={<Reset />} />

          <Route path="/prohibited" element={<Prohibido />} />

          <Route
            path="/admin/add-service"    
            element={
              <AdminOnlyRoute>
                <AddService />
              </AdminOnlyRoute>
            }
          />

          <Route
            path="/admin/add-categories"
            element={
              <AdminOnlyRoute>
                <AddCategories />
              </AdminOnlyRoute>
            }
          />

          <Route
            path="/admin/orders"
            element={
              <AdminOnlyRoute>
                <Orders />
              </AdminOnlyRoute>
            }
          />

          <Route
            path="/admin/all-services"
            element={
              <AdminOnlyRoute>
                <ViewServices />
              </AdminOnlyRoute>
            }
          />

          <Route
            path="/admin/*"
            element={
              <AdminOnlyRoute>
                <Dashboard />
              </AdminOnlyRoute>
            }
          />
          <Route
            path="/admin/edit/:id"
            element={
              <AdminOnlyRoute>
                <Edit />
              </AdminOnlyRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
