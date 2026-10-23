// ===== CS Travel Group — Main JS =====
// COPIA LOCAL: cada pagina define window.__COPIA_BASE (ruta hasta la raiz de la copia)
// y window.__COPIA_RUTA (la ruta que tendria en el sitio publicado).
const __copia = (p) => (window.__COPIA_BASE || '') + p;

const translations = {
  es: {
    logo: 'CS<span>Travel</span> Group',
    nav_home: 'Inicio',
    nav_services: 'Servicios',
    nav_why: 'Empresas',
    nav_process: 'Médicos',
    nav_destinations: 'Destinos',
    nav_about: 'Nosotros',
    nav_contact: 'Contacto',
    nav_portal: 'Portal',
    nav_cta: 'Hablemos hoy',
    hero_cta: 'Quiero saber más',
    hero_t1: 'El área de viajes que<br>no aparece en el organigrama,<br><em>pero se nota en cada viaje</em>',
    hero_d1: 'Gestionamos los viajes corporativos de empresas, pymes e instituciones de salud sin exigir mínimos, con control del gasto, soportes contables y un servicio garantizado por contrato.',
    hero_t2: 'Cada viaje de tu empresa puede <span class="hero-highlight"><em>generar retorno</em></span>',
    hero_d2: 'Lo que hoy es un gasto logístico se convierte en una herramienta para controlar el gasto, retener talento, fidelizar a tu comunidad y generar un retorno. Sin inversión, sin mínimos y sin permanencia.',
    hero_t3: 'Todo queda<br>por escrito.<br><em>Servicio garantizado por contrato</em>',
    hero_d3: 'Las condiciones de nuestra gestión, los tiempos de respuesta y el acompañamiento quedan pactados en el contrato. Cada solicitud queda registrada en nuestra plataforma propia, con soporte 24/7 durante el viaje.',
    search_placeholder: '¿Hacia dónde viaja tu grupo?',
    hero_search_btn: 'Cotizar itinerario ✦',
    capture_title: 'Cada viaje que gestionas hoy es una oportunidad que todavía no estás capturando.',
    capture_p1: 'Tu empresa coordina viajes que nadie negoció. Tus pacientes organizan solos un desplazamiento que tú podrías estar monetizando. En los dos casos hay valor económico que se está quedando en manos de terceros.',
    capture_p2: 'CS Travel Group existe para que ese valor sea tuyo.',
    prof_label: 'Elige tu perfil',
    prof_title: '¿Con quién trabajamos?',
    prof_subtitle: 'Elige el tipo de organización y te llevamos al flujo correcto de cotización, propuesta y seguimiento.',
    prof_c_title: 'Empresas',
    prof_c_desc: 'Somos el área de viajes de tu empresa: cotizamos, reservamos, facturamos y damos soporte, sin mínimos y con un beneficio de bienestar para tu equipo.',
    prof_c_cta: 'Conoce cómo funciona',
    prof_c_f1: 'Coordinamos los viajes corporativos de tu empresa.',
    prof_c_f2: 'Te damos acceso a tarifas más económicas que las OTAs.',
    prof_c_f3: 'Tu equipo usa esas mismas tarifas en sus viajes personales. Sin permanencia, sin costos ocultos.',
    prof_c_btn: 'Conoce cómo funciona →',
    prof_m_title: 'Médicos y clínicas',
    prof_m_desc: 'Nos encargamos de la logística de viaje de tus pacientes y acompañantes, ampliamos tu capacidad de respuesta y te devolvemos el tiempo que le dedicabas a eso.',
    prof_m_cta: 'Conoce el programa',
    prof_e_title: 'Eventos',
    prof_e_desc: 'Viajes de boda para los novios y sus invitados, viajes a conciertos y la logística de viaje del staff de tus eventos.',
    prof_e_cta: 'Cotiza tu evento',
    prof_m_f1: 'Nos encargamos de la logística de viaje de tus pacientes y acompañantes.',
    prof_m_f2: 'Tu paciente nunca sabe que existimos.',
    prof_m_f3: 'Tú te llevas el crédito y un ingreso por cada viaje confirmado.',
    prof_m_btn: 'Conoce el programa →',
    prof_c_det_title: 'Servicios Corporativos Destacados',
    prof_c_det_p: 'Entendemos que un viaje corporativo es una inversión en tu equipo. Nos encargamos de todo el proceso para que tú te enfoques en los objetivos de la empresa:',
    prof_c_det_li1: '<strong>Viajes de Incentivo:</strong> Recompensa a tus mejores talentos con experiencias exclusivas y memorables.',
    prof_c_det_li2: '<strong>Convenciones:</strong> Búsqueda de venues, hoteles con salones equipados y logística de asistentes.',
    prof_c_det_li3: '<strong>Tarifas negociadas:</strong> Acceso a condiciones especiales para grupos aéreos y hoteleros.',
    prof_c_det_btn: 'Cotizar viaje corporativo',
    prof_m_det_title: 'Servicios para Profesionales e Instituciones',
    prof_m_det_p: 'Sabemos que tu tiempo es vital. Coordinamos toda la logística para tu asistencia a congresos y eventos académicos internacionales:',
    prof_m_det_li1: '<strong>Alojamiento estratégico:</strong> Bloqueos en hoteles cercanos a los centros de convenciones.',
    prof_m_det_li2: '<strong>Soporte en destino:</strong> Asistencia bilingüe para imprevistos o cambios de última hora.',
    prof_m_det_li3: '<strong>Itinerarios combinados:</strong> Opciones para extender el viaje con actividades de turismo en la ciudad anfitriona.',
    prof_m_det_btn: 'Cotizar viaje para congreso',
    serv_title: 'Lo que significa trabajar con nosotros',
    serv_desc: 'Operamos detrás de tu marca. Tu cliente, paciente o empleado interactúa "contigo". Cuando en realidad nosotros ejecutamos la logística completa, negociamos las tarifas y resolvemos imprevistos. Tú te llevas el crédito y el retorno económico.',
    serv_quote: '"Me encargo de que cada empresa y cada médico sienta que tiene un equipo de viajes propio."',
    serv_quote_author: 'Andrés, fundador de CS Travel Group',
    serv_l1_t: 'Tarifas corporativas',
    serv_l1_d: 'Más de 30 proveedores directos y tarifas preferenciales para cada viaje de tu equipo.',
    serv_l2_t: 'Garantizado por contrato',
    serv_l2_d: 'Tiempos de respuesta y acompañamiento pactados por escrito.',
    serv_l3_t: 'Control y retorno',
    serv_l3_d: 'Ves cuánto se gasta en viajes, en qué y quién viaja, y recibes un retorno por los viajes de tu comunidad.',
    serv_btn: 'Quiero saber más',
    proof_title: 'Lo que dicen nuestros clientes',
    proof_q1: 'CS Travel Group es nuestro aliado estratégico. Su operación es impecable y siempre están un paso adelante.',
    proof_q2: 'Gracias a CS, recibimos pacientes internacionales sin estrés. Ellos se encargan de todo.',
    proof_q3: 'Rapidez, tarifas y atención humana. Eso es lo que necesitamos en cada viaje corporativo.',
    proof_name_1: 'María A.',
    proof_role_1: 'Gerente de Operaciones<br>Sector Financiero',
    proof_name_2: 'Dr. Alejandro R.',
    proof_role_2: 'Director Médico<br>Clínica de Especialistas',
    proof_name_3: 'Laura G.',
    proof_role_3: 'Coordinadora de Viajes<br>Industria Manufacturera',
    diff_title: 'La diferencia entre tener CS Travel y no tenerlo.',
    diff_without: 'Sin CS Travel',
    diff_with: 'Con CS Travel',
    diff_w1: 'Proveedores dispersos y sin control.',
    diff_w2: 'Cambios y problemas sin respuesta.',
    diff_w3: 'Sin visibilidad de gastos ni reportes.',
    diff_w4: 'Pérdida de tiempo y productividad.',
    diff_c1: 'Un solo aliado, todo bajo control.',
    diff_c2: 'Atención 24/7 y soluciones rápidas.',
    diff_c3: 'Reportes claros y datos en tiempo real.',
    diff_c4: 'Más eficiencia, más resultados.',
    prom_title: 'Mejor que una <em>agencia tradicional</em>',
    prom_desc: 'No usamos paquetes estándar. Diseñamos viajes a la medida con expertos que conocen el destino de primera mano.',
    prom_c1_t: 'Expertos locales en el destino',
    prom_c1_s: 'Más del 95% de satisfacción.',
    prom_c1_d: 'Organiza un viaje a medida junto a nuestro equipo bilingüe en Colombia y nuestra red global de proveedores.',
    prom_c2_t: 'Experiencias inolvidables',
    prom_c2_s: 'Logística impecable.',
    prom_c2_d: 'Actividades únicas que no encontrarás en catálogos genéricos, pensadas exactamente para el perfil de tu grupo.',
    prom_c3_t: 'Respaldo y seguridad total',
    prom_c3_s: 'Tu inversión protegida.',
    prom_c3_d: 'Afiliación a Archer Travel Group, con sus licencias activas en Florida y California y su acreditación IATA.',
    stat_1_lbl: 'viajeros coordinados',
    stat_2_lbl: 'proveedores directos',
    stat_3_lbl: 'Barranquilla, Colombia',
    stat_3_val: 'Sede en',
    stat_4_val: 'Soporte',
    stat_4_lbl: '24 / 7',
    srv_grid_label: 'Nuestras Soluciones',
    srv_grid_title: 'Servicios corporativos integrales',
    srv_grid_subtitle: 'Cada servicio resuelve una parte crítica del viaje, pero el verdadero valor está en coordinarlos como una sola operación.',
    srv_c1_t: 'Vuelos grupales',
    srv_c1_d: 'Bloqueos, condiciones especiales y estrategia tarifaria para grupos que necesitan salir coordinados, no improvisados.',
    srv_c2_t: 'Hotelería corporativa',
    srv_c2_d: 'Selección de hoteles por ubicación, categoría y conveniencia operativa para que el hospedaje sume al plan, no lo complique.',
    srv_c3_t: 'Traslados & Logística',
    srv_c3_d: 'Movilidad terrestre, llegadas escalonadas, ventanas de recogida y soporte en destino para que el grupo avance con orden.',
    srv_c4_t: 'Turismo médico',
    srv_c4_d: 'Logística sensible para congresos, misiones y viajes asociados a salud, con protocolos más claros y acompañamiento cercano.',
    srv_c5_t: 'Viajes de incentivo',
    srv_c5_d: 'Experiencias que elevan percepción de marca empleadora, reconocimiento y cultura interna sin perder control operativo.',
    srv_c6_t: 'Eventos & Convenciones',
    srv_c6_d: 'Diseño y coordinación de eventos, convenciones y reuniones con un solo frente operativo para asistentes, agenda y proveedores.',
    phil_label: 'Nuestra Filosofía',
    phil_title: 'Viajar bien no debería ser un lujo,<br><em>es una inversión estratégica.</em>',
    phil_1_t: 'Acompañamos resultados, no solo viajes',
    phil_1_d: 'Entendemos que cada viaje corporativo tiene un objetivo de negocio. Diseñamos la logística para que tu equipo se enfoque en lo importante.',
    phil_2_t: 'La confianza como base',
    phil_2_d: 'Te acompañamos antes, durante y después del viaje, con transparencia en precios y respaldo legal en Estados Unidos y Colombia.',
    phil_3_t: 'Red global de proveedores',
    phil_3_d: 'Comparamos y negociamos entre más de una docena de proveedores verificados para obtener la mejor relación costo-beneficio para tu empresa.',
    phil_4_t: 'Seguridad y cumplimiento',
    phil_4_d: 'Planificamos cuidando cada detalle con responsabilidad. Operamos con Registro Nacional de Turismo vigente, a través de proveedores acreditados ante IATA y ARC, y con protocolos claros.',
    phil_5_t: 'Atención personalizada',
    phil_5_d: 'No eres un número de reserva. Asignamos un ejecutivo de cuenta dedicado que conoce las políticas de viaje de tu organización.',
    ig_title: 'Conecta con nosotros',
    ig_desc: 'Descubre destinos, tips de viajes corporativos y nuestro día a día.',
    ig_btn: 'Síguenos @cstravelgroup',
    bk_title: '¿Prefieres hablar con un experto primero?',
    bk_desc: 'Agenda una asesoría gratuita por videollamada para discutir las necesidades de viaje de tu organización.',
    bk_btn: 'Agendar asesoría (45 min) ✦',
    final_cta_label: 'Siguiente paso',
    final_cta_title: 'Cuéntanos cómo viaja tu empresa hoy',
    final_cta_desc: 'Escríbenos y agendamos una reunión para explicarte todo en detalle y preparar una propuesta a la medida.',
    final_cta_btn: 'Contáctanos',
    proc_label: 'Nuestro proceso',
    proc_title: 'De la idea al viaje en 4 pasos',
    proc_subtitle: 'Un proceso claro y sin complicaciones para que tu organización viaje con total confianza.',
    proc_s1_t: 'Consulta inicial',
    proc_s1_d: 'Nos cuentas las necesidades de tu grupo: destino, fechas, cantidad de personas y presupuesto estimado.',
    proc_s2_t: 'Diseño del plan',
    proc_s2_d: 'Exploramos opciones entre nuestros proveedores y te presentamos un itinerario personalizado con precios transparentes.',
    proc_s3_t: 'Confirmación',
    proc_s3_d: 'Una vez aprobado el plan, gestionamos todas las reservas: vuelos, hoteles, transporte, seguros y actividades.',
    proc_s4_t: 'El viaje',
    proc_s4_d: 'Tu grupo viaja con respaldo total. Nuestro equipo está disponible <span class="nowrap">24/7</span> durante toda la experiencia.',
    dest_label: 'Servicios',
    dest_title: 'Un servicio para cada <em>necesidad</em>',
    dest_subtitle: 'Desde los viajes recurrentes de tu equipo hasta la logística de viaje de tus pacientes. Sin mínimos, con facturación y soportes contables de cada viaje.',
    dest_c1_tag: 'CS Viajes corporativos',
    dest_c1_t: 'Viajes recurrentes de tu equipo',
    dest_c1_d: '',
    dest_c2_tag: 'CS eventos y grupos',
    dest_c2_t: 'Grupos, eventos y prensa',
    dest_c2_d: '',
    dest_c3_tag: 'CS Viajes de incentivo',
    dest_c3_t: 'Viajes que tu equipo recuerda',
    dest_c3_d: '',
    dest_c4_tag: 'CS Concierge médico',
    dest_c4_t: 'Logística médica para tus pacientes',
    dest_c4_d: '',
    dest_c5_tag: 'CS Academic Travel',
    dest_c5_t: 'Logística educativa para tu institución',
    dest_c5_d: '',
    cred_label: 'Respaldo',
    cred_title: 'Una empresa formal, registrada y vigilada',
    cred_l1_t: 'Registro Nacional de Turismo',
    cred_l1_d: 'Agencia de viajes y de turismo inscrita con RNT 299.130.',
    cred_l2_t: 'Cámara de Comercio de Barranquilla',
    cred_l2_d: 'CS Travel Group Colombia S.A.S., NIT 902.096.878-3, matrícula mercantil 945.042.',
    cred_l3_t: 'Protección de datos',
    cred_l3_d: 'Protección HIPAA con acuerdo BAA para la información de pacientes y viajeros, y tratamiento de datos conforme a la Ley 1581 de 2012.',
    rb_about_label: 'Quiénes somos',
    rb_about_title: 'Somos el área de viajes de las empresas que no tienen una propia',
    rb_about_p1: 'CS Travel Group es una agencia de viajes de Barranquilla que funciona como el área de viajes de las empresas, pymes e instituciones de salud que no tienen una propia.',
    rb_about_p2: 'Gestionamos los viajes corporativos sin exigir mínimos, ajustados al presupuesto de cada empresa y con facturación y soportes contables. A esa gestión le sumamos un programa de bienestar empresarial para colaboradores, directivos, sus familias y los clientes de la empresa.',
    rb_about_p3: 'Todo funciona sobre una plataforma propia con trazabilidad de cada solicitud, más de 30 proveedores directos y protección HIPAA con acuerdo BAA. Y cada alianza queda formalizada por contrato, con garantías sobre nuestro servicio.',
    rb_about_f1: 'Sin mínimos',
    rb_about_f2: 'Facturación y soportes contables',
    rb_about_f3: 'Soporte 24/7 durante el viaje',
    about_label: 'Sobre nosotros',
    about_title: 'Detrás de CS Travel Group',
    about_p1: 'CS Travel Group nació de una idea sencilla pero poderosa: compartir nuestra pasión por descubrir el mundo y acompañar a quienes quieren hacerlo con respaldo real.',
    about_p2: 'Fundada oficialmente el 27 de octubre de 2025 y respaldada por Archer Travel Service Inc., nuestra agencia combina la cercanía del trato personalizado con la solidez de las acreditaciones internacionales más importantes del sector.',
    about_p3: 'Desde nuestra oficina en Barranquilla, Colombia, atendemos organizaciones que buscan un aliado confiable para mover grupos de manera profesional, segura y a precios justos.',
    cont_label: 'Contacto',
    cont_title: '¿Listo para planificar el próximo viaje de tu organización?',
    cont_subtitle: 'Cuéntanos sobre tu grupo y destino. Te responderemos con una propuesta personalizada en menos de 48 horas.',
    contact_page_title: 'Cuéntanos cómo viaja tu empresa hoy',
    contact_page_desc: '',
    cont_email_t: 'Correo electrónico',
    cont_col_t: 'COL',
    cont_col_d: 'Barranquilla, Atlántico, Colombia',
    form_name_lbl: 'Nombre completo',
    form_name_ph: 'Tu nombre',
    form_email_lbl: 'Correo electrónico',
    form_email_ph: 'correo@ejemplo.com',
    form_phone_lbl: 'Teléfono / WhatsApp',
    form_phone_ph: '+57 300 000 0000',
    form_org_lbl: 'Organización',
    form_org_ph: 'Nombre de tu empresa o institución',
    form_kind_lbl: 'Tipo de viaje',
    form_kind_opt0: 'Seleccionar...',
    form_kind_opt1: 'Corporativo / incentivo',
    form_kind_opt2: 'Congreso médico',
    form_kind_opt3: 'Académico / educativo',
    form_kind_opt4: 'Convención / evento',
    form_kind_opt5: 'Otro grupo',
    form_type_lbl: 'Tipo de organización',
    form_type_opt0: 'Seleccionar...',
    form_type_opt1: 'Universidad',
    form_type_opt2: 'Colegio',
    form_type_opt3: 'Empresa',
    form_type_opt4: 'Organización / Fundación',
    form_type_opt5: 'Otro',
    form_dest_lbl: 'Destino tentativo',
    form_dest_ph: 'Ciudad o país',
    form_people_lbl: 'Número de viajeros',
    form_people_ph: '25',
    form_dates_lbl: 'Fechas aproximadas',
    form_dates_ph: 'Mes, rango o fechas tentativas',
    form_datein_lbl: 'Fecha de entrada',
    form_dateout_lbl: 'Fecha de salida',
    form_budget_lbl: 'Presupuesto estimado',
    form_budget_ph: 'Opcional',
    form_msg_lbl: 'Cuéntanos sobre tu viaje',
    form_msg_ph: 'Destino, número aproximado de personas, fechas tentativas, presupuesto estimado...',
    form_step1_t: 'Datos iniciales',
    form_step1_d: 'Primero entendemos quién solicita la cotización y qué tipo de organización representa.',
    form_step2_t: 'Detalles del viaje',
    form_step2_d: 'Con esta información preparamos una respuesta más útil para tu equipo.',
    form_step3_t: 'Últimos detalles',
    form_step3_d: 'Agrega fechas, presupuesto o contexto para que la primera respuesta sea más precisa.',
    form_next: 'Continuar',
    form_prev: 'Volver',
    form_btn: 'Enviar solicitud de cotización →',
    foot_desc: 'Logística de viajes corporativos y médicos, gestionada de principio a fin.',
    foot_nav_t: 'Navegación',
    foot_nav_h: 'Inicio',
    foot_nav_p: 'Perfiles',
    foot_leg_t: 'Legal',
    foot_leg_t1: 'Términos y condiciones',
    foot_leg_t2: 'Política de privacidad',
    foot_leg_t3: 'Política de reembolso',
    foot_leg_t4: 'Accesibilidad',
    foot_leg_t5: 'Aviso de privacidad',
    foot_leg_t6: 'Política de cookies',
    foot_leg_t7: 'Código de conducta ESCNNA',
    foot_copy: '© 2026 CS Travel Group. Todos los derechos reservados.',
    foot_reg: 'CS Travel Group Colombia S.A.S. · NIT 902.096.878-3 · RNT 299.130 · Matrícula mercantil 945.042 · Barranquilla, Atlántico, Colombia',
    foot_escnna: 'CS Travel Group Colombia S.A.S., RNT 299.130, rechaza la explotación sexual comercial de niños, niñas y adolescentes. En Colombia la explotación y el abuso sexual de menores de edad son delitos sancionados penal y administrativamente, conforme a las Leyes 679 de 2001 y 1336 de 2009. Denuncie: Línea 141 del ICBF, Línea 123 de la Policía Nacional o Línea 122 de la Fiscalía.',
    foot_dev: 'Sitio desarrollado por <a href="https://kaivastudio.com/" target="_blank" rel="noopener">Kaiva Studio</a>',
    chat_agent_t: 'Asesor de Viajes',
    chat_agent_s: 'En línea',
    chat_start: '¡Hola! 👋 Soy tu asesor virtual de CS Travel Group. ¿En qué te puedo ayudar hoy?',
    chat_opt1: 'Soy empresa',
    chat_opt2: 'Soy médico o profesional',
    chat_opt3: 'Soy universidad o colegio',
    chat_opt4: 'Quiero cotizar un grupo',
    chat_opt5: 'Quiero agendar asesoría',
    chat_msg_emp: 'Perfecto. Para empresas coordinamos viajes de incentivo, convenciones, retiros y logística de grupos con vuelos, hoteles, traslados y propuesta clara para aprobación interna.',
    chat_act_emp: 'Ver servicios corporativos',
    chat_msg_med: 'Para médicos y profesionales coordinamos congresos, simposios y viajes académicos: hotelería cercana, traslados, registros y soporte durante la experiencia.',
    chat_act_med: 'Ver servicios para profesionales',
    chat_msg_edu: 'Para instituciones educativas estructuramos viajes académicos, misiones, grupos estudiantiles y acompañamiento para que el equipo viaje con seguridad y trazabilidad.',
    chat_act_edu: 'Contactar a un experto',
    chat_msg_cot: 'Te llevo al formulario de cotización. Con destino, fechas, número de viajeros y tipo de organización podemos preparar una propuesta más útil.',
    chat_act_cot: 'Ir a cotización',
    chat_msg_call: 'Si prefieres hablar primero, escríbenos por WhatsApp y el equipo puede orientarte antes de preparar la propuesta.',
    chat_act_call: 'Abrir WhatsApp',
    chat_back: 'Volver al inicio',
    chat_cot_now: 'Quiero cotizar ahora mismo'
  },
  en: {
    logo: 'CS<span>Travel</span> Group',
    nav_home: 'Home',
    nav_services: 'Services',
    nav_why: 'Companies',
    nav_process: 'Medical',
    nav_destinations: 'Destinations',
    nav_about: 'About Us',
    nav_contact: 'Contact',
    nav_portal: 'Portal',
    nav_cta: 'Get a Quote',
    hero_cta: 'I want to know more',
    hero_t1: 'The travel department<br>that is not on your org chart,<br><em>but shows in every trip</em>',
    hero_d1: 'We manage corporate travel for companies, SMEs and healthcare institutions with no minimums, with spend control, accounting support and service guaranteed by contract.',
    hero_t2: 'Every company trip can <span class="hero-highlight"><em>generate a return</em></span>',
    hero_d2: 'What is a logistics expense today becomes a tool to control spending, retain talent, build loyalty in your community and generate a return. No investment, no minimums and no lock-in.',
    hero_t3: 'Everything<br>in writing.<br><em>Service guaranteed by contract</em>',
    hero_d3: 'The terms of our service, response times and support are set in the contract. Every request is tracked on our own platform, with 24/7 support during the trip.',
    search_placeholder: 'Where is your group traveling to?',
    hero_search_btn: 'Quote itinerary ✦',
    capture_title: 'Every trip you manage today is an opportunity you are not yet capturing.',
    capture_p1: 'Your company coordinates trips nobody negotiated. Your patients arrange travel on their own that you could be monetizing. In both cases, economic value is being left in the hands of third parties.',
    capture_p2: 'CS Travel Group exists so that value becomes yours.',
    prof_label: 'Choose your profile',
    prof_title: 'Who do we work with?',
    prof_subtitle: 'Choose your organization type and we will guide you to the right quote, proposal, and follow-up flow.',
    prof_c_title: 'Companies',
    prof_c_desc: 'We are your company’s travel department: we quote, book, invoice and support, with no minimums and a wellbeing benefit for your team.',
    prof_c_cta: 'See how it works',
    prof_c_f1: 'We coordinate your company corporate travel.',
    prof_c_f2: 'You get access to rates lower than the OTAs.',
    prof_c_f3: 'Your team uses those same rates for personal trips. No permanence, no hidden costs.',
    prof_c_btn: 'See how it works →',
    prof_m_title: 'Doctors and clinics',
    prof_m_desc: 'We handle travel logistics for your patients and their companions, expand your capacity to respond and give you back the time you spent on it.',
    prof_m_cta: 'Explore the program',
    prof_e_title: 'Events',
    prof_e_desc: 'Wedding trips for the couple and their guests, concert trips and travel logistics for your event staff.',
    prof_e_cta: 'Quote your event',
    prof_m_f1: 'We handle travel logistics for your patients and their companions.',
    prof_m_f2: 'Your patient never knows we exist.',
    prof_m_f3: 'You get the credit and revenue for every confirmed trip.',
    prof_m_btn: 'See the program →',
    prof_c_det_title: 'Featured Corporate Services',
    prof_c_det_p: 'We understand that a corporate trip is an investment in your team. We handle the entire process so you can focus on your company\'s goals:',
    prof_c_det_li1: '<strong>Incentive Trips:</strong> Reward your best talent with exclusive and memorable experiences.',
    prof_c_det_li2: '<strong>Conventions:</strong> Venue search, hotels with equipped rooms, and attendee logistics.',
    prof_c_det_li3: '<strong>Negotiated Rates:</strong> Access to special conditions for air and hotel groups.',
    prof_c_det_btn: 'Quote corporate trip',
    prof_m_det_title: 'Services for Professionals and Institutions',
    prof_m_det_p: 'We know your time is vital. We coordinate all logistics for your attendance at international congresses and academic events:',
    prof_m_det_li1: '<strong>Strategic Lodging:</strong> Blocks in hotels near convention centers.',
    prof_m_det_li2: '<strong>On-site Support:</strong> Bilingual assistance for unforeseen events or last-minute changes.',
    prof_m_det_li3: '<strong>Combined Itineraries:</strong> Options to extend the trip with tourism activities in the host city.',
    prof_m_det_btn: 'Quote congress trip',
    serv_title: 'What it means to work with us',
    serv_desc: 'We operate behind your brand. Your client, patient, or employee interacts with "you". While we actually execute the complete logistics, negotiate rates, and solve unforeseen issues. You get the credit and the economic return.',
    serv_quote: '"I make sure every company and every doctor feels like they have their own travel team."',
    serv_quote_author: 'Andrés, founder of CS Travel Group',
    serv_l1_t: 'Corporate rates',
    serv_l1_d: 'Over 30 direct suppliers and preferential rates for every trip your team takes.',
    serv_l2_t: 'Guaranteed by contract',
    serv_l2_d: 'Response times and support agreed in writing.',
    serv_l3_t: 'Control and return',
    serv_l3_d: 'See how much is spent on travel, on what and who travels, and receive a return on your community’s trips.',
    serv_btn: 'I want to know more',
    proof_title: 'What our clients say',
    proof_q1: 'CS Travel Group is our strategic ally. Their operation is impeccable and they are always one step ahead.',
    proof_q2: 'Thanks to CS, we receive international patients without stress. They handle everything.',
    proof_q3: 'Speed, rates, and human service. That is what we need in every corporate trip.',
    proof_name_1: 'Maria A.',
    proof_role_1: 'Operations Manager<br>Financial Sector',
    proof_name_2: 'Dr. Alejandro R.',
    proof_role_2: 'Medical Director<br>Specialty Clinic',
    proof_name_3: 'Laura G.',
    proof_role_3: 'Travel Coordinator<br>Manufacturing Industry',
    diff_title: 'The difference between having CS Travel and not having it.',
    diff_without: 'Without CS Travel',
    diff_with: 'With CS Travel',
    diff_w1: 'Scattered suppliers with no control.',
    diff_w2: 'Changes and problems with no answer.',
    diff_w3: 'No visibility into expenses or reports.',
    diff_w4: 'Lost time and productivity.',
    diff_c1: 'One ally, everything under control.',
    diff_c2: '24/7 attention and fast solutions.',
    diff_c3: 'Clear reports and real-time data.',
    diff_c4: 'More efficiency, more results.',
    prom_title: 'Better than a <em>traditional agency</em>',
    prom_desc: 'We don\'t use standard packages. We design custom trips with experts who know the destination first-hand.',
    prom_c1_t: 'Local experts at the destination',
    prom_c1_s: 'Over 95% satisfaction.',
    prom_c1_d: 'Organize a custom trip with our bilingual team in Colombia and our global supplier network.',
    prom_c2_t: 'Unforgettable experiences',
    prom_c2_s: 'Impeccable logistics.',
    prom_c2_d: 'Unique activities you won\'t find in generic catalogs, designed exactly for your group\'s profile.',
    prom_c3_t: 'Backing and total security',
    prom_c3_s: 'Your investment protected.',
    prom_c3_d: 'Affiliation with Archer Travel Group, under its active licenses in Florida and California and its IATA accreditation.',
    stat_1_lbl: 'coordinated travelers',
    stat_2_lbl: 'direct suppliers',
    stat_3_lbl: 'Barranquilla, Colombia',
    stat_3_val: 'Based in',
    stat_4_val: 'Support',
    stat_4_lbl: '24 / 7',
    srv_grid_label: 'Our Solutions',
    srv_grid_title: 'Integrated corporate travel services',
    srv_grid_subtitle: 'Each service solves a critical part of the trip, but the real value comes from coordinating them as one operation.',
    srv_c1_t: 'Group flights',
    srv_c1_d: 'Blocks, special conditions, and fare strategy for groups that need to depart in sync, not improvised.',
    srv_c2_t: 'Corporate lodging',
    srv_c2_d: 'Hotel selection by location, category, and operational convenience so lodging supports the plan instead of complicating it.',
    srv_c3_t: 'Transfers & Logistics',
    srv_c3_d: 'Ground mobility, staggered arrivals, pickup windows, and destination support so the group moves with order.',
    srv_c4_t: 'Medical travel',
    srv_c4_d: 'Sensitive logistics for congresses, missions, and health-related travel, with clearer protocols and closer support.',
    srv_c5_t: 'Incentive travel',
    srv_c5_d: 'Experiences that raise employer-brand perception, recognition, and team culture without losing operational control.',
    srv_c6_t: 'Events & Conventions',
    srv_c6_d: 'Design and coordination of events, conventions, and meetings with one operational front for attendees, agenda, and suppliers.',
    phil_label: 'Our Philosophy',
    phil_title: 'Traveling well shouldn\'t be a luxury,<br><em>it\'s a strategic investment.</em>',
    phil_1_t: 'We accompany results, not just trips',
    phil_1_d: 'We understand that every corporate trip has a business goal. We design the logistics so your team focuses on what matters.',
    phil_2_t: 'Trust as a foundation',
    phil_2_d: 'We accompany you before, during, and after the trip, with transparent pricing and legal backing in the US and Colombia.',
    phil_3_t: 'Global network of suppliers',
    phil_3_d: 'We compare and negotiate among over a dozen verified suppliers to get the best cost-benefit ratio for your company.',
    phil_4_t: 'Security and compliance',
    phil_4_d: 'We plan every detail responsibly. We operate with a valid National Tourism Registry, through IATA- and ARC-accredited suppliers, and with clear protocols.',
    phil_5_t: 'Personalized attention',
    phil_5_d: 'You are not a reservation number. We assign a dedicated account executive who knows your organization\'s travel policies.',
    ig_title: 'Connect with us',
    ig_desc: 'Discover destinations, corporate travel tips, and our day-to-day.',
    ig_btn: 'Follow us @cstravelgroup',
    bk_title: 'Prefer to talk to an expert first?',
    bk_desc: 'Schedule a free video call consultation to discuss your organization\'s travel needs.',
    bk_btn: 'Schedule consultation (45 min) ✦',
    final_cta_label: 'Next step',
    final_cta_title: 'Tell us how your company travels today',
    final_cta_desc: 'Write to us and we will schedule a meeting to explain everything in detail and prepare a tailored proposal.',
    final_cta_btn: 'Write to us',
    proc_label: 'Our process',
    proc_title: 'From idea to trip in 4 steps',
    proc_subtitle: 'A clear and simple process so your organization travels with total confidence.',
    proc_s1_t: 'Initial consultation',
    proc_s1_d: 'You tell us your group\'s needs: destination, dates, number of people, and estimated budget.',
    proc_s2_t: 'Plan design',
    proc_s2_d: 'We explore options among our suppliers and present a personalized itinerary with transparent prices.',
    proc_s3_t: 'Confirmation',
    proc_s3_d: 'Once the plan is approved, we manage all reservations: flights, hotels, transport, insurance, and activities.',
    proc_s4_t: 'The trip',
    proc_s4_d: 'Your group travels with full support. Our team is available <span class="nowrap">24/7</span> throughout the experience.',
    dest_label: 'Services',
    dest_title: 'A service for every <em>need</em>',
    dest_subtitle: 'From your team’s recurring travel to your patients’ travel logistics. No minimums, with invoices and accounting support for every trip.',
    dest_c1_tag: 'CS Business Travel',
    dest_c1_t: 'Recurring travel for your team',
    dest_c1_d: '',
    dest_c2_tag: 'CS Events and Groups',
    dest_c2_t: 'Groups, events, and press',
    dest_c2_d: '',
    dest_c3_tag: 'CS Incentive Travel',
    dest_c3_t: 'Trips your team remembers',
    dest_c3_d: '',
    dest_c4_tag: 'CS Medical Concierge',
    dest_c4_t: 'Medical logistics for your patients',
    dest_c4_d: '',
    dest_c5_tag: 'CS Academic Travel',
    dest_c5_t: 'Educational logistics for your institution',
    dest_c5_d: '',
    cred_label: 'Backing',
    cred_title: 'A formal, registered and supervised company',
    cred_l1_t: 'National Tourism Registry',
    cred_l1_d: 'Travel and tourism agency registered under RNT 299.130.',
    cred_l2_t: 'Barranquilla Chamber of Commerce',
    cred_l2_d: 'CS Travel Group Colombia S.A.S., NIT 902.096.878-3, commercial registration 945.042.',
    cred_l3_t: 'Data protection',
    cred_l3_d: 'HIPAA protection with a BAA for patient and traveler information, and data processing under Colombian Law 1581 of 2012.',
    rb_about_label: 'Who we are',
    rb_about_title: 'We are the travel department for companies that do not have one',
    rb_about_p1: 'CS Travel Group is a travel agency based in Barranquilla that works as the travel department for companies, SMEs and healthcare institutions that do not have their own.',
    rb_about_p2: 'We manage corporate travel with no minimums, adjusted to each company’s budget, with invoices and accounting support. On top of that we add a corporate wellbeing program for employees, executives, their families and the company’s clients.',
    rb_about_p3: 'Everything runs on our own platform, with every request tracked, more than 30 direct suppliers and HIPAA protection under a BAA. And every partnership is formalized by contract, with guarantees on our service.',
    rb_about_f1: 'No minimums',
    rb_about_f2: 'Invoices and accounting support',
    rb_about_f3: '24/7 support during the trip',
    about_label: 'About us',
    about_title: 'Behind CS Travel Group',
    about_p1: 'CS Travel Group was born from a simple but powerful idea: to share our passion for discovering the world and accompany those who want to do it with real backing.',
    about_p2: 'Officially founded on October 27, 2025, and backed by Archer Travel Service Inc., our agency combines personal treatment with the solidity of the industry\'s most important international accreditations.',
    about_p3: 'From our office in Barranquilla, Colombia, we serve organizations looking for a reliable partner to move groups professionally, safely, and at fair prices.',
    cont_label: 'Contact',
    cont_title: 'Ready to plan your organization\'s next trip?',
    cont_subtitle: 'Tell us about your group and destination. We will respond with a personalized proposal in less than 48 hours.',
    contact_page_title: 'Tell us how your company travels today',
    contact_page_desc: '',
    cont_email_t: 'Email Address',
    cont_col_t: 'COL',
    cont_col_d: 'Barranquilla, Atlántico, Colombia',
    form_name_lbl: 'Full Name',
    form_name_ph: 'Your name',
    form_email_lbl: 'Email Address',
    form_email_ph: 'email@example.com',
    form_phone_lbl: 'Phone / WhatsApp',
    form_phone_ph: '+57 300 000 0000',
    form_org_lbl: 'Organization',
    form_org_ph: 'Your company or institution name',
    form_kind_lbl: 'Trip type',
    form_kind_opt0: 'Select...',
    form_kind_opt1: 'Corporate / incentive',
    form_kind_opt2: 'Medical congress',
    form_kind_opt3: 'Academic / educational',
    form_kind_opt4: 'Convention / event',
    form_kind_opt5: 'Other group',
    form_type_lbl: 'Organization Type',
    form_type_opt0: 'Select...',
    form_type_opt1: 'University',
    form_type_opt2: 'School',
    form_type_opt3: 'Company',
    form_type_opt4: 'Organization / Foundation',
    form_type_opt5: 'Other',
    form_dest_lbl: 'Tentative destination',
    form_dest_ph: 'City or country',
    form_people_lbl: 'Number of travelers',
    form_people_ph: '25',
    form_dates_lbl: 'Approximate dates',
    form_dates_ph: 'Month, range, or tentative dates',
    form_datein_lbl: 'Check-in date',
    form_dateout_lbl: 'Check-out date',
    form_budget_lbl: 'Estimated budget',
    form_budget_ph: 'Optional',
    form_msg_lbl: 'Tell us about your trip',
    form_msg_ph: 'Destination, approximate number of people, tentative dates, estimated budget...',
    form_step1_t: 'Initial details',
    form_step1_d: 'First we understand who is requesting the quote and what type of organization they represent.',
    form_step2_t: 'Trip details',
    form_step2_d: 'With this information we prepare a more useful response for your team.',
    form_step3_t: 'Final details',
    form_step3_d: 'Add dates, budget, or context so the first response is more precise.',
    form_next: 'Continue',
    form_prev: 'Back',
    form_btn: 'Send quote request →',
    foot_desc: 'Corporate and medical travel logistics, managed end to end.',
    foot_nav_t: 'Navigation',
    foot_nav_h: 'Home',
    foot_nav_p: 'Profiles',
    foot_leg_t: 'Legal',
    foot_leg_t1: 'Terms & Conditions',
    foot_leg_t2: 'Privacy Policy',
    foot_leg_t3: 'Refund Policy',
    foot_leg_t4: 'Accessibility',
    foot_leg_t5: 'Privacy notice',
    foot_leg_t6: 'Cookie policy',
    foot_leg_t7: 'ESCNNA code of conduct',
    foot_copy: '© 2026 CS Travel Group. All rights reserved.',
    foot_reg: 'CS Travel Group Colombia S.A.S. · NIT 902.096.878-3 · RNT 299.130 · Commercial registration 945.042 · Barranquilla, Atlántico, Colombia',
    foot_escnna: 'CS Travel Group Colombia S.A.S., RNT 299.130, rejects the commercial sexual exploitation of children and adolescents. In Colombia, the sexual exploitation and abuse of minors are crimes punishable under criminal and administrative law, pursuant to Laws 679 of 2001 and 1336 of 2009. Report it: ICBF line 141, National Police line 123 or Attorney General line 122.',
    foot_dev: 'Site developed by <a href="https://kaivastudio.com/" target="_blank" rel="noopener">Kaiva Studio</a>',
    chat_agent_t: 'Travel Advisor',
    chat_agent_s: 'Online',
    chat_start: 'Hi! 👋 I\'m your CS Travel Group virtual advisor. How can I help you today?',
    chat_opt1: 'I am a company',
    chat_opt2: 'I am a doctor or professional',
    chat_opt3: 'I am a university or school',
    chat_opt4: 'I want to quote a group',
    chat_opt5: 'I want to schedule advice',
    chat_msg_emp: 'Perfect. For companies we coordinate incentive trips, conventions, retreats, and group logistics with flights, hotels, transfers, and a clear proposal for internal approval.',
    chat_act_emp: 'View corporate services',
    chat_msg_med: 'For doctors and professionals we coordinate congresses, symposia, and academic trips: nearby hotels, transfers, registrations, and support throughout the experience.',
    chat_act_med: 'View professional services',
    chat_msg_edu: 'For educational institutions we structure academic trips, missions, student groups, and support so the team travels with safety and traceability.',
    chat_act_edu: 'Contact an expert',
    chat_msg_cot: 'I will take you to the quote form. With destination, dates, number of travelers, and organization type we can prepare a more useful proposal.',
    chat_act_cot: 'Go to quote',
    chat_msg_call: 'If you prefer to talk first, message us on WhatsApp and the team can guide you before preparing the proposal.',
    chat_act_call: 'Open WhatsApp',
    chat_back: 'Back to start',
    chat_cot_now: 'I want a quote right now'
  }
};

