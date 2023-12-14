import error from "../../../public/error.gif";

export default function Error() {
  return (
    <div className="error">
      <h1>Woow ,slow down . this page does not exist</h1>
      <img src={error} alt="error gif" />
    </div>
  );
}
