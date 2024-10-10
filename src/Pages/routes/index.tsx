// RoutesComponent.tsx
import React from "react";
import { Navigate, useRoutes, RouteObject } from "react-router-dom";
import LayoutMain from "../../Layout/LayoutMain";
import { PATH_LANDING } from "./paths";
import Home from "../Home";
import CameraComponent from "../Camera";
import ObserverComponent from "../SeeCamera";

const RoutesComponent = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <LayoutMain />,
      children: [
        { path: PATH_LANDING.root, element: <Home /> },
        { path: PATH_LANDING.landing.camera, element: <CameraComponent /> },
        { path: PATH_LANDING.landing.seCamera, element: <ObserverComponent /> },
      ],
    },
    { path: "*", element: <Navigate to="/" replace /> },
  ];

  const element = useRoutes(routes);
  return element;
};

export default RoutesComponent;
