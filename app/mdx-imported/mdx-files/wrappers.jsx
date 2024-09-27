export default function CustomWrapper({ children, customClass }) {
  return <div className={customClass}>{children}</div>;
}
