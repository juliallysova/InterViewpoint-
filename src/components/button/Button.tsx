interface ButtonProps {
  setCount: (count: number) => void;
  count: number;
}

export const Button = ({ setCount, count }: ButtonProps) => {
  return (
    <button onClick={() => setCount(count + 1)}>
      count is {count}
    </button>
  );
};
