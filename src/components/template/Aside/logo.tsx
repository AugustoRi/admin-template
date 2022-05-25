export function Logo() {
  return (
    <div className={`cursor-pointer flex flex-col items-center justify-center h-20 w-40 
    bg-gradient-to-r from-indigo-500 to-purple-800`
    }>
      <div className={`flex flex-col items-center justify-center h-16 w-16 rounded-full bg-white`}>
        <h1 className={`text-black font-black text-xl`}>A.R</h1> 
      </div>
    </div>
  );
}