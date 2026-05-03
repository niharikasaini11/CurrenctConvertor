// import { useEffect, useState } from "react";

// const App = () => {
//   const [currencies, setCurrencies] = useState([]);
//   const [from, setfrom] = useState("");
//   const [to, setTo] = useState("");
//   const [amount, setAmount] = useState("");
//   const [result, setResult] = useState(null);
//   const [rate, setRate] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const getCurrencies = async () => {
//       const res = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
//       const data = await res.json();
//       setCurrencies(Object.keys(data.rates));
//     };
//     getCurrencies();
//   }, []);

// const handleConvert = async() => {
//   if(!from || !to || !amount){
//     alert("Please fill all values.");
//     return;
//   }

//   try{
//     const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
//     const data = await res.json();

//     const exchangerate = data.rates[to];
//     const converted = amount * exchangerate;

//     setResult(converted.toFixed(2));
//     setRate(exchangerate.toFixed(2));

//     const newRecord = {
//       from,
//       to,
//       amount,
//       result: converted.toFixed(2),
//       rate: exchangerate.toFixed(2),
//       date: new Date().toLocaleString(),
//     }

//     setHistory((prev) => [newRecord, ...prev]);
//   }catch(erro){
//     console.log(erro);
//   }
// }

//   const filteredHistory = history.filter(
//     (item) => 
//       item.from.toLowerCase().includes(search.toLowerCase()) ||
//       item.to.toLowerCase().includes(search.toLowerCase())
//   )

//  return (
//   <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    
//     <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl">
      
//       <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
//         Currency Converter
//       </h1>

//       {/* from */}
//       <div className="space-y-4">
        
//         <div className="flex gap-4">
//           <div className="flex-1">
//             <label className="block text-sm font-medium mb-1">From</label>
//             <select
//               value={from}
//               onChange={(e) => setfrom(e.target.value)}
//               className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               <option value="">Select</option>
//               {currencies.map((curr) => (
//                 <option key={curr} value={curr}>
//                   {curr}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="flex-1">
//             <label className="block text-sm font-medium mb-1">To</label>
//             <select
//               value={to}
//               onChange={(e) => setTo(e.target.value)}
//               className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               <option value="">Select</option>
//               {currencies.map((curr) => (
//                 <option key={curr} value={curr}>
//                   {curr}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Amount</label>
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         <button
//           onClick={handleConvert}
//           className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
//         >
//           Convert
//         </button>
//       </div>

//       {/* RESULT */}
//       {result && (
//         <div className="mt-4 bg-green-100 p-3 rounded-lg text-center">
//           <p className="text-sm text-gray-700">
//             Exchange Rate: 1 {from} = {rate} {to}
//           </p>
//           <p className="font-semibold text-green-700">
//             {amount} {from} = {result} {to}
//           </p>
//         </div>
//       )}

//       {/* SEARCH */}
//       <div className="mt-6">
//         <input
//           type="text"
//           placeholder="Search by currency..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//       </div>

//       {/* TABLE */}
//       <div className="mt-4 overflow-x-auto">
//         <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
          
//           <thead className="bg-blue-500 text-white">
//             <tr>
//               <th className="px-4 py-2 border">From</th>
//               <th className="px-4 py-2 border">Amount</th>
//               <th className="px-4 py-2 border">To</th>
//               <th className="px-4 py-2 border">Result</th>
//               <th className="px-4 py-2 border">Rate</th>
//               <th className="px-4 py-2 border">Date</th>
//             </tr>
//           </thead>

//           <tbody className="text-center">
//             {filteredHistory.map((item, ind) => (
//               <tr key={ind} className="even:bg-gray-50 hover:bg-gray-100">
//                 <td className="px-4 py-2 border">{item.from}</td>
//                 <td className="px-4 py-2 border">{item.amount}</td>
//                 <td className="px-4 py-2 border">{item.to}</td>
//                 <td className="px-4 py-2 border">{item.result}</td>
//                 <td className="px-4 py-2 border">{item.rate}</td>
//                 <td className="px-4 py-2 border">{item.date}</td>
//               </tr>
//             ))}
//           </tbody>

//         </table>
//       </div>

//     </div>
//   </div>
// );
// };

// export default App;





// using backend

import { useEffect, useState } from "react";

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [from, setfrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const [rate, setRate] = useState(null);
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getCurrencies = async () => {
      const res = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
      const data = await res.json();
      setCurrencies(Object.keys(data.rates));
    };
    getCurrencies();
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try{
      const res = await fetch("http://localhost:5000/api/history");
      const data = await res.json();
      setHistory(data);
    }
    catch(err){
      console.log(err);
    }
  }

const handleConvert = async() => {
  if(!from || !to || !amount){
    alert("Please fill all values.");
    return;
  }

  try{
    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
    const data = await res.json();

    const exchangerate = data.rates[to];
    const converted = amount * exchangerate;

    setResult(converted.toFixed(2));
    setRate(exchangerate.toFixed(2));

    const newRecord = {
      from: from,
      to,
      amount,
      result: converted.toFixed(2),
      rate: exchangerate.toFixed(2),
    }

    await fetch("http://localhost:5000/api/convert",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecord)
    });

    fetchHistory();
  }catch(erro){
    console.log(erro);
  }
}

  const filteredHistory = history.filter(
    (item) => 
      item.from.toLowerCase().includes(search.toLowerCase()) ||
      item.to.toLowerCase().includes(search.toLowerCase())
  )

 return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl">
      
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
        Currency Converter
      </h1>

      {/* from */}
      <div className="space-y-4">
        
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">From</label>
            <select
              value={from}
              onChange={(e) => setfrom(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select</option>
              {currencies.map((curr) => (
                <option key={curr} value={curr}>
                  {curr}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">To</label>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select</option>
              {currencies.map((curr) => (
                <option key={curr} value={curr}>
                  {curr}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          onClick={handleConvert}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Convert
        </button>
      </div>

      {/* RESULT */}
      {result && (
        <div className="mt-4 bg-green-100 p-3 rounded-lg text-center">
          <p className="text-sm text-gray-700">
            Exchange Rate: 1 {from} = {rate} {to}
          </p>
          <p className="font-semibold text-green-700">
            {amount} {from} = {result} {to}
          </p>
        </div>
      )}

      {/* SEARCH */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="Search by currency..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* TABLE */}
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
          
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2 border">From</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">To</th>
              <th className="px-4 py-2 border">Result</th>
              <th className="px-4 py-2 border">Rate</th>
              <th className="px-4 py-2 border">Date</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {filteredHistory.map((item, ind) => (
              <tr key={ind} className="even:bg-gray-50 hover:bg-gray-100">
                <td className="px-4 py-2 border">{item.from}</td>
                <td className="px-4 py-2 border">{item.amount}</td>
                <td className="px-4 py-2 border">{item.to}</td>
                <td className="px-4 py-2 border">{item.result}</td>
                <td className="px-4 py-2 border">{item.rate}</td>
                <td className="px-4 py-2 border">{item.date}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  </div>
);
};

export default App;
