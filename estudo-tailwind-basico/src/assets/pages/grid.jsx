export const Grid = () => {
  return (
    <>
      <h1>Grid</h1>

      <div className="mt-10 w-[800px] min-h-[300px] mx-auto bg-sky-400 p-2 grid grid-cols-3 gap-x-2.5 gap-y-1.5 rounded">
        <div className="w-full min-h-14 bg-yellow-300 rounded text-black">01</div>
        <div className="w-full min-h-14 bg-yellow-300 rounded text-black col-span-2">02</div>
        <div className="w-full min-h-14 bg-yellow-300 rounded text-black row-span-2">03</div>
        <div className="w-full min-h-14 bg-yellow-300 rounded text-black">04</div>
        <div className="w-full min-h-14 bg-yellow-300 rounded text-black">05</div>
        <div className="w-full min-h-14 bg-yellow-300 rounded text-black col-span-2">06</div>
      </div>
    </>
  );
};
