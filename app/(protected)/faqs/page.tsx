import { AccordionFaqs } from "./accordion-faqs";

export default function page() {
  return (
    <div className="mx-auto max-w-4xl">
      <h2 className="mb-6 text-3xl font-bold tracking-tighter">FAQS</h2>
      <div className="rounded-lg bg-background p-6 shadow-lg">
        <div className="mb-5">
          <p>
            Bienvenido a nuestra sección de Preguntas Frecuentes (FAQ) diseñada
            específicamente para brindarte respuestas rápidas y claras sobre el
            dashboard para empresas que hemos desarrollado con pasión y
            dedicación.
          </p>
          <p>
            En nuestra página de FAQs, encontrarás una recopilación de las
            preguntas más comunes que nuestros usuarios suelen hacer sobre el
            funcionamiento, características y uso de nuestro dashboard. Desde
            cómo registrarte en la plataforma hasta cómo aprovechar al máximo
            sus funciones, hemos reunido una lista exhaustiva de interrogantes
            para ofrecerte la mejor experiencia posible.
          </p>
          <p>
            Nuestro equipo se ha esforzado por proporcionar respuestas
            detalladas y fáciles de entender para garantizar que encuentres la
            información que necesitas de manera rápida y sencilla. Si no
            encuentras la respuesta que buscas, no dudes en contactarnos.
            Estamos aquí para ayudarte en cada paso del camino.
          </p>
          <p>
            Explora nuestras FAQs y descubre cómo nuestro dashboard puede
            impulsar la eficiencia y el éxito de tu empresa.
          </p>
        </div>
        <AccordionFaqs />
      </div>
    </div>
  );
}
