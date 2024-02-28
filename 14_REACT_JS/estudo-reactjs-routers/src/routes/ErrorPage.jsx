/* eslint-disable no-unused-vars */
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Ops!</h1>
      <p>Erro {error.status}</p>
      <p>{error.statusText}</p>
      <p>{error.error.message}</p>
    </div>
  );
};

export default ErrorPage;
