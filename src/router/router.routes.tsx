import { Home } from "@pages";
import { PATH_BASE } from "./router.paths";

import { IRoute } from "@interfaces/route";

export const routes: IRoute[] = [
  {
    path: PATH_BASE,
    element: <Home />
  }
];
