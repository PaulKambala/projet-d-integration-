import Image from "next/image";
export default function DisplayTendance({ event }) {
  return (
    <div
      key={event.id}
      className="flex flex-col items-center p-4 overflow-hidden transform transition duration-300 hover:scale-105 "
    >
      <Image
        src={event.image}
        alt={event.description}
        width={100}
        height={100}
        className="rounded-full "
      />
      <p className="text-sm font-semibold  mt-2">{event.description}</p>
    </div>
  );
}
