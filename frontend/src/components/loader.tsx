import "./loader.css";
interface ILoader {
  isLoading: boolean;
}
export default function Loader({ isLoading }: ILoader) {
  return isLoading ? (
    <div className="backdrop">
      <div className="loader" />
    </div>
  ) : null;
}
