import "./alert.css";
interface IAlert {
  message: string;
}
export default function Alert({ message }: IAlert) {
  return message ? (
    <div className="alert">
      <span>{message}</span>
    </div>
  ) : null;
}
