import { LogIn } from "pages/auth/login";
import { SignIn } from "pages/auth/signin";
import { Home } from "pages/home";
import { PageNotFound } from "pages/PageNotFound";
import { Routes, Route, Navigate } from "react-router-dom";


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signin" element={<SignIn />} /> 
            <Route path="*" element={<PageNotFound />} />

        </Routes>
    )
}