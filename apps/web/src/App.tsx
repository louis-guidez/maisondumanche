import { useEffect, useState } from "react";
import { Button } from "@maison/designsystem";
import { ContactPage } from "./pages/ContactPage";
import { ArticlesPage } from "./pages/ArticlesPage";
import { ComponentsPage } from "./pages/ComponentsPage";

type AppPath = "/contact" | "/articles" | "/components";

function getPath(): AppPath {
  const pathname = window.location.pathname;
  if (pathname === "/articles") {
    return "/articles";
  }
  if (pathname === "/components") {
    return "/components";
  }
  return "/contact";
}

function App() {
  const [path, setPath] = useState<AppPath>(getPath);

  useEffect(() => {
    if (window.location.pathname === "/") {
      window.history.replaceState({}, "", "/contact");
      setPath("/contact");
    }

    function onPopState() {
      setPath(getPath());
    }

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  function navigate(nextPath: AppPath) {
    if (nextPath === path) {
      return;
    }
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
  }

  return (
    <>
      <header className="app-top-nav">
        <Button variant={path === "/contact" ? "primary" : "light"} onClick={() => navigate("/contact")}>
          Page Contact
        </Button>
        <Button variant={path === "/articles" ? "primary" : "light"} onClick={() => navigate("/articles")}>
          Page Articles
        </Button>
        <Button variant={path === "/components" ? "primary" : "light"} onClick={() => navigate("/components")}>
          Tous les composants
        </Button>
      </header>

      {path === "/articles" ? <ArticlesPage /> : null}
      {path === "/components" ? <ComponentsPage /> : null}
      {path === "/contact" ? <ContactPage /> : null}
    </>
  );
}

export default App;
