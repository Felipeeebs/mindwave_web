import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

const cacheKey = "sendEmailMindwave";

const FormContact = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const isCacheValid = (cache) => {
        return (
            cache &&
            cache.timestamp &&
            Date.now() - cache.timestamp < 30 * 60 * 1000 // cache is valid for 30 minutes
        );
    };
    
    const getCachedResult = () => {
        const cache = JSON.parse(localStorage.getItem(cacheKey));
        if (isCacheValid(cache)) {
            return cache.result;
        }
        return null;
    };

    const cacheResult = () => {
        localStorage.setItem(
            cacheKey,
            JSON.stringify({ timestamp: Date.now() })
        );
    };
    
    const onSubmit = async (data) => {

        const cachedResult = getCachedResult();
        if (cachedResult !== null) {
            Swal.fire({
            title: 'Info',
            text: 'Este formulario ya ha sido enviado.',
            icon: 'info',
            confirmButtonText: 'Aceptar',
            timer: 5000
            });
            reset();
            return cachedResult;
        }

        const response = await fetch('/api/mail/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                subject: data.subject,
                name: data.name,
                email: data.email,
                message: data.message
            })
        });

        if(response.status === 200){
            Swal.fire({
                title: 'Exito',
                text: 'Gracias por contactarnos.',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                timer: 5000
            });
            cacheResult();
            reset();
        }

    };

    return (
        <section className="py-20">
            <div className="container">
                <div className="max-w-2xl lg:max-w-3xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                            ¡Ponte en contacto!
                        </h2>
                        <p className="text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">
                            Estaremos encantados de saber de usted
                        </p>
                    </div>
                    {/*<div className="flex flex-wrap -mx-3 text-center">
                        <div className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                            <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            <div className="leading-relaxed">
                                <span className="text-sm text-blueGray-400">Teléfono</span>
                                <p>+ 48 654-430-309</p>
                                <p>+ 1 6532-430-309</p>
                            </div>
                        </div>
                        <div className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                            <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <div className="leading-relaxed">
                                <span className="text-sm text-blueGray-400">Email</span>
                                <p>contact@monst.com</p>
                                <p>pat@example.com</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">
                            <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <div className="leading-relaxed">
                                <span className="text-sm text-blueGray-400">Dirección</span>
                                <p>11567 E Broadview Dr</p>
                                <p>Colorado(CO), 80117</p>
                            </div>
                        </div>
                     </div>*/}
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-wrap mb-4 -mx-3 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                                <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                                    <div className="mb-4">
                                        <input {...register("subject",{ required: true })} className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Asunto" />
                                        {errors.subject && <span>This field is required</span>}
                                    </div>
                                    <div className="mb-4">
                                        <input {...register("name",{ required: true })} className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Nombre" />
                                        {errors.name && <span>This field is required</span>}
                                    </div>
                                    <div className="mb-4">
                                        <input {...register("email",{ required: true, pattern: /^\S+@\S+$/i })} className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="email" placeholder="name@example.com" />
                                        {errors.email && <span>Please enter a valid email address</span>}
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 px-3">
                                    <textarea {...register("message",{ required: true })} className="w-full h-full p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none" placeholder="Mensaje..."></textarea>
                                    {errors.message && <span>This field is required</span>}
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" type="submit">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormContact;