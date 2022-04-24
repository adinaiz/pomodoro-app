import React, { Suspense } from "react";
import { Routes, Route } from "react-router";
import { HomePage } from "../pages/home/HomePage";

const NotFound = React.lazy(() => import("../pages/notFound/notFound"));

export const PomoRoutes = () => {
   return (
      <Suspense fallback={<h1>Loading...</h1>}>
         <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"*"} element={<NotFound />} />
         </Routes>
      </Suspense>
   );
};
