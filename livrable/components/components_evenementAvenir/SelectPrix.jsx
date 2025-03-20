export default function SelectPrix() {
  const valPrix = [
    { id: 1, description:  "Gratuit"},
    { id: 2, description: "Payant" }
  ];

  return (
    <div className="pt-4">
      <h1 className="text-md font-blod mb-2">Prix</h1>
      {valPrix.map((prix) => (
        <label
          key={prix.id}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <input type="checkbox" className="w-4 h-4 text-blue-600" />
          <span className="text-gray-700">{prix.description}</span>
        </label>
      ))}
    </div>
  );
}
