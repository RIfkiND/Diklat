export default function Ilustrasion(props) {
  const imagePath = "/images/ilustrasi/login-ilustrasi-diklat.svg";

  return (
    <div className="block w-[400px]">
      <img
        src={imagePath}
        alt="Login illustration"
        className="w-full h-full"
        {...props}
      />
    </div>
  );
}
