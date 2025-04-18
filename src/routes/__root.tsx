import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col justify-center items-center min-h-screen min-w-screen max-w-[1080px]">
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </div>
  ),
});
