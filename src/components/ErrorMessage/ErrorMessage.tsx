import css from './ErrorMessage.module.css';

const ErrorMessage: React.FC = () => {
  return <div className={css.error}>Sorry,something went wrong!</div>;
};

export default ErrorMessage;
