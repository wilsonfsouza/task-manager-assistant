import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/layout.tsx", [
    index("routes/dashboard.tsx"),
    route("/tasks", "routes/tasks.tsx"),
    route("/tasks/new", "routes/new-task.tsx"),
    route("/tasks/edit/:id", "routes/edit-task.tsx"),
  ]),
] satisfies RouteConfig;
