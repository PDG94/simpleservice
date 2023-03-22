import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserOnlyRoute from "./components/AdminOnlyRoutes/UsersOnlyRoutes";
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
  Edit,
  Profile,
  OrdersUser,
  ViewServiceUser,
  DashboardUser,
  UpdateInfoUser,
  Cart,
  ViewAllServices,
  Checkout,
  CheckoutDetails,
  CheckoutSuccess,
  UpdateProfilesUsers,
  ReviewService,
  OrdersDetails,
  ViewAllUsers,
  UpdateServices,
  OrderAdminDetail,
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
          <Route path="/profile" element={<Profile />} />
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
            path="/admin/update"
            element={
              <AdminOnlyRoute>
                <UpdateProfilesUsers />
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
            path="/admin/all-users"
            element={
              <AdminOnlyRoute>
                <ViewAllUsers />
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
            path="/admin/edit/:id/:CategoryId"
            element={
              <AdminOnlyRoute>
                <Edit />
              </AdminOnlyRoute>
            }
          />
          <Route
            path="/admin/order-details/:id"
            element={<OrderAdminDetail />}
          />
          ------------User Profile-------------
          <Route
            path="/profile/*"
            element={
              <UserOnlyRoute>
                <DashboardUser />
              </UserOnlyRoute>
            }
          />
          <Route
            path="/profile/update"
            element={
              <UserOnlyRoute>
                <UpdateInfoUser />
              </UserOnlyRoute>
            }
          />
          <Route
            path="/profile/orders"
            element={
              <UserOnlyRoute>
                <OrdersUser />
              </UserOnlyRoute>
            }
          />
          <Route
            path="/profile/my-services/:id"
            element={
              <UserOnlyRoute>
                <ViewServiceUser />
              </UserOnlyRoute>
            }
          />
          <Route
            path="/profile/my-servicesdetail"
            element={
              <UserOnlyRoute>
                <ViewAllServices />
              </UserOnlyRoute>
            }
          />
          <Route path="/checkout-details" element={<CheckoutDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/profile/order-details/:id"
            element={<OrdersDetails />}
          />
          <Route path="/profile/order-review/:id" element={<ReviewService />} />
          <Route path="/profile/edit/:id" element={<UpdateServices />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
