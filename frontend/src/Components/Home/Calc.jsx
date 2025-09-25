import { useState } from "react";
import { useAddNumbersMutation } from "../../redux/api/TestApiSlice";

const Calc = () => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [result,setResult] = useState(0);
  const [addnum] = useAddNumbersMutation();

  const handleAdd = async () => {
    const {result} = await addnum({ n1, n2 }).unwrap(); // Use current state values
    setResult(result);
    console.log(result)
  };

return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-red-100 to-yellow-100">
        <div className="bg-white shadow-2xl rounded-3xl p-10 flex flex-col items-center gap-6 animate-fade-in">
            <h2 className="text-3xl font-extrabold text-red-600 mb-4 tracking-wide animate-slide-down">Add Two Numbers</h2>
            <div className="flex gap-4">
                <input
                    type="number"
                    value={n1}
                    className="transition-all duration-300 border-2 border-red-300 focus:border-red-500 rounded-xl px-4 py-2 text-lg outline-none shadow-sm focus:shadow-lg bg-red-50 hover:bg-red-100 animate-pop"
                    onChange={(e) => setN1(Number(e.target.value))}
                    placeholder="Number 1"
                />
                <input
                    type="number"
                    value={n2}
                    className="transition-all duration-300 border-2 border-yellow-300 focus:border-yellow-500 rounded-xl px-4 py-2 text-lg outline-none shadow-sm focus:shadow-lg bg-yellow-50 hover:bg-yellow-100 animate-pop"
                    onChange={(e) => setN2(Number(e.target.value))}
                    placeholder="Number 2"
                />
            </div>
            <button
                onClick={handleAdd}
                className="mt-4 px-8 py-3 bg-gradient-to-r from-red-400 to-yellow-400 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:from-yellow-400 hover:to-red-400 transition-all duration-300 animate-bounce"
            >
                Add Numbers
            </button>
            <div
                className={`mt-8 text-green-700 border-2 border-green-400 bg-green-100 rounded-2xl p-4 font-bold text-3xl w-64 flex items-center justify-center shadow-md transition-all duration-500 ${
                    result !== 0 ? "animate-result-pop" : ""
                }`}
            >
                {result}
            </div>
        </div>
        <style>
            {`
                @keyframes fade-in {
                    from { opacity: 0; transform: scale(0.95);}
                    to { opacity: 1; transform: scale(1);}
                }
                .animate-fade-in {
                    animation: fade-in 0.8s cubic-bezier(.4,0,.2,1);
                }
                @keyframes slide-down {
                    from { opacity: 0; transform: translateY(-30px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                .animate-slide-down {
                    animation: slide-down 0.7s cubic-bezier(.4,0,.2,1);
                }
                @keyframes pop {
                    0% { transform: scale(0.95);}
                    60% { transform: scale(1.05);}
                    100% { transform: scale(1);}
                }
                .animate-pop {
                    animation: pop 0.5s cubic-bezier(.4,0,.2,1);
                }
                @keyframes result-pop {
                    0% { background: #bbf7d0; transform: scale(0.9);}
                    60% { background: #4ade80; transform: scale(1.05);}
                    100% { background: #bbf7d0; transform: scale(1);}
                }
                .animate-result-pop {
                    animation: result-pop 0.7s cubic-bezier(.4,0,.2,1);
                }
            `}
        </style>
    </div>
);
};

export default Calc;
