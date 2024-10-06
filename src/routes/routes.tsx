import { RouteObject } from "react-router-dom"
import LandingLayout from "../layout/LandingLayout"
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"
import SignUp from "../pages/SignUp"
import AboutUs from "../pages/AboutUs"
import Commentary from "../pages/Commentary"

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
			{
				path: "/about-us",
				element: <AboutUs />,
			},
			{
				path: "/commentary",
				element: <Commentary />,
			},
		],
	},

	{
		path: "*",
		element: <NotFound />,
	},
]
