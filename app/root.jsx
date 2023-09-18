import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";
import stylesGlobal from "./styles/global.css";
import ErrorComponent from "./components/shared/error";

export const links = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: stylesGlobal },
  // Google fonts
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback",
  },
  // Iconos adicionales
  {
    rel: "stylesheet",
    href: "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css",
  },
  // Font Awesome
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css",
  },
];

export function ErrorBoundary() {
  //const error = useRouteError();

  return <ErrorComponent />;
}

export const meta = () => ({
  charset: "utf-8",
  title: "BetCloud",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
