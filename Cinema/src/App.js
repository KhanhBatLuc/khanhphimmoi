import { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import ModalTrailer from "./components/ModalTrailer";
import LazyLoad from "./components/LazyLoad";
import Loading from "./components/Loading";
// layout
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
// guards
import AdminRoute from "./guards/AdminRoute";
import CheckoutRoute from "./guards/CheckoutRoute";
import UserProfileRoute from "./guards/UserProfileRoute";
// page
import Homepage from "./pages/Homepage";
import MovieDetail from "./pages/MovieDetail";
import UserProfile from "./pages/UserProfile";
import BookTicket from "./pages/BookTicket";
import UsersManagement from "./pages/UsersManagement";
import MoviesManagement from "./pages/MoviesManagement";
import CreateShowtime from "./pages/CreateShowtime";
import Book from "./pages/Book";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Page404 from "./pages/Page404";
function App() {
  return (
      <BrowserRouter>
        <Loading />
        <ModalTrailer />
        <Suspense fallback={<LazyLoad />}>
          <Switch>
            <Route exact path={["/", "/detail/:maPhim", "/taikhoan"]}>
              <MainLayout>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/detail/:maPhim" component={MovieDetail} />
                <UserProfileRoute
                  exact
                  path="/taikhoan"
                  component={UserProfile}
                />
              </MainLayout>
            </Route>
           
              <CheckoutRoute
                exact
                path="/datve/:maLichChieu"
                component={BookTicket}
              />
         
            <Route
              exact
              path={["/admin/users", "/admin/movies", "/admin/showtimes", "/admin/films/addnew", "/admin/book"]}
            >
              <AdminLayout>
                <AdminRoute
                  exact
                  path="/admin/users"
                  component={UsersManagement}
                />
                <AdminRoute
                  exact
                  path="/admin/movies"
                  component={MoviesManagement}
                />
                <AdminRoute
                  exact
                  path="/admin/showtimes"
                  component={CreateShowtime}
              />
              <AdminRoute
                  exact
                  path="/admin/book"
                  component={Book}
                />
                <AdminRoute
                  exact
                  path="/admin/films/addnew"
                />
              </AdminLayout>
            </Route>
  
            <Route exact path={["/login", "/signUp"]}>
              <MainLayout>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signUp" component={Register} />
              </MainLayout>
            </Route>
  
            <Route component={Page404} />
          </Switch>
        </Suspense>
      </BrowserRouter>
  );
}

export default App;
