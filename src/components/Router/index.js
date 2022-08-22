import { LogIn } from "pages/auth/login";
import { SignIn } from "pages/auth/signin";
import { Home } from "pages/home";
import { PageNotFound } from "pages/PageNotFound";
import { Palagrism } from "pages/palagrism";
import { BookDetails } from "pages/piracy/BookDetails";
import { LengthDetection } from "pages/piracy/LengthDetection";
import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<PageNotFound />} />


      <Route
        path="/palagrism"
        element={
          <PrivateRoute>
            <Palagrism />
          </PrivateRoute>
        }
      />

<Route
        path="/book-details"
        element={
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        }
      />

<Route
        path="/length-width-detection"
        element={
          <PrivateRoute>
            <LengthDetection />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
