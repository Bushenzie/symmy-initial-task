import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col justify-center items-center w-full max-w-screen min-h-screen px-6 md:px-14">
      <Outlet />
    </div>
  ),
});
