export type NavigationLink = {
  label: string;
  href: string;
};

export type NavigationItem = NavigationLink & {
  items?: NavigationLink[];
};
