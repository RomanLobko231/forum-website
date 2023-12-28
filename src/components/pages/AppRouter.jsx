import { Route, Routes } from "react-router-dom";
import { routes } from "../../router";

const AppRouter = () => {
  return (
    <Routes>
        {routes.map(route =>
        <Route path={route.path} element={route.component} exact={route.exact} key={route.path}/>
        )}
    </Routes>
  );
};

export default AppRouter;
