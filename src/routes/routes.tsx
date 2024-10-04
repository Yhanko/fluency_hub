import { RouteObject } from "react-router-dom"
import LandingLayout from "../layout/LandingLayout"
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"

export const routes: RouteObject[] = [
	{
		element: <LandingLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},

	{
		path: "*",
		element: <NotFound />,
	},
]
