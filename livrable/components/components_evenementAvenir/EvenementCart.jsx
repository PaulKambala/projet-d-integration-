import doctList from "@/public/json/doc.json";
import DisplayEvenementCart from "./DisplayEvenementCart";

export default function EvenementCart({ changePage, setSelectedEvent }) {
  return (
    <div className="border-b border-gray-300 pt-5">
      <h1 className="text-2xl font-bold">Les événements</h1>

      <div className="grid grid-cols-1 gap-8 p-4 mb-10">
        {doctList.map((event) => (
          <button
            key={event.id}
            onClick={() => {
              setSelectedEvent(event);
              changePage("element");
            }}
            className="w-full"
          >
            <DisplayEvenementCart event={event} />
          </button>
        ))}
      </div>
    </div>
  );
}
