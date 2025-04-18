import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col justify-center items-center min-w-screen max-w-[1080px]">
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
