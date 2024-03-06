import { MdKeyboardCommandKey } from "react-icons/md";

export function Team({
  Icon,
  title,
  index,
}: {
  Icon: React.FC;
  title: string;
  index: number;
}) {
  return (
    <div className="flex py-2 gap-3 hover:cursor-pointer hover:bg-gray-100">
      <div className="w-8 flex justify-center items-center">
        <Icon />
      </div>
      <div className="flex w-full justify-between">
        <div>{title}</div>
        <div className="flex gap-2">
          <span className="flex justify-center items-center">
            <MdKeyboardCommandKey />
          </span>
          <span> + {index}</span>
        </div>
      </div>
    </div>
  );
}
