"use client";

import doctList from "@/public/json/ActiviteScolaire.json";
import DisplayActiviteScolaire from "./DisplayActiviteScolaire";
import { useState } from "react";
import { testimonialsData } from "./testimonials";

export default function ActiviteScolaire() {
  const [selectedSection, setSelectedSection] = useState("Activités Scolaires");
  const [newTestimonial, setNewTestimonial] = useState("");
  const [author, setAuthor] = useState("");
  const [testimonials, setTestimonials] = useState(testimonialsData);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTestimonials([
      ...testimonials,
      { id: testimonials.length + 1, section: selectedSection, text: newTestimonial, author },
    ]);
    setNewTestimonial("");
    setAuthor("");
  };

  return (
  <div className="flex flex-col items-center justify-center mb-10">
      <a
        href="#"
        className="text-xl text-blue-800 p-6 hover:text-blue-500 font-bold"
      >
        Explorez les Activités Scolaires
      </a>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 p-4">
        {doctList.map((event) => (
          <DisplayActiviteScolaire key={event.id} event={event} />
        ))}
      </div>

      {/* Section de Sélection pour les Témoignages */}
      <div className="w-full mt-6 bg-gray-100 p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Laissez un Témoignage</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <select 
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)} 
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Activités Scolaires">Activités Scolaires</option>
            <option value="Conférences">Conférences</option>
            <option value="Ateliers">Ateliers</option>

          </select>
          <textarea 
            value={newTestimonial} 
            onChange={(e) => setNewTestimonial(e.target.value)} 
            placeholder="Votre témoignage"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            placeholder="Votre nom"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button type="submit" className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
            Soumettre
          </button>
        </form>
      </div>

      {/* Section des Témoignages affichés */}
      <div className="bg-white p-4 w-full mt-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold">Témoignages</h2>
        {testimonials.filter(t => t.section === selectedSection).map(testimonial => (
          <blockquote key={testimonial.id} className="italic mb-2">
            "{testimonial.text}" - <span className="font-semibold">{testimonial.author}</span>
          </blockquote>
        ))}
      </div>
    </div>
  );
}