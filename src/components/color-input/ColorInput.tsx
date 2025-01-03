import { useContext } from "react";

function ColorInput() {
    return (
        <div className="flex flex-col items-center gap-2 md:flex-row">
            <label htmlFor="" className="relative">
                <input
                    className="absolute left-2 top-[6px]"
                    type="color"
                    placeholder="#fff"
                    value={"#fff"}
                >
                </input>
                <input
                    className="py-[6px] pl-16 font-mono border-[1px] border-slate-700 rounded-[4px]"
                    type="text"
                    name=""
                    id=""
                    placeholder="Zona de ingreso"
                />
            </label>
        </div>
    )
}

export default ColorInput;
