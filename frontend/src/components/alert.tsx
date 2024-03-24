interface IAlert {
  message: string;
}
export default function Alert({ message }: IAlert) {
  return message ? (
    <div className="alert">
      <span className="close-btn">&times;</span>
      <span>{message}</span>
    </div>
  ) : null;
}
