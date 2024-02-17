import cl from './ErrorComponent.module.css'


const ErrorComponent = ({error}) => {
  return (
    <div className={cl.container}>
      {error.statusCode && <h1>Error {error.statusCode}</h1>}
      <h4>{error.message}</h4>
    </div>
  );
};

export default ErrorComponent;