const pageTranslations = {
  es: {
    company: {
      company_nav_advantages: 'Ventajas',
      company_nav_solutions: 'Soluciones',
      company_nav_faqs: 'FAQs',
      company_hero_kicker: 'Agencia de viajes empresariales en Colombia',
      company_hero_title: '<span class="company-hero-line">Convierte los viajes</span><span class="company-hero-line">en tu mayor estrategia</span><span class="company-hero-line"><span class="hero-highlight">de retorno.</span></span>',
      company_hero_desc: 'CS Travel te da las herramientas para ofrecerle a tus clientes, empleados y proveedores un beneficio de viajes que los retiene, los fideliza y genera un retorno para tu empresa. Sin que cambies nada de lo que ya haces.',
      company_hero_cta: 'Quiero saber más',
      company_statement_title: 'Cada vez que un cliente tuyo viaja, tu empresa puede estar generando un retorno',
      company_statement_p1: 'Tus clientes, empleados y proveedores ya viajan. Con CS Travel, cada reserva que hacen se convierte en un ingreso para tu empresa y en un beneficio que no olvidarán.',
      company_statement_highlight: 'Sin que hagas nada adicional.',
      company_calc_title: 'Calcula tu retorno',
      company_calc_trips_label: 'Número de viajes al mes',
      company_calc_value_label: 'Valor promedio por viaje (USD)',
      company_calc_return_monthly: 'Tu retorno mensual',
      company_calc_return_annual: 'Tu retorno anual',
      company_calc_saving: 'Ahorro anual vs. mostrador',
      company_model_title: 'Así funciona',
      company_model_desc: 'Sin fórmulas complicadas. Sin cambiar nada de lo que ya haces. Así es como funciona.',
      company_model_s1_t: 'Nos reunimos y te explicamos todo',
      company_model_s1_d: 'Sin compromisos. En una conversación te mostramos exactamente cómo funciona el retorno económico para tu empresa y resolvemos todas tus dudas.',
      company_model_s2_t: 'Te damos todo lo que necesitas',
      company_model_s2_d: 'Preparamos los materiales para que puedas comunicarle el beneficio a quien quieras de tu red. Tus clientes, empleados o proveedores acceden con solo contactarnos. Tú no tienes que gestionar nada.',
      company_model_s3_t: 'Tu red accede al beneficio',
      company_model_s3_d: 'Cada vez que alguien de tu red hace una reserva, genera un retorno para tu empresa. Puedes verlo en tiempo real desde tu dashboard.',
      company_model_s4_t: 'Recibes tu retorno en 15 días',
      company_model_s4_d: 'Sin gestión de cobro de tu parte. Todo transparente y verificable desde tu dashboard en todo momento.',
      company_model_cta: 'Quiero saber más',
      company_sol_title: 'Todo lo que hacemos para tu empresa',
      company_sol_desc: '',
      company_card1_tag: 'Viajes recurrentes de tu equipo',
      company_card1_desc: 'Para empresas con viajes frecuentes. Gestionamos vuelos, hoteles y traslados con un solo punto de contacto. Tu equipo viaja, nosotros nos encargamos.',
      company_card1_cta: 'Ver detalle',
      company_card2_tag: 'Tu logística de grupos y eventos',
      company_card2_desc: 'Para grupos, convenciones y viajes de prensa. Una sola operación coordina todo en destino. Todos llegan juntos y a tiempo.',
      company_card2_cta: 'Ver detalle',
      company_card3_tag: 'Viajes que fidelizan y retienen',
      company_card3_desc: 'Ofrécele a tus clientes, empleados y proveedores un beneficio de viaje que ningún competidor puede igualar.',
      company_card3_cta: 'Ver detalle',
      company_card4_tag: 'Logística educativa para tu institución',
      company_card4_desc: 'Colegios, universidades y centros de formación pueden ofrecer a sus estudiantes, docentes y comunidad acceso a tarifas diferenciales de viaje. Tu institución genera un retorno por cada reserva.',
      company_card4_cta: 'Ver detalle',
      company_norisk_title: 'Sin riesgo.<br>Sin permanencia.',
      company_norisk_desc: 'No hay inversión inicial. No hay mínimos de volumen. No hay cláusulas de permanencia. Si en algún momento decides que CS Travel no es para ti, terminas el convenio en cualquier momento.',
      company_norisk_p2: '',
      company_fit_title: '',
      company_fit_desc: '',
      company_fit_pro_title: 'CS Travel es para ti si',
      company_fit_con_title: 'CS Travel no es para ti si',
      company_phil_title: 'El beneficio laboral que tus empleados más valoran y que pocas empresas ofrecen.',
      company_phil_desc: 'Los beneficios de viaje son de los más valorados por los equipos en Colombia, pero de los menos ofrecidos.',
      company_phil_p2: 'Cuando tu empresa se afilia a CS Travel, tus empleados acceden a tarifas diferenciales para sus viajes personales. Vacaciones, luna de miel, viaje en familia. El mismo acceso que tiene tu empresa, disponible para cada persona de tu equipo.',
      company_phil_p3: '<span class="circle-blue" aria-hidden="true"></span> El beneficio se activa automáticamente con tu afiliación<br><span class="circle-blue" aria-hidden="true"></span> Tu equipo accede a tarifas que no encuentra por su cuenta<br><span class="circle-blue" aria-hidden="true"></span> Un beneficio que valoran y que fideliza a tu equipo',
      company_phil_p4: 'Y tú, como directivo, también accedes a tarifas más económicas que las OTAs para tus viajes laborales y personales.',
      company_booking_title: '¿Listo para convertir los viajes en tu mayor ventaja competitiva?',
      company_booking_desc: 'Sin propuestas genéricas. En una conversación te mostramos una proyección real basada en tu operación, cómo extenderle el beneficio a tus clientes y qué retorno puedes esperar desde la primera operación.',
      company_booking_cta: 'Ponte en contacto',
      company_faq_title: 'FAQs',
      company_faq_1_q: '¿Tienen mínimo de viajes o de gasto mensual?',
      company_faq_1_a: 'No. Trabajamos con empresas de distintos tamaños y volúmenes. Empiezas con los viajes que tienes hoy.',
      company_faq_2_q: '¿Emiten facturación electrónica?',
      company_faq_2_a: 'Sí. Facturamos directamente a tu empresa con desglose por operación, listo para tu cierre contable.',
      company_faq_3_q: '¿Cómo funciona el beneficio de tarifas para mis empleados?',
      company_faq_3_a: 'Al afiliarte, tus empleados pueden contactarnos directamente para sus viajes personales y acceden a las mismas tarifas corporativas. Nosotros te damos todo lo que necesitas para comunicárselo a tu equipo.',
      company_faq_4_q: '¿El beneficio de tarifas también aplica para mí como directivo?',
      company_faq_4_a: 'Sí. Al afiliarte a tu empresa, te damos acceso a tarifas más económicas que las OTAs y a tarifas preferenciales para tus viajes laborales y personales. El mismo beneficio que le das a tu equipo aplica para ti.',
      company_faq_5_q: '¿Cómo sé que las tarifas que ofrecen son realmente mejores que en otro sitio?',
      company_faq_5_a: 'Trabajamos con más de 30 proveedores directos que nos dan acceso a tarifas corporativas y preferenciales que normalmente no se consiguen por cuenta propia. No te pedimos que nos creas: en la primera propuesta comparamos, con números reales, nuestra tarifa frente a la que encontrarías tú.',
      company_faq_6_q: '¿Podemos cancelar en cualquier momento?',
      company_faq_6_a: 'Sí. No manejamos cláusulas de permanencia porque nuestra retención se basa en resultados, no en contratos.',
      company_faq_7_q: '¿Cómo es la facturación?',
      company_faq_7_a: 'Facturamos directamente a tu empresa con la periodicidad que se acuerde. Cada factura incluye un desglose por viajero y centro de costos, lista para integrarse a tu cierre contable.',
      company_faq_8_q: '¿Con qué tipo de empresas trabajan?',
      company_faq_8_a: 'Nos especializamos en empresas medianas colombianas que necesitan una operación de viajes profesional sin el costo ni la complejidad de una agencia corporativa grande.',
      company_faq_9_q: '¿Qué los diferencia de otras agencias de viajes corporativos en Colombia?',
      company_faq_9_a: 'Ninguna otra agencia en Colombia te permite ofrecerle a tus clientes, empleados y proveedores beneficios de viaje que generen retorno económico para tu empresa. Esa es la diferencia estructural.',
      company_faq_10_q: '¿Por qué confiar en CS Travel?',
      company_faq_10_a: 'CS Travel Group Colombia S.A.S. es una agencia de viajes intermediaria con Registro Nacional de Turismo 299.130 y matrícula mercantil en la Cámara de Comercio de Barranquilla. Trabajamos con más de 30 proveedores directos, con protección HIPAA con acuerdo BAA para la información de pacientes y viajeros, y cada alianza queda formalizada por contrato, con garantías sobre nuestro servicio.',
      company_footer_desc: 'Logística de viajes corporativos y médicos, gestionada de principio a fin.',
      company_testimonials_title: '',
      company_testimonials_desc: '',
      company_test1_text: 'Antes cada cambio de itinerario terminaba en una cadena de correos. Ahora tenemos una respuesta concreta y alguien que mueve la operación sin frenar al equipo.',
      company_test1_author: 'Abdel Abraham Hadechiny',
      company_test1_role: 'CEO Tecnomoldes S.A.S',
      company_test2_text: 'La diferencia no fue solo el precio. Fue tener claridad para aprobar, ajustar y reportar cada viaje sin convertirlo en trabajo extra para varias áreas.',
      company_test2_author: 'Elizabeth Angarita',
      company_test2_role: 'CEO Angarita Seguros LTDA',
      company_test3_text: 'El beneficio para empleados nos ayudó a comunicar la afiliación como algo útil para la gente, no solo como una mejora administrativa.',
      company_test3_author: 'William Osvaldo Jiménez',
      company_test3_role: 'CEO Aportes Empresariales',
      company_fit_si_1: 'Tu equipo viaja al menos una vez al mes.',
      company_fit_si_2: 'Coordinas viajes por correo o WhatsApp personal.',
      company_fit_si_3: 'No tienes tarifas negociadas con aerolíneas ni hoteles.',
      company_fit_si_4: 'Te gustaría dar un beneficio real a tus empleados sin costo extra.',
      company_fit_si_5: 'Necesitas control del gasto en viajes sin dedicarle tiempo.',
      company_fit_no_1: 'Viajas menos de una vez al mes.',
      company_fit_no_2: 'Ya tienes un departamento de viajes propio.',
      company_fit_no_3: 'Necesitas integración con sistemas ERP complejos.',
      company_fit_no_4: 'Buscas una plataforma de autogestión sin contacto humano.'
    },
    medical: {
      medical_nav_program: 'Programa',
      medical_nav_process: 'Proceso',
      medical_nav_services: 'Servicios',
      medical_nav_faqs: 'FAQs',
      medical_nav_cta: 'Agendar llamada',
      medical_hero_kicker: 'Para médicos y clínicas con pacientes que viajan',
      medical_hero_title: 'Ofrécele a tus pacientes un servicio completo.',
      medical_hero_desc: 'CS Travel coordina vuelos, hospedajes, seguros y traslados para pacientes nacionales y extranjeros y sus acompañantes, sin carga operativa adicional para tu consulta.',
      medical_hero_cta_1: '¿Cómo funciona?',
      medical_hero_cta_2: 'Habla con un asesor',
      medical_program_title: 'Tus pacientes ya van a viajar. ¿Por qué no ganar con eso?',
      medical_program_p1: 'Cuando un paciente confirma un procedimiento, CS Travel toma el relevo logístico: vuelos, hospedaje cercano a la clínica, traslados privados y acompañamiento durante el viaje.',
      medical_program_p2: 'La experiencia se presenta bajo tu nombre, tu identidad y tu estándar de servicio. El paciente recibe un proceso más organizado y tú generas un ingreso adicional sin invertir en operación turística.',
      medical_core_title: 'Un modelo white-label para fortalecer tu consulta',
      medical_process_title: 'Así se integra la logística sin recargar tu operación clínica',
      medical_services_title: 'La parte más sensible del viaje deja de improvisarse.',
      medical_services_desc: 'Un paciente que viaja para atenderse necesita más que reservas. Necesita claridad, confianza y continuidad. Convertimos esa necesidad en una operación discreta, ordenada y fácil de acompañar desde tu consulta.',
      medical_services_cta: 'Habla con un asesor',
      medical_specialties_title: 'Especialmente útil para prácticas donde el viaje afecta la decisión del paciente',
      medical_specialties_desc: 'No todas las especialidades viven la misma complejidad logística. Estas son las que más se benefician de una experiencia coordinada antes, durante y después del traslado.',
      medical_fit_pro_title: 'Lo que mejora cuando la logística se resuelve bien',
      medical_fit_con_title: 'Operación discreta para una experiencia más tranquila',
      medical_pillar1_t: 'Tu marca. Tu crédito.',
      medical_pillar1_d: 'La comunicación llega con tu nombre, tu logo y tu identidad. CS Travel opera detrás de la experiencia.',
      medical_pillar2_t: 'Tu paciente llega con todo resuelto.',
      medical_pillar2_d: 'Coordinamos vuelo, alojamiento cercano, traslados y seguros sin que tu equipo tenga que gestionarlo.',
      medical_pillar3_t: 'Te diferencias de otros especialistas.',
      medical_pillar3_d: 'Un servicio integral puede ser el factor que ayuda al paciente a decidirse por tu procedimiento.',
      medical_pillar4_t: 'Generas ingresos adicionales.',
      medical_pillar4_d: 'Por cada paciente confirmado puedes capturar margen sin cambiar tu operación clínica.',
      medical_logistics_item1: 'Vuelos nacionales e internacionales con seguimiento',
      medical_logistics_item2: 'Hospedaje seleccionado por cercanía y recuperación',
      medical_logistics_item3: 'Traslados privados coordinados por ventana médica',
      medical_logistics_item4: 'Soporte bilingüe ES/EN durante todo el trayecto',
      medical_logistics_item5: 'Comunicación alineada con tu equipo clínico',
      medical_logistics_item6: 'Seguro y respaldos para escenarios de cambio',
      medical_step1_t: 'Detectas un paciente que necesita viajar',
      medical_step1_d: 'Nos compartes el caso operativo: ciudad de origen, fechas tentativas, acompañantes y nivel de soporte requerido. No necesitas resolver nada más.',
      medical_step2_t: 'Armamos una propuesta clara para tu paciente',
      medical_step2_d: 'La cotización organiza vuelos, hospedaje, traslados y cobertura sugerida en un formato más fácil de explicar, aprobar y vender al paciente.',
      medical_step3_t: 'Nosotros cuidamos el trayecto; tú cuidas el procedimiento',
      medical_step3_d: 'Coordinamos la experiencia de viaje, acompañamos cambios y atendemos incidencias logísticas para que tu equipo se concentre en la atención médica.',
      medical_brand_title: 'Tu consulta conserva el protagonismo. Nosotros sostenemos la experiencia.',
      medical_brand_desc: 'No venimos a disputar la relación con tu paciente, sino a reforzarla. Nos encargamos de la logística para que el viaje se sienta tan cuidado como la atención médica: claro, humano y confiable.',
      medical_faq_title: 'Lo que normalmente pregunta un médico antes de iniciar',
      medical_contact_title: '¿Cuántos pacientes dejaste ir porque la logística del viaje no estaba resuelta?',
      medical_contact_desc: 'Una conversación de 20 minutos basta para revisar si el modelo aplica para tu consulta, clínica o centro médico.',
      medical_form_name: 'Nombre completo',
      medical_form_clinic: 'Clínica o consultorio',
      medical_form_email: 'Correo profesional',
      medical_form_phone: 'Teléfono / WhatsApp',
      medical_form_specialty: 'Especialidad',
      medical_form_volume: 'Pacientes viajeros aprox.',
      medical_form_message: 'Mensaje adicional',
      medical_form_submit: 'Agendar una llamada',
      medical_footer_desc: 'Logística de viajes corporativos y médicos, gestionada de principio a fin.',
      medical_testimonials_title: 'Cuando el viaje está resuelto, el paciente llega más tranquilo',
      medical_test1_text: '"El valor está en quitarle incertidumbre al paciente: sabe dónde llega, quién lo recoge, dónde se queda y a quién escribir si algo cambia."',
      medical_test1_author: 'Equipo CS Travel Group',
      medical_test1_role: 'Operación de pacientes viajeros'
    }
  },
  en: {
    company: {
      company_nav_advantages: 'Advantages',
      company_nav_solutions: 'Solutions',
      company_nav_faqs: 'FAQs',
      company_hero_kicker: 'We are the corporate travel agency you deserve',
      company_hero_title: '<span class="company-hero-line">Your company pays for travel.</span><span class="company-hero-line">It is time those trips</span><span class="company-hero-line"><span class="hero-highlight">pay you back</span></span>',
      company_hero_desc: 'CS Travel gives you the tools to offer your clients, employees and suppliers a travel benefit that retains them, builds loyalty and generates a return for your company, without changing anything you already do.',
      company_hero_cta: 'I want to know more',
      company_statement_title: 'Most companies do not know their travel <em>can generate income.</em>',
      company_statement_p1: 'Every ticket your company buys, every hotel it books, every transfer it arranges — all of it generates economic value that today stays in the hands of third parties. Not because you cannot capture it. But because nobody had shown you how.',
      company_statement_highlight: 'CS Travel exists exactly for that.',
      company_calc_title: 'How much could your company be leaving on the table?',
      company_calc_trips_label: 'Number of trips per month',
      company_calc_value_label: 'Average trip value (USD)',
      company_calc_return_monthly: 'Your monthly return',
      company_calc_return_annual: 'Your annual return',
      company_calc_saving: 'Annual savings vs. retail',
      company_model_title: 'How it works',
      company_model_desc: 'No complicated formulas. No changes to what you already do. This is how it works.',
      company_model_s1_t: 'We meet and explain everything',
      company_model_s1_d: 'No commitment. In one conversation, we show you exactly how the economic return works for your company and answer all your questions.',
      company_model_s2_t: 'We give you everything you need',
      company_model_s2_d: 'We prepare the materials so you can communicate the benefit to anyone in your network. Your clients, employees, or providers access it by simply contacting us. You do not have to manage anything.',
      company_model_s3_t: 'Your network accesses the benefit',
      company_model_s3_d: 'Every time someone in your network makes a reservation, it generates a return for your company. You can see it in real time from your dashboard.',
      company_model_s4_t: 'You receive your return in 15 days',
      company_model_s4_d: 'No collections management on your part. Everything is transparent and verifiable from your dashboard at all times.',
      company_model_cta: 'I want to know more',
      company_sol_title: 'Everything we do for your company',
      company_sol_desc: '',
      company_card1_tag: 'Frequent travel',
      company_card1_desc: 'For companies with recurring trips. We manage flights, hotels, and transfers with one point of contact. Your team travels, we handle the rest.',
      company_card1_cta: 'See details',
      company_card2_tag: 'Group and event logistics',
      company_card2_desc: 'For groups, conventions, and press trips. A single operation coordinates everything on-site. Everyone arrives together and on time.',
      company_card2_cta: 'See details',
      company_card3_tag: 'Travel that builds loyalty and retention',
      company_card3_desc: 'Offer your clients, employees, and providers a travel benefit no competitor can match.',
      company_card3_cta: 'See details',
      company_card4_tag: 'Educational logistics for your institution',
      company_card4_desc: 'Schools, universities, and training centers can offer students, faculty, and their community access to differential travel rates. Your institution generates a return for every reservation.',
      company_card4_cta: 'See details',
      company_norisk_title: 'No risk.<br>No lock-in.',
      company_norisk_desc: 'There is no initial investment. No volume minimums. No permanence clauses. If at any point you decide CS Travel is not for you, you can end the agreement at any time.',
      company_norisk_p2: '',
      company_fit_title: '',
      company_fit_desc: '',
      company_fit_pro_title: 'CS Travel is for you if:',
      company_fit_con_title: 'CS Travel is probably not for you if:',
      company_phil_title: 'The employee benefit your team values most and few companies offer.',
      company_phil_desc: 'Travel benefits are among the most valued by teams in Colombia, but among the least offered.',
      company_phil_p2: 'When your company joins CS Travel, your employees access differential rates for their personal trips. Vacations, honeymoons, family travel. The same access your company has, available to every person on your team.',
      company_phil_p3: '<span class="circle-blue" aria-hidden="true"></span> The benefit activates automatically with your affiliation<br><span class="circle-blue" aria-hidden="true"></span> Your team accesses rates they cannot find on their own<br><span class="circle-blue" aria-hidden="true"></span> A benefit they value and that helps retain your team',
      company_phil_p4: 'And you, as an executive, also access rates lower than the OTAs for your work and personal trips.',
      company_booking_title: 'Ready to turn travel into your greatest competitive advantage?',
      company_booking_desc: 'No generic proposals. In one conversation, we show you a real projection based on your operation, how to extend the benefit to your clients, and what return you can expect from the first operation.',
      company_booking_cta: 'Get in touch',
      company_faq_title: 'FAQs',
      company_faq_1_q: 'Do you have a minimum number of trips or monthly spend?',
      company_faq_1_a: 'No. We work with companies of different sizes and volumes. You start with the trips you have today.',
      company_faq_2_q: 'Do you issue electronic invoices?',
      company_faq_2_a: 'Yes. We invoice your company directly with an operation-by-operation breakdown, ready for your accounting close.',
      company_faq_3_q: 'How does the employee rate benefit work?',
      company_faq_3_a: 'Once you join, your employees can contact us directly for their personal trips and access the same corporate rates. We give you everything you need to communicate it to your team.',
      company_faq_4_q: 'Does the rate benefit also apply to me as an executive?',
      company_faq_4_a: 'Yes. When your company joins, we give you access to rates lower than the OTAs and preferred rates for your business and personal travel. The same benefit you give your team applies to you.',
      company_faq_5_q: 'How do I know your rates are really better than elsewhere?',
      company_faq_5_a: 'We work with more than 30 direct suppliers that give us access to corporate and preferential rates that are usually not available on your own. You do not have to take our word for it: in the first proposal we compare, with real numbers, our rate against the one you would find yourself.',
      company_faq_6_q: 'Can we cancel at any time?',
      company_faq_6_a: 'Yes. We do not use permanence clauses because our retention is based on results, not contracts.',
      company_faq_7_q: 'How does billing work?',
      company_faq_7_a: 'We invoice your company directly with the agreed frequency. Each invoice includes a breakdown by traveler and cost center, ready to integrate into your accounting close.',
      company_faq_8_q: 'What type of companies do you work with?',
      company_faq_8_a: 'We specialize in mid-sized Colombian companies that need a professional travel operation without the cost or complexity of a large corporate agency.',
      company_faq_9_q: 'What makes you different from other corporate travel agencies in Colombia?',
      company_faq_9_a: 'No other agency in Colombia lets you offer clients, employees, and providers travel benefits that generate economic return for your company. That is the structural difference.',
      company_faq_10_q: 'Why trust CS Travel?',
      company_faq_10_a: 'CS Travel Group Colombia S.A.S. is an intermediary travel agency with National Tourism Registry 299.130 and commercial registration at the Barranquilla Chamber of Commerce. We work with more than 30 direct suppliers, with HIPAA protection under a BAA for patient and traveler information, and every partnership is formalized by contract, with guarantees on our service.',
      company_footer_desc: 'Corporate and medical travel logistics, managed end to end.',
      company_testimonials_title: '',
      company_testimonials_desc: '',
      company_test1_text: 'Before, every itinerary change ended in an email chain. Now we get a concrete response and someone who moves the operation without slowing the team down.',
      company_test1_author: 'Abdel Abraham Hadechiny',
      company_test1_role: 'CEO Tecnomoldes S.A.S',
      company_test2_text: 'The difference was not only the price. It was having clarity to approve, adjust, and report each trip without turning it into extra work for several areas.',
      company_test2_author: 'Elizabeth Angarita',
      company_test2_role: 'CEO Angarita Seguros LTDA',
      company_test3_text: 'The employee benefit helped us communicate the affiliation as something useful for people, not just as an administrative improvement.',
      company_test3_author: 'William Osvaldo Jiménez',
      company_test3_role: 'CEO Aportes Empresariales',
      company_fit_si_1: 'Your team travels at least once a month.',
      company_fit_si_2: 'You coordinate travel via email or personal WhatsApp.',
      company_fit_si_3: 'You do not have negotiated rates with airlines or hotels.',
      company_fit_si_4: 'You would like to give a real benefit to your employees at no extra cost.',
      company_fit_si_5: 'You need control over travel spending without dedicating time to it.',
      company_fit_no_1: 'You travel less than once a month.',
      company_fit_no_2: 'You already have your own travel department.',
      company_fit_no_3: 'You need integration with complex ERP systems.',
      company_fit_no_4: 'You are looking for a self-management platform without human contact.'
    },
    medical: {
      medical_nav_program: 'Program',
      medical_nav_process: 'Process',
      medical_nav_services: 'Services',
      medical_nav_faqs: 'FAQs',
      medical_nav_cta: 'Schedule a call',
      medical_hero_kicker: 'For doctors and clinics with traveling patients',
      medical_hero_title: 'Offer your patients a complete service.',
      medical_hero_desc: 'CS Travel coordinates flights, lodging, insurance and transfers for domestic and international patients and their companions, with no extra operational load for your practice.',
      medical_hero_cta_1: 'How does it work?',
      medical_hero_cta_2: 'Talk to an advisor',
      medical_program_title: 'Your patients are already going to travel. Why not benefit from it?',
      medical_program_p1: 'When a patient confirms a procedure, CS Travel takes over the logistics: flights, lodging near the clinic, private transfers, and support throughout the trip.',
      medical_program_p2: 'The experience is presented under your name, your identity, and your service standard. The patient receives a more organized process, and you generate additional income without investing in tourism operations.',
      medical_core_title: 'A white-label model to strengthen your practice',
      medical_process_title: 'This is how travel logistics integrate without overloading your clinical operation',
      medical_services_title: 'The most sensitive part of the trip stops being improvised.',
      medical_services_desc: 'A patient who travels for treatment needs more than reservations. They need clarity, confidence, and continuity. We turn that need into a discreet, orderly operation that is easy to support from your practice.',
      medical_services_cta: 'Talk to an advisor',
      medical_specialties_title: 'Especially useful for practices where travel affects the patient’s decision',
      medical_specialties_desc: 'Not every specialty faces the same logistical complexity. These are the ones that benefit most from a coordinated experience before, during, and after the transfer.',
      medical_fit_pro_title: 'What improves when logistics are handled well',
      medical_fit_con_title: 'Discreet operation for a calmer experience',
      medical_brand_title: 'Your practice keeps the spotlight. We support the experience.',
      medical_brand_desc: 'We are not here to compete for the relationship with your patient, but to reinforce it. We take care of the logistics so the trip feels as carefully handled as the medical care itself: clear, human and reliable.',
      medical_faq_title: 'What a doctor usually asks before getting started',
      medical_contact_title: 'How many patients did you lose because the travel logistics were not resolved?',
      medical_contact_desc: 'A 20-minute conversation is enough to review whether the model applies to your practice, clinic, or medical center.',
      medical_form_name: 'Full name',
      medical_form_clinic: 'Clinic or practice',
      medical_form_email: 'Professional email',
      medical_form_phone: 'Phone / WhatsApp',
      medical_form_specialty: 'Specialty',
      medical_form_volume: 'Approx. traveling patients',
      medical_form_message: 'Additional message',
      medical_form_submit: 'Schedule a call',
      medical_pillar1_t: 'Your brand. Your credit.',
      medical_pillar1_d: 'Communication arrives with your name, your logo, and your identity. CS Travel operates behind the experience.',
      medical_pillar2_t: 'Your patient arrives with everything resolved.',
      medical_pillar2_d: 'We coordinate flights, nearby accommodation, transfers, and insurance without your team having to manage it.',
      medical_pillar3_t: 'You differentiate yourself from other specialists.',
      medical_pillar3_d: 'A comprehensive service can be the factor that helps the patient decide on your procedure.',
      medical_pillar4_t: 'You generate additional income.',
      medical_pillar4_d: 'For each confirmed patient you can capture margin without changing your clinical operation.',
      medical_logistics_item1: 'National and international flights with tracking',
      medical_logistics_item2: 'Accommodation selected by proximity and recovery',
      medical_logistics_item3: 'Private transfers coordinated by medical window',
      medical_logistics_item4: 'Bilingual support ES/EN throughout the journey',
      medical_logistics_item5: 'Communication aligned with your clinical team',
      medical_logistics_item6: 'Insurance and backings for change scenarios',
      medical_step1_t: 'You detect a patient who needs to travel',
      medical_step1_d: 'You share the operational case with us: city of origin, tentative dates, companions, and required level of support. You do not need to resolve anything else.',
      medical_step2_t: 'We build a clear proposal for your patient',
      medical_step2_d: 'The quote organizes flights, accommodation, transfers, and suggested coverage in a format that is easier to explain, approve, and sell to the patient.',
      medical_step3_t: 'We take care of the journey; you take care of the procedure',
      medical_step3_d: 'We coordinate the travel experience, accompany changes, and handle logistical incidents so that your team can focus on medical care.',
      medical_footer_desc: 'Corporate and medical travel logistics, managed end to end.',
      medical_testimonials_title: 'When travel is resolved, the patient arrives calmer',
      medical_test1_text: '"The value is removing uncertainty for the patient: they know where they arrive, who picks them up, where they stay, and who to contact if something changes."',
      medical_test1_author: 'CS Travel Group team',
      medical_test1_role: 'Traveling patient operations'
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  let chatOpened = false;

  // --- Origen del contacto (trazabilidad de extremo a extremo) --------------
  // El codigo del aliado llega por ?o= (o ?ref=, formato anterior). Se guarda en
  // cookie 90 dias porque casi nadie deja sus datos en la primera visita: sin
  // esto el origen se perdia al cambiar de pagina y no habia forma de liquidar
  // la comision del aliado ni de auditar el pago.
  const ORIGIN_COOKIE = 'cst_origin';
  const ORIGIN_DAYS = 90;

  const readCookie = (name) => {
    const hit = document.cookie.split('; ').find((row) => row.startsWith(name + '='));
    return hit ? decodeURIComponent(hit.slice(name.length + 1)) : '';
  };

  const writeCookie = (name, value, days) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  };

  // Solo letras, numeros y guion: evita que un parametro manipulado escriba
  // cualquier cosa en la base.
  const cleanOrigin = (value) => String(value || '').trim().toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 40);

  const resolveOrigin = () => {
    const params = new URLSearchParams(window.location.search);
    const fresh = cleanOrigin(params.get('o') || params.get('ref'));
    if (fresh) {
      writeCookie(ORIGIN_COOKIE, fresh, ORIGIN_DAYS); // la visita mas reciente manda
      return fresh;
    }
    return cleanOrigin(readCookie(ORIGIN_COOKIE));
  };

  const getAttribution = () => {
    const params = new URLSearchParams(window.location.search);
    return {
      origin: resolveOrigin(),
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_content: params.get('utm_content') || '',
      utm_term: params.get('utm_term') || '',
      referrer: document.referrer || '',
      landing_page: window.location.href
    };
  };

  const attribution = getAttribution();
  Object.entries(attribution).forEach(([key, value]) => {
    const field = document.getElementById(key);
    if (field) field.value = value;
  });

  window.csTrack = (eventName, payload = {}) => {
    if (typeof window.fbq === 'function') window.fbq('track', eventName, payload);
    if (typeof window.gtag === 'function') window.gtag('event', eventName, payload);
    if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event: eventName, ...payload });
  };

  window.submitLeadToWix = async (lead) => {
    let contactResult = null;
    if (typeof window.createWixContactFromLead === 'function') {
      try {
        contactResult = await window.createWixContactFromLead(lead);
      } catch (error) {
        console.warn('Wix CRM contact creation failed:', error);
      }
    }

    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...lead, wixContactId: contactResult?.contactId || '' })
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || 'Lead submission failed');
    }

    return {
      ...(await response.json()),
      contact: contactResult
    };
  };

  document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link => {
    link.addEventListener('click', () => window.csTrack('Contact', { channel: 'whatsapp', href: link.href }));
  });

  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', () => window.csTrack('Contact', { channel: 'email', href: link.href }));
  });

  // --- Multi-language logic ---
  let currentLang = localStorage.getItem('cs_lang') || 'es';

  const updateLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('cs_lang', lang);
    const pageKey = document.body.classList.contains('medical-landing')
      ? 'medical'
      : (document.body.classList.contains('b2b-landing') ? 'company' : null);
    const activeTranslations = {
      ...translations[lang],
      ...(pageKey ? pageTranslations[lang]?.[pageKey] || {} : {})
    };
    
    // Update active state in switchers
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update trigger text
    document.querySelectorAll('.current-lang').forEach(el => {
      el.textContent = lang === 'es' ? 'Español' : 'English (US)';
    });

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (activeTranslations[key]) {
        el.innerHTML = activeTranslations[key];
      }
    });

    // Update all elements with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (activeTranslations[key]) {
        el.placeholder = activeTranslations[key];
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update chatbot if it was already initialized
    if (chatOpened) {
      // We don't want to restart the whole flow mid-conversation, 
      // but new messages will use the new language.
      // However, for a clean experience, let's refresh the current node.
    }
  };

  // Add click listeners to language switchers
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      updateLanguage(btn.dataset.lang);
    });
  });

  document.querySelectorAll('.lang-trigger').forEach(trigger => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const switcher = trigger.closest('.lang-switcher');
      document.querySelectorAll('.lang-switcher.open').forEach(openSwitcher => {
        if (openSwitcher !== switcher) openSwitcher.classList.remove('open');
      });
      switcher?.classList.toggle('open');
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.lang-switcher')) {
      document.querySelectorAll('.lang-switcher.open').forEach(openSwitcher => openSwitcher.classList.remove('open'));
    }
  });

  // Initial language load
  updateLanguage(currentLang);

  // --- Header scroll effect ---
  const header = document.querySelector('.header');
  const onScroll = () => {
    if (document.body.classList.contains('contact-page')) {
      header.classList.add('scrolled');
      return;
    }
    header.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Mobile menu ---
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = mobileNav?.querySelectorAll('a');

  const closeMobileMenu = () => {
    hamburger?.classList.remove('active');
    mobileNav?.classList.remove('active');
    document.body.classList.remove('menu-open');
  };

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('menu-open', mobileNav.classList.contains('active'));
  });

  mobileLinks?.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMobileMenu();
  }, { passive: true });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const href = anchor.getAttribute('href');
      if (href === '#top' || href === '#inicio') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  const wireHeroSearch = () => {
    const searchInput = document.querySelector('.hero-search-bar input');
    const searchBtn = document.querySelector('.search-btn');
    if (!searchBtn || !searchInput) return;

    const submitHeroSearch = (e) => {
      e?.preventDefault();
      const dest = searchInput.value.trim();
      const params = new URLSearchParams();
      if (dest) {
        params.set('destination', dest);
        params.set('message', `Hola, me gustaría cotizar un viaje para mi grupo hacia ${dest}.`);
      }
      window.location.href = __copia(`contacto/index.html${params.toString() ? `?${params.toString()}` : ''}`);
    };

    searchBtn.addEventListener('click', submitHeroSearch);
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') submitHeroSearch(e);
    });
  };

  wireHeroSearch();

  // Integrate GSAP
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Register MotionPathPlugin
    if (typeof MotionPathPlugin !== 'undefined') {
      gsap.registerPlugin(MotionPathPlugin);
    }

    // Recalcular las medidas de los pins cuando TODO haya cargado. Los scroll
    // horizontales (destinos / especialidades medicas) miden scrollWidth al
    // inicializar; si las fuentes o las imagenes cargan despues, esas medidas
    // quedan obsoletas y la seccion se descuadra al hacer scroll y se queda asi.
    // Un refresh (debounced por frame) tras load + fonts.ready + cada imagen lo corrige.
    let scrollRefreshQueued = false;
    const refreshScrollTriggers = () => {
      if (scrollRefreshQueued) return;
      scrollRefreshQueued = true;
      requestAnimationFrame(() => {
        scrollRefreshQueued = false;
        ScrollTrigger.refresh();
      });
    };
    window.addEventListener('load', refreshScrollTriggers);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(refreshScrollTriggers).catch(() => {});
    }
    document.querySelectorAll('img').forEach((img) => {
      if (!img.complete) img.addEventListener('load', refreshScrollTriggers, { once: true });
    });

    // --- GSAP Advanced Animations ---
    
    // 1. Hero Cinematic Flight Path
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroTexts = document.querySelectorAll('.hero-text-slide');
    const heroDots = document.querySelectorAll('.hero-progress-dot');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const desktopMotion = window.matchMedia('(min-width: 769px)').matches && !reducedMotion;
    const wideDesktopMotion = window.matchMedia('(min-width: 1101px)').matches && !reducedMotion;
    const isMobileViewport = window.matchMedia('(max-width: 768px)').matches; // solo teléfono usa el fallback apilado; el portátil (769px+) usa el pin de scroll
    const heroScrollMotion = !reducedMotion && !isMobileViewport;
    
    const setStaticHeroStage = (index) => {
      heroSlides.forEach((slide, i) => slide.classList.toggle('active', i === index));
      heroTexts.forEach((text, i) => text.classList.toggle('active', i === index));
      heroDots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    };

    if (heroSlides.length > 0 && typeof MotionPathPlugin !== 'undefined' && heroScrollMotion) {
      let activeHeroStage = 0;
      gsap.set(heroSlides, { autoAlpha: 0 });
      gsap.set(heroTexts, { autoAlpha: 0, y: 0, filter: 'blur(3px)' });
      gsap.set(heroSlides[0], { autoAlpha: 1 });
      gsap.set(heroTexts[0], { autoAlpha: 1, y: 0, filter: 'blur(0px)' });

      const setHeroStage = (index) => {
        if (index === activeHeroStage) return;
        activeHeroStage = index;

        heroSlides.forEach((slide, i) => slide.classList.toggle('active', i === index));
        heroTexts.forEach((text, i) => text.classList.toggle('active', i === index));
        heroDots.forEach((dot, i) => dot.classList.toggle('active', i === index));

        gsap.to(heroSlides, { autoAlpha: 0, duration: 0.28, ease: 'power2.out', overwrite: true });
        gsap.to(heroSlides[index], { autoAlpha: 1, duration: 0.42, ease: 'power2.out', overwrite: true });
        gsap.to(heroTexts, { autoAlpha: 0, y: 0, filter: 'blur(3px)', duration: 0.12, ease: 'power2.in', overwrite: true });
        gsap.fromTo(heroTexts[index],
          { autoAlpha: 0, y: 0, filter: 'blur(3px)' },
          { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.22, ease: 'power3.out', overwrite: true }
        );
      };

      // Calculate length of the active path for drawing effect
      const activePath = document.querySelector('#flight-route-active');
      let pathLength = 0;
      if (activePath) {
        pathLength = activePath.getTotalLength();
        activePath.style.strokeDasharray = pathLength;
        activePath.style.strokeDashoffset = pathLength;
      }

      const flightTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: () => isMobileViewport ? '+=860' : '+=1500',
          pin: true,
          scrub: isMobileViewport ? 0.18 : 0.28,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const stage = self.progress < 0.34 ? 0 : self.progress < 0.68 ? 1 : 2;
            setHeroStage(stage);
          }
        }
      });

      // Animate the airplane along the path
      flightTl.to('#airplane', {
        motionPath: {
          path: '#flight-route',
          align: '#flight-route',
          alignOrigin: [0.5, 0.5],
          autoRotate: true
        },
        duration: 10,
        ease: 'none'
      }, 0);

      // Draw the active path behind the plane
      if (activePath) {
        flightTl.to(activePath, {
          strokeDashoffset: 0,
          duration: 10,
          ease: 'none'
        }, 0);
      }

      // Fade in the initial elements on load sequentially
      const loadTl = gsap.timeline();
      
      // El navbar (header, links, idioma) entra SOLO con desplazamiento (sin
      // autoAlpha) e immediateRender:false -> NUNCA queda oculto aunque la animacion
      // de carga se interrumpa (bug observado: el .header entero quedaba opacity:0 y
      // desaparecia el menu completo, incluidos los botones).
      loadTl.from('.header', { y: -30, duration: 0.8, ease: 'power3.out', immediateRender: false })
            .from(['.nav-links', '.lang-switcher'], { y: -10, duration: 0.6, ease: 'power3.out', stagger: 0.1, immediateRender: false }, "-=0.4")
            // Portal / Hablémos: entran SINCRONIZADOS con el nav pero SOLO con
            // desplazamiento (sin autoAlpha) e immediateRender:false -> nunca quedan
            // invisibles aunque la animacion de carga se interrumpa (bug observado:
            // quedaban opacity:0). Asi se sincronizan sin desaparecer.
            .from(['.nav-portal', '.nav-cta'], { y: -10, duration: 0.6, ease: 'power3.out', stagger: 0.1, immediateRender: false }, "<");
            
      const heroKicker = document.querySelector('.hero-kicker');
      if (heroKicker) {
          loadTl.from(heroKicker, { y: 20, autoAlpha: 0, duration: 0.6, ease: 'power3.out' }, "-=0.2");
      }
      
      // El contenido del PRIMER slide se mantiene VISIBLE (no se anima autoAlpha,
      // solo un leve desplazamiento de entrada). Antes se animaba autoAlpha 0->1 y,
      // si la linea de tiempo de carga se interrumpia, el titulo quedaba oculto
      // (opacity:0) de forma permanente — bug observado en produccion. Asi nunca
      // queda invisible.
      loadTl.from(heroTexts[0].querySelector('.hero-title'), { y: 30, duration: 0.8, ease: 'power3.out', immediateRender: false }, "-=0.4")
            .from(heroTexts[0].querySelector('.hero-desc'), { y: 20, duration: 0.8, ease: 'power3.out', immediateRender: false }, "-=0.6")
            .from('.hero-cta-container', { y: 20, duration: 0.8, ease: 'power3.out', immediateRender: false }, "-=0.6")
            .from('.hero-progress-dot', { y: 10, duration: 0.4, stagger: 0.08, ease: 'power3.out', immediateRender: false }, "-=0.4");
      // Red de seguridad: pase lo que pase con la animacion, asegura el estado final
      // visible del primer slide (titulo, descripcion, boton y puntos).
      gsap.delayedCall(2.2, () => {
        gsap.set([heroTexts[0].querySelector('.hero-title'), heroTexts[0].querySelector('.hero-desc'), '.hero-cta-container', '.hero-progress-dot'], { autoAlpha: 1, y: 0 });
      });

    } else if (heroSlides.length > 0) {
      setStaticHeroStage(0);
      gsap.set([...heroSlides, ...heroTexts], { clearProps: 'all' });
      const heroTl = gsap.timeline();
      heroTl.from('.hero-title', { y: 26, autoAlpha: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2')
            .from('.hero-desc', { y: 14, autoAlpha: 0, duration: 0.55, ease: 'power3.out' }, '-=0.35')
            .from('.hero-cta-container', { y: 12, duration: 0.45, ease: 'power3.out' }, '-=0.3');

      // Static fallback when the scroll-based hero animation is unavailable.
      let mobileStage = 0;

      heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          mobileStage = index;
          setStaticHeroStage(mobileStage);
        });
      });

      // "Reducir movimiento" (Reduce Motion) activo: no hay pin de scroll NI autoplay
      // del avion (ambos son movimiento). Para que el hero no quede congelado en el
      // primer texto, rotamos los 3 textos/imagenes por TIEMPO (cambio suave, sin
      // scroll-jacking ni avion volando -> aceptable bajo reduce-motion). Pausa al
      // pasar el mouse y al ocultar la pestana; reinicia al clicar un punto.
      if (reducedMotion && heroSlides.length > 1) {
        let rmStage = 0;
        const rmNext = () => { rmStage = (rmStage + 1) % heroSlides.length; setStaticHeroStage(rmStage); };
        let rmTimer = setInterval(rmNext, 5200);
        const heroEl = document.querySelector('.hero');
        const rmStop = () => { if (rmTimer) { clearInterval(rmTimer); rmTimer = null; } };
        const rmStart = () => { if (!rmTimer) rmTimer = setInterval(rmNext, 5200); };
        if (heroEl) { heroEl.addEventListener('mouseenter', rmStop); heroEl.addEventListener('mouseleave', rmStart); }
        document.addEventListener('visibilitychange', () => { document.hidden ? rmStop() : rmStart(); });
        heroDots.forEach((dot, i) => dot.addEventListener('click', () => { rmStage = i; rmStop(); rmStart(); }));
      }

      if (isMobileViewport && typeof MotionPathPlugin !== 'undefined' && !reducedMotion) {
        const activePath = document.querySelector('#flight-route-active');
        if (activePath) {
          const pathLength = activePath.getTotalLength();
          activePath.style.strokeDasharray = pathLength;
          activePath.style.strokeDashoffset = pathLength;
        }

        const mobileFlightTl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
        mobileFlightTl
          .call(() => setStaticHeroStage(0), null, 0)
          .to('#airplane', {
            motionPath: {
              path: '#flight-route',
              align: '#flight-route',
              alignOrigin: [0.5, 0.5],
              autoRotate: true
            },
            duration: 8,
            ease: 'none'
          }, 0);

        if (activePath) {
          mobileFlightTl.to(activePath, {
            strokeDashoffset: 0,
            duration: 8,
            ease: 'none'
          }, 0);
        }

        mobileFlightTl
          .call(() => setStaticHeroStage(1), null, 2.7)
          .call(() => setStaticHeroStage(2), null, 5.4)
          .call(() => setStaticHeroStage(0), null, 8);
      }
    }

      // 2. Horizontal Scroll Destinations
      const scrollWrapper = document.querySelector('.scroll-wrapper');
      const shouldPinDestinations = window.matchMedia('(min-width: 901px)').matches;
      if (scrollWrapper && shouldPinDestinations && !reducedMotion && scrollWrapper.scrollWidth > window.innerWidth) {
        const getDestinationScrollDistance = () => {
          return scrollWrapper.scrollWidth - window.innerWidth;
        };
        const destinationsTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: '.destinations-scroll',
            start: 'top top',
            end: () => `+=${getDestinationScrollDistance() + 320}`,
            pin: true,
            scrub: 0.35,
            invalidateOnRefresh: true,
          }
        });

        destinationsTimeline
          .to(scrollWrapper, {
            x: () => -getDestinationScrollDistance(),
            ease: 'none',
            duration: 1,
          })
          .to({}, { duration: 0.16 });
      }

      const medicalSpecialtyWrapper = document.querySelector('.medical-specialty-carousel');
      const shouldPinMedicalSpecialties = window.matchMedia('(min-width: 901px)').matches;
      if (medicalSpecialtyWrapper && shouldPinMedicalSpecialties && !reducedMotion && medicalSpecialtyWrapper.scrollWidth > window.innerWidth) {
        gsap.to(medicalSpecialtyWrapper, {
          x: () => -(medicalSpecialtyWrapper.scrollWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: '.medical-specialty-carousel-section',
            start: 'top top',
            end: () => `+=${medicalSpecialtyWrapper.scrollWidth - window.innerWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          }
        });
      }

      const patientPhoneCards = document.querySelectorAll('.medical-patient-card');
      const patientPhoneGrid = document.querySelector('.medical-patient-grid');
      if (patientPhoneCards.length && patientPhoneGrid) {
        const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
        if (isTouchDevice) {
          // Mobile: trigger slide-up animation when card scrolls into view
          const mobilePhoneObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('is-phone-hovered'), 80);
                mobilePhoneObserver.unobserve(entry.target);
              }
            });
          }, { threshold: 0.25 });
          patientPhoneCards.forEach(card => mobilePhoneObserver.observe(card));
        } else {
          document.addEventListener('pointermove', (event) => {
            patientPhoneCards.forEach(card => {
              const rect = card.getBoundingClientRect();
              const isInside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
              card.classList.toggle('is-phone-hovered', isInside);
            });
          });
        }
      }

      const mobileProfileCards = document.querySelectorAll('body:not(.b2b-landing) .profile-card-minimal');
      if (mobileProfileCards.length) {
        mobileProfileCards.forEach(card => {
          const href = card.dataset.href;

          if (href) {
            card.setAttribute('role', 'link');
            card.setAttribute('tabindex', '0');
          }

          const activateMobileProfileCard = () => {
            mobileProfileCards.forEach(item => item.classList.remove('is-mobile-selected'));
            card.classList.add('is-mobile-selected');
          };

          card.addEventListener('pointerdown', () => {
            if (!window.matchMedia('(max-width: 768px)').matches) return;
            activateMobileProfileCard();
          });

          card.addEventListener('click', (event) => {
            if (href) window.location.href = href;
          });

          card.addEventListener('keydown', (event) => {
            if (!href) return;
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              window.location.href = href;
            }
          });
        });
      }

      // 3. Section Reveals
      const revealElements = document.querySelectorAll('.reveal');
      if (desktopMotion) {
        revealElements.forEach(el => {
          gsap.fromTo(el, 
            { autoAlpha: 0, y: 50 },
            {
              autoAlpha: 1, y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
              }
            }
          );
        });
      } else {
        gsap.set(revealElements, { autoAlpha: 1, y: 0, clearProps: "all" });
      }

    // 3. Parallax Images
    const parallaxImages = document.querySelectorAll('.ev-bg img, .about-image img');
    if (desktopMotion) parallaxImages.forEach(img => {
      gsap.to(img, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: img.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
  }

  // --- Counter animation ---
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          const prefix = el.dataset.prefix || '';
          if (el.dataset.static === 'true' || target <= 2) {
            el.textContent = prefix + target.toLocaleString() + suffix;
            counterObserver.unobserve(el);
            return;
          }

          const duration = 650;
          const start = performance.now();

          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            el.textContent = prefix + current.toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));
  }

  // --- Contact form validation ---
  const form = document.getElementById('contact-form');
  if (form) {
    const steps = Array.from(form.querySelectorAll('.form-step'));
    const stepDots = Array.from(form.querySelectorAll('.form-step-dot'));
    const nextButtons = Array.from(form.querySelectorAll('.form-next'));
    const prevButtons = Array.from(form.querySelectorAll('.form-prev'));
    let currentStep = 0;

    const setFormStep = (index) => {
      currentStep = Math.max(0, Math.min(index, steps.length - 1));
      steps.forEach((step, stepIndex) => step.classList.toggle('active', stepIndex === currentStep));
      stepDots.forEach((dot, dotIndex) => {
        dot.classList.toggle('active', dotIndex === currentStep);
        dot.classList.toggle('complete', dotIndex < currentStep);
        if (dotIndex === currentStep) {
          dot.setAttribute('aria-current', 'step');
        } else {
          dot.removeAttribute('aria-current');
        }
      });
    };

    const validateFields = (fields) => {
      let valid = true;
      fields.forEach(field => {
        if (field.hasAttribute('required') && !field.value.trim()) {
          field.style.borderColor = '#ef4444';
          valid = false;
        } else {
          field.style.borderColor = '';
        }
        if (field.type === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
          field.style.borderColor = '#ef4444';
          valid = false;
        }
      });
      return valid;
    };

    nextButtons.forEach(nextButton => nextButton.addEventListener('click', () => {
      const currentFields = Array.from(steps[currentStep].querySelectorAll('input, select, textarea'));
      if (!validateFields(currentFields)) return;
      setFormStep(currentStep + 1);
    }));

    prevButtons.forEach(prevButton => prevButton.addEventListener('click', () => setFormStep(currentStep - 1)));
    setFormStep(0);

    const params = new URLSearchParams(window.location.search);
    const destinationParam = params.get('destination');
    const messageParam = params.get('message');
    const destinationInput = form.querySelector('#destination');
    const messageInput = form.querySelector('#message');
    if (destinationParam && destinationInput) destinationInput.value = destinationParam;
    if (messageParam && messageInput) messageInput.value = messageParam;
  }

  form?.addEventListener('submit', async e => {
    e.preventDefault();
    const formData = new FormData(form);
    let valid = true;

    form.querySelectorAll('[required]').forEach(field => {
      if (field.type === 'checkbox') return; // los checkbox se validan por checked, no por value
      if (!field.value.trim()) {
        field.style.borderColor = '#ef4444';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });

    const email = form.querySelector('[type="email"]');
    if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.style.borderColor = '#ef4444';
      valid = false;
    }

    // Consentimiento: dos casillas SEPARADAS y sin premarcar (habeas data por un
    // lado, terminos y condiciones por otro).
    form.querySelectorAll('.data-consent input[type="checkbox"]').forEach((box) => {
      const wrap = box.closest('.data-consent');
      if (!box.checked) {
        valid = false;
        if (wrap) wrap.classList.add('is-error');
      } else if (wrap) {
        wrap.classList.remove('is-error');
      }
    });

    if (valid) {
      const btn = form.querySelector('.form-submit');
      const originalText = btn.textContent;
      btn.textContent = currentLang === 'es' ? 'Enviando solicitud...' : 'Sending request...';
      btn.disabled = true;

      const lead = Object.fromEntries(formData.entries());
      lead.source = 'website_quote_form';
      lead.language = currentLang;
      // Origen del aliado + version de los textos aceptados (evidencia W-05).
      lead.origin = attribution.origin || '';
      lead.consent_version = form.dataset.consentVersion || '';

      try {
        await window.submitLeadToWix(lead);
        window.csTrack('Lead', {
          content_name: 'B2B quote request',
          organization_type: lead.type || '',
          travel_kind: lead.travel_kind || '',
          destination: lead.destination || ''
        });
        btn.textContent = currentLang === 'es' ? 'Solicitud recibida ✓' : 'Request received ✓';
        btn.style.background = '#102B4C';
        form.reset();
        Object.entries(attribution).forEach(([key, value]) => {
          const field = document.getElementById(key);
          if (field) field.value = value;
        });
      } catch (error) {
        console.error('Lead submit failed:', error);
        btn.textContent = currentLang === 'es' ? 'No se pudo enviar. Intenta de nuevo.' : 'Could not send. Try again.';
        btn.style.background = '#B91C1C';
      }

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 3500);
    }
  });

  document.querySelectorAll('#b2b-contact-form, #medical-contact-form').forEach(landingForm => {
    landingForm.addEventListener('submit', async e => {
      e.preventDefault();
      let valid = true;

      landingForm.querySelectorAll('[required]').forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = '#ef4444';
          valid = false;
        } else {
          field.style.borderColor = '';
        }
      });

      const email = landingForm.querySelector('[type="email"]');
      if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.style.borderColor = '#ef4444';
        valid = false;
      }

      if (!valid) return;

      const btn = landingForm.querySelector('.form-submit');
      const originalText = btn.textContent;
      btn.textContent = 'Enviando solicitud...';
      btn.disabled = true;

      const lead = Object.fromEntries(new FormData(landingForm).entries());
      lead.source = landingForm.dataset.source || 'b2b_landing_form';
      lead.page = window.location.pathname;
      lead.language = currentLang;

      try {
        await window.submitLeadToWix(lead);
        window.csTrack('Lead', {
          content_name: lead.source,
          organization_type: lead.specialty ? 'medical_partner' : 'company',
          interest: lead.interest || lead.specialty || '',
          volume: lead.volume || lead.patient_volume || ''
        });
        btn.textContent = 'Solicitud recibida';
        btn.style.background = '#102B4C';
        landingForm.reset();
      } catch (error) {
        console.error('Landing lead submit failed:', error);
        btn.textContent = 'No se pudo enviar. Intenta de nuevo.';
        btn.style.background = '#B91C1C';
      }

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 3500);
    });
  });

  // --- B2B Profile Selection ---
  const profileCards = document.querySelectorAll('.profile-card[data-href]');
  profileCards.forEach(card => {
    const target = card.dataset.href;
    if (!target) return;

    card.setAttribute('role', 'link');
    card.setAttribute('tabindex', '0');

    const goToTarget = (event) => {
      const clickedButton = event?.target?.closest('a, button');
      if (clickedButton) return;
      window.location.href = target;
    };

    card.addEventListener('click', goToTarget);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        window.location.href = target;
      }
    });
  });

  // Global function for prefilling contact
  window.prefillContact = (orgType, messagePrefix) => {
    const typeSelect = document.getElementById('type');
    const kindSelect = document.getElementById('travel-kind');
    const messageInput = document.getElementById('message');
    
    if (typeSelect && orgType === 'Empresa') typeSelect.value = 'empresa';
    if (typeSelect && orgType === 'Profesional/Médico') typeSelect.value = 'organizacion';
    if (typeSelect && orgType === 'Institución') typeSelect.value = 'universidad';
    if (kindSelect && orgType === 'Empresa') kindSelect.value = 'corporativo';
    if (kindSelect && orgType === 'Profesional/Médico') kindSelect.value = 'congreso-medico';
    if (kindSelect && orgType === 'Institución') kindSelect.value = 'academico';
    
    if (messageInput) {
      messageInput.value = `Hola, estoy interesado en información sobre: ${messagePrefix}.\n\nMis necesidades son: `;
    } else {
      const params = new URLSearchParams({ message: `Hola, estoy interesado en información sobre: ${messagePrefix}.\n\nMis necesidades son: ` });
      window.location.href = __copia(`contacto/index.html?${params.toString()}`);
    }
  };

  // --- Custom Chatbot Widget ---
  const chatToggle = document.getElementById('chatbot-toggle');
  const chatWindow = document.getElementById('chatbot-window');
  const chatClose = document.getElementById('chatbot-close');
  const chatMessages = document.getElementById('chatbot-messages');
  const chatOptions = document.getElementById('chatbot-options');
  const chatBadge = document.querySelector('.chatbot-badge');

  let chatOpened_placeholder; // Removed local let to use the one at the top

  const botFlow = {
    start: {
      messageKey: "chat_start",
      options: [
        { textKey: "chat_opt1", next: "empresa" },
        { textKey: "chat_opt2", next: "medico" },
        { textKey: "chat_opt3", next: "educativo" },
        { textKey: "chat_opt4", next: "cotizar" },
        { textKey: "chat_opt5", next: "llamada" }
      ]
    },
    empresa: {
      messageKey: "chat_msg_emp",
      action: { textKey: "chat_act_emp", target: __copia("empresas/index.html") },
      options: [
        { textKey: "chat_cot_now", next: "cotizar" },
        { textKey: "chat_back", next: "start" }
      ]
    },
    medico: {
      messageKey: "chat_msg_med",
      action: { textKey: "chat_act_med", target: __copia("medicos/index.html") },
      options: [
        { textKey: "chat_cot_now", next: "cotizar" },
        { textKey: "chat_back", next: "start" }
      ]
    },
    educativo: {
      messageKey: "chat_msg_edu",
      action: { textKey: "chat_act_edu", target: "#contacto", onclick: () => { window.prefillContact('Institución', 'Viaje académico o educativo'); } },
      options: [
        { textKey: "chat_cot_now", next: "cotizar" },
        { textKey: "chat_back", next: "start" }
      ]
    },
    cotizar: {
      messageKey: "chat_msg_cot",
      action: { textKey: "chat_act_cot", target: "#contacto" },
      options: [
        { textKey: "chat_back", next: "start" }
      ]
    },
    llamada: {
      messageKey: "chat_msg_call",
      action: { textKey: "chat_act_call", target: "https://wa.me/573146103599?text=Hola%2C%20quiero%20agendar%20una%20asesoria%20para%20un%20viaje%20grupal%20con%20CS%20Travel%20Group." },
      options: [
        { textKey: "chat_cot_now", next: "cotizar" },
        { textKey: "chat_back", next: "start" }
      ]
    }
  };

  function appendMessage(text, sender, action = null) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${sender}`;
    msgDiv.innerHTML = text; // Use innerHTML to allow tags
    
    if (action) {
      const btn = document.createElement('a');
      btn.href = action.target;
      btn.className = 'chat-action-btn';
      btn.textContent = action.text;
      btn.addEventListener('click', (e) => {
        if (action.target.startsWith('#')) {
          e.preventDefault();
          chatWindow.classList.remove('active');
          const targetEl = document.querySelector(action.target);
          if (targetEl) {
            const y = targetEl.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
          } else {
            window.location.href = __copia('contacto/index.html');
          }
        }
        if (action.onclick) action.onclick();
      });
      msgDiv.appendChild(document.createElement('br'));
      msgDiv.appendChild(btn);
    }
    
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }


  function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.id = 'typing-indicator';
    indicator.innerHTML = '<span></span><span></span><span></span>';
    chatMessages.appendChild(indicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) indicator.remove();
  }

  function loadFlow(nodeId) {
    chatOptions.innerHTML = '';
    const node = botFlow[nodeId];
    
    showTypingIndicator();
    
    setTimeout(() => {
      removeTypingIndicator();
      
      const message = translations[currentLang][node.messageKey];
      let action = null;
      if (node.action) {
        action = {
          text: translations[currentLang][node.action.textKey],
          target: node.action.target,
          onclick: node.action.onclick
        };
      }
      
      appendMessage(message, 'bot', action);
      
      if (node.options) {
        node.options.forEach(opt => {
          const btn = document.createElement('button');
          btn.className = 'chat-option-btn';
          btn.textContent = translations[currentLang][opt.textKey];
          btn.addEventListener('click', () => {
            chatOptions.innerHTML = ''; // Clear options immediately
            appendMessage(translations[currentLang][opt.textKey], 'user');
            loadFlow(opt.next);
          });
          chatOptions.appendChild(btn);
        });
      }
    }, 1000);
  }


  chatToggle?.addEventListener('click', () => {
    chatWindow.classList.toggle('active');
    if (chatBadge) chatBadge.style.display = 'none';
    
    if (!chatOpened) {
      chatOpened = true;
      loadFlow('start');
    }
  });

  chatClose?.addEventListener('click', () => {
    chatWindow.classList.remove('active');
  });

  const contactSection = document.getElementById('contacto');
  const chatbotWidget = document.querySelector('.chatbot-widget');
  if (contactSection && chatbotWidget && window.matchMedia('(max-width: 768px)').matches) {
    const chatOverlapObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        chatbotWidget.classList.toggle('contact-overlap', entry.isIntersecting);
      });
    }, {
      threshold: 0.25,
      rootMargin: '0px 0px -15% 0px'
    });

    chatOverlapObserver.observe(contactSection);
  }

  /* ===== Instagram Modal ===== */
  const igCards = document.querySelectorAll('.ig-card');
  const igModal = document.getElementById('ig-modal');
  if(igCards.length > 0 && igModal) {
    const igModalImg = document.getElementById('ig-modal-img');
    const igModalDesc = document.getElementById('ig-modal-desc');
    const igModalDate = document.getElementById('ig-modal-date');
    const igModalLink = document.getElementById('ig-modal-link');
    const igModalClose = document.getElementById('ig-modal-close');
    const igModalPrev = document.getElementById('ig-modal-prev');
    const igModalNext = document.getElementById('ig-modal-next');
    
    let currentIgIndex = 0;

    const updateModalContent = (index) => {
      if (index < 0) index = igCards.length - 1;
      if (index >= igCards.length) index = 0;
      currentIgIndex = index;
      
      const card = igCards[currentIgIndex];
      igModalImg.src = card.dataset.img;
      igModalDesc.innerHTML = card.dataset.desc;
      igModalDate.textContent = card.dataset.date;
      igModalLink.href = card.dataset.link;
    };

    igCards.forEach((card, index) => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        updateModalContent(index);
        igModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    igModalClose.addEventListener('click', () => {
      igModal.classList.remove('active');
      document.body.style.overflow = '';
    });

    igModal.addEventListener('click', (e) => {
      if (e.target === igModal) {
        igModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    igModalPrev.addEventListener('click', () => updateModalContent(currentIgIndex - 1));
    igModalNext.addEventListener('click', () => updateModalContent(currentIgIndex + 1));
  }

});

// ===== Banner de cookies (consentimiento) =====
(function () {
  var KEY = 'cst_cookie_consent';

  // La decision se le pasa a Wix: el pixel de Facebook y la analitica los
  // inyecta Wix (integraciones de marketing), no este archivo, y solo los
  // apaga su propio gestor de consentimiento. Antes «Rechazar» se guardaba
  // aqui pero Wix seguia cargando el pixel igual.
  function applyToWix(choice) {
    try {
      var cpm = window.consentPolicyManager;
      if (!cpm || typeof cpm.setConsentPolicy !== 'function') return;
      var yes = choice === 'accepted';
      cpm.setConsentPolicy(
        { essential: true, functional: true, analytics: yes, advertising: yes, dataToThirdParty: yes },
        function () {},
        function () {}
      );
    } catch (e) {}
  }

  // Si ya decidio pero Wix perdio su cookie (la borro el navegador), se la
  // volvemos a dar.
  function resync(choice) {
    try {
      var cpm = window.consentPolicyManager;
      var current = cpm && cpm.getCurrentConsentPolicy && cpm.getCurrentConsentPolicy();
      if (current && current.defaultPolicy) applyToWix(choice);
    } catch (e) {}
  }

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  ready(function () {
    var stored = null;
    try { stored = localStorage.getItem(KEY); } catch (e) { return; }
    if (stored) { resync(stored); return; }

    var lang = 'es';
    try { lang = localStorage.getItem('cs_lang') || 'es'; } catch (e) {}

    var t = lang === 'en'
      ? { text: 'We use our own and third-party cookies to improve your experience and analyze traffic.', accept: 'Accept', reject: 'Reject' }
      : { text: 'Usamos cookies propias y de terceros para mejorar tu experiencia y analizar el tráfico.', accept: 'Aceptar', reject: 'Rechazar' };

    var banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', lang === 'en' ? 'Cookie notice' : 'Aviso de cookies');
    banner.innerHTML =
      '<div class="cookie-banner__inner">' +
        '<p class="cookie-banner__text">' + t.text + '</p>' +
        '<div class="cookie-banner__actions">' +
          '<button type="button" class="cookie-banner__btn cookie-banner__btn--ghost" data-cookie="reject">' + t.reject + '</button>' +
          '<button type="button" class="cookie-banner__btn cookie-banner__btn--accept" data-cookie="accept">' + t.accept + '</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(banner);
    requestAnimationFrame(function () { banner.classList.add('is-visible'); });

    function close(choice) {
      try { localStorage.setItem(KEY, choice); } catch (e) {}
      applyToWix(choice);
      banner.classList.remove('is-visible');
      setTimeout(function () { if (banner.parentNode) banner.parentNode.removeChild(banner); }, 300);
    }

    banner.querySelector('[data-cookie="accept"]').addEventListener('click', function () { close('accepted'); });
    banner.querySelector('[data-cookie="reject"]').addEventListener('click', function () { close('rejected'); });
  });
})();

// --- Franja de promociones del mes (I-01) ------------------------------------
// Se administra desde el portal (Admin > Banners): imagen de escritorio y de
// celular, enlace, texto alternativo, orden y fechas. Aqui solo se pinta lo que
// el servidor dice que esta vigente hoy, debajo del bloque principal de la
// pagina. Si no hay banners (o falla la consulta) no se muestra nada.
(function () {
  var hero = document.querySelector('main > section.hero, main > section.split-hero');
  if (!hero || !window.fetch) return;

  fetch('/api/banners/activos', { credentials: 'omit' })
    .then(function (res) { return res.ok ? res.json() : { items: [] }; })
    .then(function (data) {
      var items = (data && data.items) || [];
      if (!items.length) return;

      var style = document.createElement('style');
      style.textContent =
        '.promo-strip{padding:18px 0 6px;background:transparent}' +
        '.promo-strip__frame{position:relative;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(6, 28, 49,.12);background:#061C31}' +
        '.promo-strip__slide{display:block;position:absolute;inset:0;opacity:0;transition:opacity .6s ease;pointer-events:none}' +
        '.promo-strip__slide.is-active{position:relative;opacity:1;pointer-events:auto}' +
        '.promo-strip__slide img{display:block;width:100%;height:auto;aspect-ratio:12/1;object-fit:cover}' +
        '.promo-strip__dots{position:absolute;right:14px;bottom:10px;display:flex;gap:6px}' +
        '.promo-strip__dot{width:8px;height:8px;border-radius:50%;border:0;padding:0;background:rgba(255,255,255,.5);cursor:pointer}' +
        '.promo-strip__dot.is-active{background:#ffd322}' +
        '@media (max-width:768px){.promo-strip__slide img{aspect-ratio:4/1}}' +
        '@media (prefers-reduced-motion:reduce){.promo-strip__slide{transition:none}}';
      document.head.appendChild(style);

      // div y no section: el sitio le da a todo <section> un padding grande.
      var strip = document.createElement('div');
      strip.className = 'promo-strip';
      strip.setAttribute('role', 'region');
      strip.setAttribute('aria-label', 'Promociones del mes');
      var html = '<div class="container"><div class="promo-strip__frame">';
      items.forEach(function (b, i) {
        var tag = b.link ? 'a' : 'div';
        var href = b.link ? ' href="' + encodeURI(b.link) + '"' + (/^https?:/.test(b.link) ? ' target="_blank" rel="noopener"' : '') : '';
        html += '<' + tag + ' class="promo-strip__slide' + (i === 0 ? ' is-active' : '') + '"' + href + '>' +
          '<picture>' +
          '<source media="(max-width: 768px)" srcset="' + encodeURI(b.mobile) + '">' +
          '<img src="' + encodeURI(b.desktop) + '" alt="' + String(b.alt || '').replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }) + '" loading="lazy" decoding="async" width="1920" height="160">' +
          '</picture></' + tag + '>';
      });
      if (items.length > 1) {
        html += '<div class="promo-strip__dots">';
        items.forEach(function (b, i) {
          html += '<button type="button" class="promo-strip__dot' + (i === 0 ? ' is-active' : '') + '" aria-label="Promoción ' + (i + 1) + '"></button>';
        });
        html += '</div>';
      }
      html += '</div></div>';
      strip.innerHTML = html;
      hero.parentNode.insertBefore(strip, hero.nextSibling);

      if (items.length < 2) return;
      var slides = strip.querySelectorAll('.promo-strip__slide');
      var dots = strip.querySelectorAll('.promo-strip__dot');
      var current = 0;
      var paused = false;
      function show(n) {
        current = (n + slides.length) % slides.length;
        for (var i = 0; i < slides.length; i++) {
          slides[i].classList.toggle('is-active', i === current);
          dots[i].classList.toggle('is-active', i === current);
        }
      }
      for (var d = 0; d < dots.length; d++) {
        (function (i) { dots[i].addEventListener('click', function () { show(i); }); })(d);
      }
      strip.addEventListener('mouseenter', function () { paused = true; });
      strip.addEventListener('mouseleave', function () { paused = false; });
      setInterval(function () { if (!paused && !document.hidden) show(current + 1); }, 6000);
    })
    .catch(function () { /* sin banners: la pagina sigue igual */ });
})();

