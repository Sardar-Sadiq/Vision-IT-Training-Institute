import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("courses", "routes/courses.tsx"),
    route("about-us", "routes/about-us.tsx"),
    route("contact", "routes/contact.tsx"),
    route("coming-soon", "routes/coming-soon.tsx"),
  ])
] satisfies RouteConfig;
