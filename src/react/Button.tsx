export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  children?: React.ReactNode;
}

function Button(props: Props): JSX.Element {
  const { className, label, ...restProps } = props;
  return (
    <button
      className={`${className}`}
      {...restProps}>
      {label}
    </button>
  );
}

export default Button;
