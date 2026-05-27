import React from 'react';

export default function WhatsAppBtn() {
  const whatsappUrl = "https://wa.me/918408022773?text=Hello%20VI%20Enterprises,%20I%20visited%20your%20website%20and%20want%20to%20inquire%20about%20your%20industrial%20plating%20services.";

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 group focus:outline-none"
      aria-label="Contact via WhatsApp"
    >
      {/* Decorative pulse ring backdrop */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10 group-hover:opacity-0 transition-opacity"></span>
      
      <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.449 5.412 1.451 5.428 0 9.845-4.414 9.848-9.839.002-2.628-1.02-5.1-2.871-6.953C17.18 1.96 14.71 .938 12.01.938c-5.435 0-9.85 4.414-9.853 9.84 0 1.922.501 3.8 1.452 5.416l-.995 3.637 3.73-.978zm11.567-5.45c-.3-.15-1.77-.874-2.042-.972-.272-.1-.471-.15-.669.15-.198.3-.767.972-.94 1.169-.173.2-.347.225-.648.075-.3-.15-1.266-.467-2.41-1.485-.89-.794-1.49-1.775-1.665-2.075-.175-.3-.019-.463.13-.612.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.77-.724 2.017-1.396.248-.673.248-1.25.173-1.396-.075-.149-.272-.224-.571-.374z"/>
      </svg>
    </a>
  );
}