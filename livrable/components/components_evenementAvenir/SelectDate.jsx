export default function SelectDate() {
  const valdate = [
    { id: 1, description: "Aujourd'hui" },
    { id: 2, description: "Demain" },
    { id: 3, description: "Cette semaine" },
    { id: 4, description: "Semaine prochaine" },
  ];

  return (
    <div className="pt-4">
      <h1 className="text-md font-blod mb-2">Date</h1>
      {valdate.map((date) => (
        <label
          key={date.id}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <input type="checkbox" className="w-4 h-4 text-blue-600" />
          <span className="text-gray-700">{date.description}</span>
        </label>
      ))}
    </div>
  );
}
