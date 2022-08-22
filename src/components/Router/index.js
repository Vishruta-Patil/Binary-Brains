import { LogIn } from "pages/auth/login";
import { SignIn } from "pages/auth/signin";
import { Home } from "pages/home";
import { PageNotFound } from "pages/PageNotFound";
import { Palagrism } from "pages/palagrism";
import { Piracy } from "pages/piracy";
import { Piracy1 } from "pages/piracy/piracy1";
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
        path="/piracy"
        element={
          <PrivateRoute>
            <Piracy />
          </PrivateRoute>
        }
      />

<Route
        path="/piracy1"
        element={
          <PrivateRoute>
            <Piracy1 />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
