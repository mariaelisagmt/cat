interface ButtonProps {
  value: string
}

export default function Button(props: ButtonProps) {

  return (
    <button className="rounded-full border-green-500 bg-primary-green flex-none w-72 py-5 font-semibold text-white" >
      {props.value}
    </button>
  );
};
