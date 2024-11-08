export default function MonitorIlustration({ images, ...props }) {
  return (
    <img
      src={images}
      alt="Monitor illustration"
      className="w-full h-full"
      {...props}
    />
  );
}
