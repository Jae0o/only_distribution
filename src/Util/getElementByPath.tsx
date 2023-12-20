import HomePage from "../Pages/HomePage";
import Page from "../Pages/Page";

export default function getElementByPath(path: string) {
  const [pathName, id] = path.split("/");

  switch (pathName) {
    case "home":
      return <HomePage />;
    case "page":
      return (
        <Page
          id={parseInt(id, 10)}
          key={id}
        />
      );
    default:
      return <HomePage />;
  }
}
