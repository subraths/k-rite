import { BiMessageSquareAdd } from "react-icons/bi";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { MdOutlineFolder } from "react-icons/md";

export function Folders({
  open,
  toggleFolder,
  title,
  sub,
}: {
  open: boolean;
  toggleFolder: () => void;
  title: string;
  sub: string[];
}) {
  return (
    <>
      <div
        className="flex py-2 gap-2 hover:cursor-pointer hover:bg-gray-100"
        onClick={toggleFolder}
      >
        <div className="flex w-8 justify-center items-center">
          <MdOutlineFolder />
        </div>
        <div className="flex w-full justify-between">
          <div>{title}</div>
          {sub.length > 0 && (
            <span className="flex justify-center items-center">
              {open ? <FaCaretUp /> : <FaCaretDown />}
            </span>
          )}
        </div>
      </div>
      {open && (
        <>
          <div className="flex flex-col pl-6 ml-6 border-l">
            {sub.map((sub, i) => (
              <span key={i} className="py-1">
                {sub}
              </span>
            ))}
          </div>
          <div className="text-green-500 ml-12 flex gap-2 items-center hover:cursor-pointer hover:bg-gray-100 py-1 rounded-md">
            <BiMessageSquareAdd /> <span>Add new sub</span>
          </div>
        </>
      )}
    </>
  );
}
