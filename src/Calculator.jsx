import { useState } from "react";
import Btn from "./components/Btn";

function Calculator() {
  const [click, setClick] = useState("");

  const btn = (value) => {
    setClick((prev) => prev + value)
  };

  const ru = () => {
    try {
      const ru = Function(`return ${click}`)();
      setClick(ru);
    } catch {
      setClick("Error");
    }
  };

  const clear = () => {
    setClick("");
  };

  const handleKey = (e) => {
    if ("1234567890-+/.".includes(e.key)) {
      setClick(click + e.key);
    }
    if (e.key === "Enter") {
      ru();
    }
    if (e.key === "Backspace") {
      setClick(click.slice(0, -1));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mt-7 mb-7 w-[440px] h-fit flex flex-col justify-center items-center p-6 rounded-lg bg-gray-100 shadow shadow-zinc-300">
        <input
          type="text"
          value={click}
          readOnly
          autoFocus
          onKeyDown={handleKey}
          className="outline-none bg-zinc-400 text-xl font-bold px-4 py-2 rounded-lg w-full h-16 text-white shadow shadow-white"
        />
        <div className="grid grid-cols-3 gap-4 gap-x-8 mt-7">
          <Btn content={1} work={() => btn("1")} /> 
          <Btn content={2} work={() => btn("2")} />
          <Btn content={3} work={() => btn("3")} />
          <Btn content={4} work={() => btn("4")} />
          <Btn content={5} work={() => btn("5")} />
          <Btn content={6} work={() => btn("6")} />
          <Btn content={7} work={() => btn("7")} />
          <Btn content={8} work={() => btn("8")} />
          <Btn content={9} work={() => btn("9")} />
          <Btn content={0} work={() => btn("0")} />

          <Btn content={"."} work={() => btn(".")} />
          <Btn content={"+"} work={() => btn("+")} />
          <Btn content={"-"} work={() => btn("-")} />
          <Btn content={"X"} work={() => btn("*")} />
          <Btn content={"/"} work={() => btn("/")} />

          <Btn content={"Clear"} work={clear} />
          <Btn content={"="} work={ru} />

          <Btn content={0} work={() => btn("00")} />
          
        </div>
      </div>
    </div>
  );
}

export default Calculator;
