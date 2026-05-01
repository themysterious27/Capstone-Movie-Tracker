const ErrorMessage = ({ message }) => {
  return (
    <p className="text-red-400 text-center py-4">
      {message}
    </p>
  );
};

export default ErrorMessage;