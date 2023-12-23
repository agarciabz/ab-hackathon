interface Props {
  text: string;
}

export const Button = ({ text }: Props) => {
  return (
    <button className="bg-teal-500 text-white p-4" onClick={console.log}>
      {text}
    </button>
  );
};
