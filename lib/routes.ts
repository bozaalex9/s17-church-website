export const routes = {
  home: "/",
  visit: "/visit",
  about: "/about",
  gather: "/gather",
  grow: "/grow",
  go: "/go",
  give: "/give",
  events: "/events",
  resources: "/resources",
  contact: "/contact",
} as const;

export const forbiddenRoutes = ["/beliefs", "/sermons", "/generosity"] as const;
