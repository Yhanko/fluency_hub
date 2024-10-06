import { RouteObject } from "react-router-dom"
import LandingLayout from "../layout/LandingLayout"
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"
import SignUp from "../pages/SignUp"

export const routes: RouteObject[] = [
	{
		element: <LandingLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/sign-up",
				element: <SignUp />,
			},
		],
	},

	{
		path: "*",
		element: <NotFound />,
	},
]
