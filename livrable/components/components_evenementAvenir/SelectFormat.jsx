export default function SelectFormat(){
  const valFormat = [
    { id: 1, description: "Cours" },
    { id: 2, description: "Conférence" },
    { id: 3, description: "Festival" },
    { id: 4, description: "Jeux" },
  ];
  
    
      return (
        <div className="pt-4">
          <h1 className="text-md font-blod mb-2">Formats</h1>
          {valFormat.map((format) => (
            <label
              key={format.id}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input type="checkbox" className="w-4 h-4 text-blue-600" />
              <span className="text-gray-700">{format.description}</span>
            </label>
          ))}
        </div>
      );
}