// --- Barra de contacto fija en celular (I-02) ---------------------------------
// En Inicio, Empresas y Medicos, en pantallas de hasta 768 px: al pasar la
// portada aparece abajo «Hablemos hoy» + WhatsApp; se esconde al llegar al pie
// (ahi ya estan los mismos contactos). Mientras esta visible, la burbuja del
// chat sube para no quedar tapada. No aparece en contacto, pago ni portal.
(function barraContactoMovil() {
  var ruta = window.__COPIA_RUTA || '';
  if (['/', '/empresas', '/medicos'].indexOf(ruta) === -1) return;
  if (!window.matchMedia || !('IntersectionObserver' in window)) return;
  var movil = window.matchMedia('(max-width: 768px)');

  var barra = document.createElement('div');
  barra.className = 'cta-movil';
  barra.setAttribute('role', 'region');
  barra.setAttribute('aria-label', 'Contacto rápido');
  barra.innerHTML =
    '<a href="' + __copia('contacto/index.html') + '" class="btn btn-primary cta-movil__principal" data-i18n="nav_cta">Hablémos hoy</a>' +
    '<a href="https://wa.me/573146103599" class="cta-movil__wa" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp">' +
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z"/></svg>' +
    '</a>';
  document.body.appendChild(barra);

  var pasoPortada = false;
  var enPie = false;
  function pintar() {
    var ver = movil.matches && pasoPortada && !enPie;
    barra.classList.toggle('is-visible', ver);
    document.body.classList.toggle('has-cta-movil', ver);
  }

  // La portada es la primera seccion de la pagina; si no hay, 60% de la pantalla.
  var portada = document.querySelector('main > section, .hero, .split-hero');
  if (portada) {
    new IntersectionObserver(function (e) { pasoPortada = !e[0].isIntersecting; pintar(); }, { threshold: 0.15 }).observe(portada);
  } else {
    window.addEventListener('scroll', function () { pasoPortada = window.scrollY > window.innerHeight * 0.6; pintar(); }, { passive: true });
  }
  var pie = document.querySelector('footer.footer');
  if (pie) new IntersectionObserver(function (e) { enPie = e[0].isIntersecting; pintar(); }).observe(pie);
  if (movil.addEventListener) movil.addEventListener('change', pintar);
})();
