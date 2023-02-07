// Loading table <td>
export default function LoadingTd() {
  return (
    <>
      <td className="py-3 px-6">
        <div className="w-20 h-10 border-2 rounded-md mx-auto">
          <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
            <div className="flex flex-col space-y-3">
              <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
            </div>
          </div>
        </div>
      </td>
    </>
  );
}
