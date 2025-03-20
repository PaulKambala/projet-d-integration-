'use client'
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
export default function Formulaire() {
    const { register, handleSubmit, getValues, formState: { errors },reset } = useForm({
        defaultValues: {
            nom: '',
            email: '',
            object: '',
            message: ''
            
        }
    })
    const sendMail = () => {
        const data = getValues()
        console.log(data)

        const templateParams = {
            nom: data.nom,
            email: data.email,
            object: data.object,
            message: data.message
        }
        emailjs
         .send(
          'service_e1yv0uk', // Service ID
          'template_mnn1r1i', // Template ID
          templateParams,
          'Nw2UDpniY09eXFr9s' //USER PUBLIC KEY
         )
         .then(
          (result) => {
                 console.log('SUCCESS!', result.status, result.text);
                 reset()
                 
                 
          },
          (error) => {
           console.log('FAILED...', error);
          }
         );

    }
    return (
     <div>
      <div className="flex flex-col md:flex-col  justify-center items-center p-10 space-y-10">
       <div>
        <p className="w-full text-center mt-5 text-2xl mb-5">
         Nous Contacter!!!
        </p>
        <p className="w-full text-center mt-5 italic ">
         Utilisez le formulaire ci-dessous pour nous envoyer un message. Nous
         vous répondrons dans les plus brefs délais !
        </p>
       </div>

       <form
        onSubmit={handleSubmit(sendMail)}
        className="flex gap-4 flex-col  w-80 md:min-w-96   bg-customBlue rounded-xl p-5 text-white"
       >
        <label className="flex gap-1 flex-col">
         Nom:
         <input
          {...register('nom', { required: 'Chanp obligatoire!!!' })}
          type="text"
          className="border-2 rounded-lg p-2 text-black"
         />
         {errors.nom && (
          <span className="text-red-500">{errors.nom.message}</span>
         )}
        </label>
        <label className="flex gap-1 flex-col">
         Email:
         <input
          {...register('email', {
           required: 'champ obligatoire',
           pattern: {
            value:
             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Adresse email invalide',
           },
          })}
          type="text"
          className="border-2 rounded-lg p-2 text-black"
         />
         {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
         )}
        </label>
        <label className="flex gap-1 flex-col">
         Objet:
         <input
          {...register('object', { required: 'champ obligatoire' })}
          type="text"
          className="border-2 rounded-lg p-2 text-black"
         />
         {errors.object && (
          <span className="text-red-500">{errors.object.message}</span>
         )}
        </label>
        <label className="flex gap-1 flex-col">
         Message:
         <textarea
          {...register('message', { required: 'Champs obligatoire' })}
          type="text"
          className="border-2 rounded-lg p-2 text-black"
          rows={5}
         />
         {errors.message && (
          <span className="text-red-500">{errors.message.message}</span>
         )}
        </label>
        <div className="flex justify-center gap-2 my-8">
         <input
          type="submit"
          value="Envoyer"
          className="bg-Griclair text-white rounded-lg p-2 cursor-pointer hover:bg-blue-700 text-black"
         />
         <input
          type="button"
          value="Annuler"
          className="bg-Griclair text-white rounded-lg p-2 cursor-pointer hover:bg-blue-700"
         />
        </div>
       </form>
      </div>
     </div>
    );
}