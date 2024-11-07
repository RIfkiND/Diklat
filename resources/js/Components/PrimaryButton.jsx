export default function PrimaryButton({
  className = "",
  disabled,
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className={
        `inline-flex items-center rounded-full border border-transparent bg-primary px-4 py-2 font-semibold uppercase text-white transition duration-150 ease-in-out hover:bg-secondary focus:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:bg-secondary ${
          disabled && "opacity-25"
        } ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
