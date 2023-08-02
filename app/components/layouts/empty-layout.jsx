import { Outlet } from "@remix-run/react";

export function EmptyLayout() {
  return (
    <div>
      <h1>Empty Layout</h1>
      <div
        style={{
          padding: "1rem",
          border: "1px dashed",
          borderRadius: "0.25rem",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
