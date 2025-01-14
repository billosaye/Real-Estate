import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Helmet } from "react-helmet"; // Importing react-helmet for dynamic <head> management

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes without header/footer */}
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Sign Up - BetterHomes Real Estate</title>
                <meta
                  name="description"
                  content="Create an account with BetterHomes and start your property search today!"
                />
              </Helmet>
              <SignUp />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <Helmet>
                <title>Sign In - BetterHomes Real Estate</title>
                <meta
                  name="description"
                  content="Sign in to BetterHomes to access your account and saved listings."
                />
              </Helmet>
              <SignIn />
            </>
          }
        />

        {/* All other routes with header/footer */}
        <Route
          element={
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">
                <Outlet />
              </main>
              <Footer />
            </div>
          }
        >
          <Route
            path="/home"
            element={
              <>
                <Helmet>
                  <title>Home - BetterHomes Real Estate</title>
                  <meta
                    name="description"
                    content="Explore our featured listings and find your dream home."
                  />
                </Helmet>
                <Home />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Helmet>
                  <title>About Us - BetterHomes Real Estate</title>
                  <meta
                    name="description"
                    content="Learn more about BetterHomes and how we help you find the perfect home."
                  />
                </Helmet>
                <About />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Helmet>
                  <title>Your Profile - BetterHomes Real Estate</title>
                  <meta
                    name="description"
                    content="Manage your account, view saved properties, and track your activity."
                  />
                </Helmet>
                <Profile />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">Page Not Found</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Return to Home
      </Link>
    </div>
  );
};

export default App; // This is the main component that will be exported and used in the main.jsx file
