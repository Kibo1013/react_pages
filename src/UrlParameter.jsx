import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>This is UrlParameter</h1>
      <p>{id}</p>
      <p>Query Parameter is {query.get("name")}</p>
    </div>
  );
};
