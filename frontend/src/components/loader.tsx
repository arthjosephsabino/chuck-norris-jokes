import "./loader.css";
interface ILoader {
  isLoading: boolean;
}
export default function Loader({ isLoading }: ILoader) {
  return (
    <div className="backdrop">
      <div className="loader" />
    </div>
  );
}
