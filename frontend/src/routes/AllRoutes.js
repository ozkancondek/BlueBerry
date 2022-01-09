import React from "react";
import { Route, Routes } from "react-router-dom";

import { Cities } from "../pages/Cities";
import { ClickCity } from "../pages/ClickCity";
import { Home } from "../pages/Home";
import { SignIn } from "../pages/Signin";
import { SignUp } from "../pages/SignUp";
import { YourChoices } from "../pages/YourChoices";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/yourchoices" element={<YourChoices />} />

      <Route path="/:clickcity/:cityid" element={<ClickCity />} />
      <Route path="/cities" element={<Cities />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};
