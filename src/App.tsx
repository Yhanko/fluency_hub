import React from "react"
import {
	BrowserRouter as Router,
	Route,
	Routes,
	RouteObject,
} from "react-router-dom"
import { routes } from "./routes/routes"

const App: React.FC = () => {
	const renderRoutes = (routeList: RouteObject[]): JSX.Element[] => {
		return routeList.map((route, index) => {
			if (route.children) {
				return (
					<Route key={index} element={route.element}>
						{renderRoutes(route.children)}
					</Route>
				)
			}

			return (
				<Route key={route.path} path={route.path} element={route.element} />
			)
		})
	}

	return (
		<Router>
			<Routes>{renderRoutes(routes)}</Routes>
		</Router>
	)
}

export default App
