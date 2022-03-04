interface TagProps {
  value: string
}

export default function Tag(props: TagProps) {

  return (
    <button className="rounded-full border-gray-400 bg-gray-400 flex-none w-72 py-5 m-2 font-semibold text-white" >
      {props.value}
    </button>
  );
};
