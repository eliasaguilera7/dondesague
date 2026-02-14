import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Truck, 
  ShieldCheck, 
  Clock, 
  Droplets, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  MapPin,
  Wrench,
  Trash2,
  Facebook,
  Instagram
} from 'lucide-react';

// --- Componentes Reutilizables ---

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Button = ({ children, variant = 'primary', className = '', onClick }) => {
  const baseStyles = "px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 shadow-lg";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-green-500 text-white hover:bg-green-600",
    outline: "border-2 border-white text-white hover:bg-white/10"
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
    <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        {isOpen ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-gray-400" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// --- Aplicación Principal ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Actualizar título de la página para SEO y pestaña del navegador
    document.title = "Desagote de Pozo Ciego en Asunción 24/7 | Don Desagüe";

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/595986858317?text=Hola,%20necesito%20información%20sobre%20el%20servicio%20de%20desagote', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+595986858317';
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-900">
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img 
              src="images/logo.png" 
              alt="Don Desagüe Logo" 
              className="h-18 w-auto"
            />
           
          </div>

          {/* Menú de Navegación */}
          <div className={`hidden lg:flex items-center gap-8 font-medium transition-colors ${scrolled ? 'text-gray-600' : 'text-white'}`}>
            <a href="#inicio" className="hover:text-blue-500 transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-blue-500 transition-colors">Servicios</a>
            <a href="#proceso" className="hover:text-blue-500 transition-colors">Proceso</a>
            <a href="#flota" className="hover:text-blue-500 transition-colors">Nuestra Flota</a>
            <a href="#faq" className="hover:text-blue-500 transition-colors">Preguntas</a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button onClick={handleCall} className={`flex items-center gap-2 font-bold transition-colors ${scrolled ? 'text-blue-900' : 'text-white'}`}>
              <Phone size={18} /> 0986 858 317
            </button>
            <Button variant="secondary" className="py-2 px-6 text-sm" onClick={handleWhatsApp}>
              <MessageCircle size={18} /> Pedir Presupuesto
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section con Imagen de Fondo Full */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('images/herodesague.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/60 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Volver a una sola columna de contenido */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 backdrop-blur-md text-blue-200 rounded-full text-sm font-bold mb-8 border border-blue-400/30">
              <Clock size={16} /> Atención de Urgencia 24/7 en Asunción
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6">
              Servicio de Desagote <br />
              <span className="text-blue-400">Rápido y Garantizado</span>
            </h1>
            <p className="text-xl text-blue-50/90 mb-10 max-w-xl leading-relaxed">
              No dejes que un pozo lleno arruine tu día. Contamos con camiones de alta succión para vaciado de pozos ciegos, cloacas y limpiezas industriales.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button onClick={handleCall} className="w-full sm:w-auto text-lg px-10 py-4">
                <Phone size={22} /> Llamar Ahora
              </Button>
              <Button variant="outline" onClick={handleWhatsApp} className="w-full sm:w-auto text-lg px-10 py-4">
                <MessageCircle size={22} /> WhatsApp
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-3 text-white/80 font-medium">
                <CheckCircle2 size={20} className="text-green-400" />
                <span>+15 Años de Servicio</span>
              </div>
              <div className="flex items-center gap-3 text-white/80 font-medium">
                <CheckCircle2 size={20} className="text-green-400" />
                <span>Factura Legal</span>
              </div>
              <div className="flex items-center gap-3 text-white/80 font-medium">
                <CheckCircle2 size={20} className="text-green-400" />
                <span>Precios Justos</span>
              </div>
            </div>

            {/* Especialistas mensaje */}
            <p className="mt-6 text-blue-100/90 text-lg font-medium">
              Somos especialistas en soluciones integrales para cada desagüe cloacal
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce hidden md:block">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-blue-900 mb-6">Soluciones Profesionales</h2>
            <p className="text-gray-600 text-lg leading-relaxed">Equipamiento especializado para cada necesidad, garantizando limpieza y rapidez en cada trabajo.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* 1. Desagote de Pozo Ciego */}
            <ServiceCard 
              icon={Droplets}
              title="Desagote de Pozo Ciego"
              description="Vaciado completo con camión cisterna de alta capacidad. Solución inmediata para desbordes y malos olores en viviendas y empresas."
            />
            
            {/* 2. Cámaras Sépticas y Limpieza de Registros (Fusionado) */}
            <ServiceCard 
              icon={Wrench}
              title="Cámaras Sépticas y Limpieza de Registros"
              description="Limpieza profunda de cámaras sépticas y limpieza de registros cloacales. Servicio preventivo y correctivo para asegurar un flujo constante y evitar obstrucciones."
            />
            
            {/* 3. Destranque de Cloacas y Destapado de Cañerías (Fusionado) */}
            <ServiceCard 
              icon={Trash2}
              title="Destranque de Cloacas y Destapado de Cañerías"
              description="Destranque de cloacas y destapado de cañerías internas y externas con equipos de presión. Solución efectiva para baños, cocinas y sistemas pluviales."
            />
            
            {/* 4. Desagote Cloacal Urgente 24/7 */}
            <ServiceCard 
              icon={Clock}
              title="Desagote Cloacal Urgente 24/7"
              description="Servicio de desagote cloacal urgente ante emergencias sanitarias y desbordes críticos. Atención rápida en Asunción y alrededores."
            />
            
            {/* 5. Servicio con Camión Cisterna */}
            <ServiceCard 
              icon={Truck}
              title="Servicio con Camión Cisterna"
              description="Flota de camiones cisterna equipados para grandes volúmenes de extracción y transporte seguro de residuos líquidos."
            />
            
            {/* 6. Atención Industrial y Atención Domiciliaria (Fusionado) */}
            <ServiceCard 
              icon={ShieldCheck}
              title="Atención Industrial y Atención Domiciliaria"
              description="Atención industrial para fábricas, empresas y consorcios, y atención domiciliaria para hogares y comercios. Servicio profesional con garantía de calidad."
            />
          </div>
        </div>
      </section>

      {/* Sección de Confianza (Banner Oscuro) */}
      <section className="py-24 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full blur-[120px] -mr-48 -mt-48 opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight italic">
                La confianza de <br/><span className="text-blue-400 underline decoration-blue-500/30">miles de clientes</span> en Asunción
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Respuesta en 60 Minutos", desc: "Contamos con múltiples unidades distribuidas estratégicamente para llegar rápido." },
                  { title: "Equipos de Alta Potencia", desc: "Nuestros camiones succionan lodo y sedimentos que otros no pueden extraer." },
                  { title: "Garantía de Satisfacción", desc: "No nos retiramos hasta que el sistema funcione correctamente y el área esté limpia." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <div className="w-12 h-12 bg-blue-900 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                      <ShieldCheck className="text-blue-400 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                      <p className="text-blue-200/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2rem] border border-white/10 shadow-2xl">
               <div className="text-center mb-10">
                 <h3 className="text-3xl font-bold mb-3">¿Necesitas ayuda ya?</h3>
                 <p className="text-blue-300">Presupuesto gratuito por teléfono o chat</p>
               </div>
               <div className="space-y-5">
                  <button onClick={handleCall} className="w-full bg-white text-blue-950 py-5 rounded-2xl font-black text-2xl flex items-center justify-center gap-4 hover:bg-blue-50 transition-all shadow-lg">
                    <Phone className="fill-current" /> 0986 858 317
                  </button>
                  <button onClick={handleWhatsApp} className="w-full bg-green-500 text-white py-5 rounded-2xl font-black text-2xl flex items-center justify-center gap-4 hover:bg-green-600 transition-all shadow-lg">
                    <MessageCircle className="fill-current" /> WhatsApp
                  </button>
               </div>
               <div className="mt-8 flex items-center justify-center gap-3 text-blue-400 font-medium">
                 <MapPin size={18} />
                 <span>Asunción, Luque, Lambaré y Central</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Proceso Simple</span>
            <h2 className="text-4xl font-black text-blue-900 mt-3">Vaciado en 3 pasos</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-blue-100 -z-10" />
            
            {[
              { step: "1", title: "Llamada o Chat", desc: "Nos comentas tu ubicación y el tamaño del pozo para una cotización rápida." },
              { step: "2", title: "Visita Técnica", desc: "El camión llega a tu domicilio. Evaluamos el acceso y procedemos al vaciado." },
              { step: "3", title: "Finalización", desc: "Limpiamos la zona y verificamos que el flujo sea el correcto. ¡Listo!" }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-8 shadow-blue-200 shadow-xl rotate-3">
                  {step.step}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-blue-900">{step.title}</h4>
                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de Fotos */}
      <section id="flota" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-blue-900 mb-4">Nuestra Flota</h2>
            <p className="text-gray-600 text-lg">Equipos modernos listos para atender tu urgencia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['camion1', 'camion2', 'camion3', 'camion4'].map((img, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl h-64 md:h-80 shadow-lg cursor-pointer">
                <img 
                  src={`images/${img}.jpeg`} 
                  alt={`Camión Don Desagüe ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {e.target.src = 'https://placehold.co/600x400?text=Camion+Don+Desague'}} // Fallback si no existe la imagen
                />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-blue-900 mb-4">Preguntas Frecuentes</h2>
            <p className="text-gray-500">Todo lo que necesitas saber antes de contratar el servicio.</p>
          </div>
          <div className="space-y-2">
            <AccordionItem 
              question="¿Cuánto tiempo toma vaciar un pozo ciego?" 
              answer="El proceso suele durar entre 45 y 90 minutos dependiendo de la profundidad y la densidad de los residuos. Nuestros camiones tienen bombas de alta potencia que agilizan el trabajo."
            />
            <AccordionItem 
              question="¿Emiten factura legal?" 
              answer="Sí, emitimos factura legal por todos nuestros servicios, tanto para particulares como para empresas e industrias."
            />
            <AccordionItem 
              question="¿Tienen camiones de diferentes tamaños?" 
              answer="Contamos con una flota diversa para acceder a calles estrechas o para grandes volúmenes industriales en fábricas y edificios."
            />
            <AccordionItem 
              question="¿Atienden domingos y feriados?" 
              answer="¡Totalmente! Las emergencias no esperan, por eso nuestro equipo técnico está de guardia los 365 días del año."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <img 
                  src="images/logo.png" 
                  alt="Don Desagüe Logo" 
                  className="h-25 w-auto"
                />
             
              </div>
              <p className="text-slate-400 max-w-md text-lg leading-relaxed mb-6">
                Líderes en servicios sanitarios en el Área Metropolitana de Asunción. 
                Soluciones rápidas, limpias y con la mejor tecnología de succión.
              </p>
              
              {/* Redes Sociales */}
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=100054368028614" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-900 p-3 rounded-full hover:bg-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/dondesague/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-900 p-3 rounded-full hover:bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-8">Urgencias</h4>
              <ul className="space-y-4 text-slate-400 text-lg">
                <li className="flex items-center gap-3"><Phone size={20} className="text-blue-500" /> 0986 858 317</li>
                <li className="flex items-center gap-3"><Phone size={20} className="text-blue-500" /> 0991 592 560</li>
                <li className="flex items-center gap-3"><MapPin size={20} className="text-blue-500" /> Asunción, Paraguay</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-8">Servicios</h4>
              <ul className="space-y-4 text-slate-400">
                <li>Desagote de Pozo</li>
                <li>Limpieza de Cámaras</li>
                <li>Destranque de Cañería</li>
                <li>Limpieza Industrial</li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-900 flex justify-center text-center text-slate-500 text-sm">
            <p>© Don Desagüe Paraguay. Profesionales de confianza.</p>
          </div>
          
          {/* Créditos Desarrollador */}
          <div className="mt-8 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
            <p>
              Desarrollado por <a href="https://tuwebpy.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 font-medium transition-colors">TuWebPy</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Botón Flotante WhatsApp */}
      <button 
        onClick={handleWhatsApp}
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-5 rounded-2xl shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center group"
      >
        <WhatsAppIcon size={32} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold whitespace-nowrap">
          ¿En qué podemos ayudarte?
        </span>
      </button>

    </div>
  );
}