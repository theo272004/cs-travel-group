// ===== CS Travel Group — Main JS =====

const translations = {
  es: {
    logo: 'CS<span>Travel</span> Group',
    nav_services: 'Servicios',
    nav_why: '¿Por qué nosotros?',
    nav_process: 'Proceso',
    nav_destinations: 'Destinos',
    nav_about: 'Nosotros',
    nav_contact: 'Contacto',
    nav_cta: 'Cotizar ahora',
    hero_t1: 'Movemos <em>grupos</em> con respaldo internacional.',
    hero_d1: 'Planificación profesional para empresas, universidades, colegios y equipos médicos. Vuelos, hoteles, traslados y soporte coordinados de principio a fin.',
    hero_t2: 'Viajes de incentivo que <em>motivan</em> a tu equipo.',
    hero_d2: 'Recompensa el esfuerzo con experiencias inolvidables. Nosotros nos encargamos de toda la logística de principio a fin.',
    hero_t3: 'Logística integral para <em>congresos</em> y misiones.',
    hero_d3: 'Hotelería cercana, traslados privados, agendas académicas y acompañamiento especializado para eventos de gran escala.',
    search_placeholder: '¿Hacia dónde viaja tu grupo?',
    hero_search_btn: 'Cotizar itinerario ✦',
    prof_label: 'Elige tu perfil',
    prof_title: 'Soluciones diseñadas para tu sector',
    prof_subtitle: 'Elige el tipo de organización y te llevamos al flujo correcto de cotización, propuesta y seguimiento.',
    prof_c_title: 'Empresas <br><em>Corporativas</em>',
    prof_c_desc: 'Para compañías que necesitan mover equipos, premiar resultados o coordinar eventos corporativos sin improvisar.',
    prof_c_f1: 'Vuelos, hoteles y traslados grupales',
    prof_c_f2: 'Incentivos, convenciones y retiros',
    prof_c_f3: 'Propuesta clara para aprobación interna',
    prof_c_btn: 'Ver servicios corporativos',
    prof_m_title: 'Instituciones & <br><em>Profesionales</em>',
    prof_m_desc: 'Para médicos, universidades, colegios y asociaciones que viajan a congresos, simposios o misiones académicas.',
    prof_m_f1: 'Hotelería cercana a congresos',
    prof_m_f2: 'Traslados, registros y agendas académicas',
    prof_m_f3: 'Acompañamiento para grupos profesionales',
    prof_m_btn: 'Ver servicios profesionales',
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
    serv_title: 'Viajes con <em>propósito</em>',
    serv_desc: 'Diseñamos cada detalle de tu viaje grupal, asegurándonos de que tu única preocupación sea disfrutar del destino. Conectamos tu organización con los mejores expertos locales.',
    serv_l1_t: 'Diseño a la medida:',
    serv_l1_d: 'Itinerarios creados específicamente para tu institución.',
    serv_l2_t: 'Proveedores verificados:',
    serv_l2_d: 'Comparamos opciones entre decenas de aliados globales.',
    serv_l3_t: 'Soporte en tiempo real:',
    serv_l3_d: 'Estamos contigo 24/7 ante cualquier imprevisto.',
    serv_btn: 'Crear mi itinerario',
    prom_title: 'Mejor que una <em>agencia tradicional</em>',
    prom_desc: 'No usamos paquetes estándar. Diseñamos viajes a la medida con expertos que conocen el destino de primera mano.',
    prom_c1_t: 'Expertos locales en el destino',
    prom_c1_s: 'Más del 95% de satisfacción.',
    prom_c1_d: 'Organiza un viaje a medida junto a nuestro equipo bilingüe en EE.UU. y Colombia, y nuestra red global de proveedores.',
    prom_c2_t: 'Experiencias inolvidables',
    prom_c2_s: 'Logística impecable.',
    prom_c2_d: 'Actividades únicas que no encontrarás en catálogos genéricos, pensadas exactamente para el perfil de tu grupo.',
    prom_c3_t: 'Respaldo y seguridad total',
    prom_c3_s: 'Tu inversión protegida.',
    prom_c3_d: 'Licencias activas en Florida y California, acreditación IATA y afiliación a Archer Travel Group.',
    stat_1_lbl: 'viajeros coordinados',
    stat_2_lbl: 'proveedores globales',
    stat_3_lbl: 'oficinas (EE.UU. + Colombia)',
    stat_4_val: '24/7',
    stat_4_lbl: 'soporte durante tu viaje',
    srv_grid_label: 'Nuestras Soluciones',
    srv_grid_title: 'Servicios Corporativos Integrales',
    srv_c1_t: 'Vuelos Grupales',
    srv_c1_d: 'Negociación de tarifas y flexibilidad para grupos a partir de 10 personas con las principales aerolíneas.',
    srv_c2_t: 'Hotelería Corporativa',
    srv_c2_d: 'Bloqueos de habitaciones, tarifas corporativas y selección de hoteles estratégicos para tus eventos.',
    srv_c3_t: 'Traslados & Logística',
    srv_c3_d: 'Coordinación de transporte terrestre privado, traslados aeropuerto-hotel y movilidad en destino.',
    srv_c4_t: 'Turismo Médico',
    srv_c4_d: 'Especialistas en logística para congresos médicos, simposios y misiones de salud internacional.',
    srv_c5_t: 'Viajes de Incentivo',
    srv_c5_d: 'Programas de motivación, retiros y team building diseñados para recompensar a tu mejor talento.',
    srv_c6_t: 'Eventos & Convenciones',
    srv_c6_d: 'Asistencia integral en la planificación de convenciones, selección de venues y gestión de asistentes.',
    phil_label: 'Nuestra Filosofía',
    phil_title: 'Viajar bien no debería ser un lujo,<br><em>es una inversión estratégica.</em>',
    phil_1_t: 'Acompañamos resultados, no solo viajes',
    phil_1_d: 'Entendemos que cada viaje corporativo tiene un objetivo de negocio. Diseñamos la logística para que tu equipo se enfoque en lo importante.',
    phil_2_t: 'La confianza como base',
    phil_2_d: 'Te acompañamos antes, durante y después del viaje, con transparencia en precios y respaldo legal en Estados Unidos y Colombia.',
    phil_3_t: 'Red global de proveedores',
    phil_3_d: 'Comparamos y negociamos entre más de una docena de proveedores verificados para obtener la mejor relación costo-beneficio para tu empresa.',
    phil_4_t: 'Seguridad y cumplimiento',
    phil_4_d: 'Planificamos cuidando cada detalle con responsabilidad. Contamos con licencias activas, acreditaciones IATA/ARC y protocolos claros.',
    phil_5_t: 'Atención personalizada',
    phil_5_d: 'No eres un número de reserva. Asignamos un ejecutivo de cuenta dedicado que conoce las políticas de viaje de tu organización.',
    ig_title: 'Conecta con nosotros',
    ig_desc: 'Descubre destinos, tips de viajes corporativos y nuestro día a día.',
    ig_btn: 'Síguenos @cstravelgroup',
    bk_title: '¿Prefieres hablar con un experto primero?',
    bk_desc: 'Agenda una asesoría gratuita por videollamada para discutir las necesidades de viaje de tu organización.',
    bk_btn: 'Agendar asesoría (45 min) ✦',
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
    proc_s4_d: 'Tu grupo viaja con respaldo total. Nuestro equipo está disponible 24/7 durante toda la experiencia.',
    dest_label: 'Destinos Globales',
    dest_title: 'Viaja más allá de los <em>tópicos.</em>',
    dest_subtitle: 'Explora nuestras rutas exclusivas diseñadas para grupos institucionales y corporativos.',
    dest_c1_tag: 'Colección Europa',
    dest_c1_t: 'París & Madrid',
    dest_c1_d: 'Cultura, arte y logística de primer nivel.',
    dest_c2_tag: 'Norteamérica',
    dest_c2_t: 'Miami & Orlando',
    dest_c2_d: 'Convenciones y viajes de incentivo.',
    dest_c3_tag: 'Asia Exótica',
    dest_c3_t: 'Tokio & Kioto',
    dest_c3_d: 'Tradición y tecnología para misiones académicas.',
    dest_c4_tag: 'Sudamérica',
    dest_c4_t: 'Cartagena de Indias',
    dest_c4_d: 'Retiros corporativos con encanto histórico.',
    dest_c5_tag: 'Colección Mediterránea',
    dest_c5_t: 'Roma & Florencia',
    dest_c5_d: 'Rutas académicas y de humanidades.',
    cred_label: 'Respaldo Internacional',
    cred_title: 'Acreditaciones que nos guían',
    cred_l1_t: 'IATA & ARC',
    cred_l1_d: 'Contamos con acreditación internacional IATA (#05824840) y Airlines Reporting Corp., lo que nos permite emitir boletos globalmente con las mejores tarifas garantizadas.',
    cred_l2_t: 'Licencias Estatales (EE.UU.)',
    cred_l2_d: 'Operamos bajo estricto cumplimiento legal con licencias activas en Florida (#35395) y California (CST #2001330-10), protegiendo tu inversión.',
    cred_l3_t: 'Archer Travel Group',
    cred_l3_d: 'Somos parte de uno de los grupos de agencias más respetados del mundo, brindándonos acceso exclusivo a tarifas preferenciales y negociaciones directas.',
    about_label: 'Sobre nosotros',
    about_title: 'Detrás de CS Travel Group',
    about_p1: 'CS Travel Group nació de una idea sencilla pero poderosa: compartir nuestra pasión por descubrir el mundo y acompañar a quienes quieren hacerlo con respaldo real.',
    about_p2: 'Fundada oficialmente el 27 de octubre de 2025 y respaldada por Archer Travel Service Inc., nuestra agencia combina la cercanía del trato personalizado con la solidez de las acreditaciones internacionales más importantes del sector.',
    about_p3: 'Con presencia en Doral, Florida (EE.UU.) y Barranquilla, Colombia, atendemos organizaciones en ambos mercados que buscan un aliado confiable para mover grupos de manera profesional, segura y a precios justos.',
    cont_label: 'Contacto',
    cont_title: '¿Listo para planificar el próximo viaje de tu organización?',
    cont_subtitle: 'Cuéntanos sobre tu grupo y destino. Te responderemos con una propuesta personalizada en menos de 48 horas.',
    cont_email_t: 'Correo electrónico',
    cont_col_t: 'Colombia',
    cont_col_d: 'Barranquilla, Atlántico',
    form_name_lbl: 'Nombre completo',
    form_name_ph: 'Tu nombre',
    form_email_lbl: 'Correo electrónico',
    form_email_ph: 'correo@ejemplo.com',
    form_phone_lbl: 'Teléfono / WhatsApp',
    form_phone_ph: '+1 000 000 0000',
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
    form_budget_lbl: 'Presupuesto estimado',
    form_budget_ph: 'Opcional',
    form_msg_lbl: 'Cuéntanos sobre tu viaje',
    form_msg_ph: 'Destino, número aproximado de personas, fechas tentativas, presupuesto estimado...',
    form_btn: 'Enviar solicitud de cotización →',
    foot_desc: 'Agencia de viajes acreditada internacionalmente, especializada en la planificación de viajes grupales para instituciones educativas, empresas y organizaciones.',
    foot_nav_t: 'Navegación',
    foot_nav_h: 'Inicio',
    foot_nav_p: 'Perfiles',
    foot_leg_t: 'Legal',
    foot_leg_t1: 'Términos y condiciones',
    foot_leg_t2: 'Política de privacidad',
    foot_leg_t3: 'Política de reembolso',
    foot_leg_t4: 'Accesibilidad',
    foot_copy: '© 2025 CS Travel Group. Todos los derechos reservados.',
    foot_reg: 'Registro Mercantil No. 926484 · RNT No. 264837',
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
    nav_services: 'Services',
    nav_why: 'Why Us?',
    nav_process: 'Process',
    nav_destinations: 'Destinations',
    nav_about: 'About Us',
    nav_contact: 'Contact',
    nav_cta: 'Get a Quote',
    hero_t1: 'We move <em>groups</em> with international backing.',
    hero_d1: 'Professional planning for companies, universities, schools, and medical teams. Flights, hotels, transfers, and support coordinated from start to finish.',
    hero_t2: 'Incentive trips that <em>motivate</em> your team.',
    hero_d2: 'Reward effort with unforgettable experiences. We take care of all logistics from start to finish.',
    hero_t3: 'End-to-end logistics for <em>congresses</em> and missions.',
    hero_d3: 'Nearby hotels, private transfers, academic agendas, and specialized support for large-scale events.',
    search_placeholder: 'Where is your group traveling to?',
    hero_search_btn: 'Quote itinerary ✦',
    prof_label: 'Choose your profile',
    prof_title: 'Solutions designed for your sector',
    prof_subtitle: 'Choose your organization type and we will guide you to the right quote, proposal, and follow-up flow.',
    prof_c_title: 'Corporate <br><em>Companies</em>',
    prof_c_desc: 'For companies that need to move teams, reward performance, or coordinate corporate events without improvising.',
    prof_c_f1: 'Group flights, hotels, and transfers',
    prof_c_f2: 'Incentives, conventions, and retreats',
    prof_c_f3: 'Clear proposal for internal approval',
    prof_c_btn: 'View corporate services',
    prof_m_title: 'Institutions & <br><em>Professionals</em>',
    prof_m_desc: 'For doctors, universities, schools, and associations traveling to congresses, symposia, or academic missions.',
    prof_m_f1: 'Hotels near congresses',
    prof_m_f2: 'Transfers, registrations, and academic agendas',
    prof_m_f3: 'Support for professional groups',
    prof_m_btn: 'View professional services',
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
    serv_title: 'Trips with <em>purpose</em>',
    serv_desc: 'We design every detail of your group trip, ensuring your only concern is enjoying the destination. We connect your organization with the best local experts.',
    serv_l1_t: 'Custom Design:',
    serv_l1_d: 'Itineraries created specifically for your institution.',
    serv_l2_t: 'Verified Suppliers:',
    serv_l2_d: 'We compare options among dozens of global partners.',
    serv_l3_t: 'Real-time Support:',
    serv_l3_d: 'We are with you 24/7 for any unforeseen events.',
    serv_btn: 'Create my itinerary',
    prom_title: 'Better than a <em>traditional agency</em>',
    prom_desc: 'We don\'t use standard packages. We design custom trips with experts who know the destination first-hand.',
    prom_c1_t: 'Local experts at the destination',
    prom_c1_s: 'Over 95% satisfaction.',
    prom_c1_d: 'Organize a custom trip with our bilingual team in the US and Colombia, and our global network of suppliers.',
    prom_c2_t: 'Unforgettable experiences',
    prom_c2_s: 'Impeccable logistics.',
    prom_c2_d: 'Unique activities you won\'t find in generic catalogs, designed exactly for your group\'s profile.',
    prom_c3_t: 'Backing and total security',
    prom_c3_s: 'Your investment protected.',
    prom_c3_d: 'Active licenses in Florida and California, IATA accreditation, and affiliation with Archer Travel Group.',
    stat_1_lbl: 'coordinated travelers',
    stat_2_lbl: 'global suppliers',
    stat_3_lbl: 'offices (USA + Colombia)',
    stat_4_val: '24/7',
    stat_4_lbl: 'support during your trip',
    srv_grid_label: 'Our Solutions',
    srv_grid_title: 'Comprehensive Corporate Services',
    srv_c1_t: 'Group Flights',
    srv_c1_d: 'Fare negotiation and flexibility for groups of 10 or more with major airlines.',
    srv_c2_t: 'Corporate Lodging',
    srv_c2_d: 'Room blocks, corporate rates, and selection of strategic hotels for your events.',
    srv_c3_t: 'Transfers & Logistics',
    srv_c3_d: 'Coordination of private ground transportation, airport-hotel transfers, and mobility at the destination.',
    srv_c4_t: 'Medical Tourism',
    srv_c4_d: 'Logistics specialists for medical congresses, symposia, and international health missions.',
    srv_c5_t: 'Incentive Travel',
    srv_c5_d: 'Motivation programs, retreats, and team building designed to reward your best talent.',
    srv_c6_t: 'Events & Conventions',
    srv_c6_d: 'Comprehensive assistance in convention planning, venue selection, and attendee management.',
    phil_label: 'Our Philosophy',
    phil_title: 'Traveling well shouldn\'t be a luxury,<br><em>it\'s a strategic investment.</em>',
    phil_1_t: 'We accompany results, not just trips',
    phil_1_d: 'We understand that every corporate trip has a business goal. We design the logistics so your team focuses on what matters.',
    phil_2_t: 'Trust as a foundation',
    phil_2_d: 'We accompany you before, during, and after the trip, with transparent pricing and legal backing in the US and Colombia.',
    phil_3_t: 'Global network of suppliers',
    phil_3_d: 'We compare and negotiate among over a dozen verified suppliers to get the best cost-benefit ratio for your company.',
    phil_4_t: 'Security and compliance',
    phil_4_d: 'We plan every detail responsibly. We have active licenses, IATA/ARC accreditations, and clear protocols.',
    phil_5_t: 'Personalized attention',
    phil_5_d: 'You are not a reservation number. We assign a dedicated account executive who knows your organization\'s travel policies.',
    ig_title: 'Connect with us',
    ig_desc: 'Discover destinations, corporate travel tips, and our day-to-day.',
    ig_btn: 'Follow us @cstravelgroup',
    bk_title: 'Prefer to talk to an expert first?',
    bk_desc: 'Schedule a free video call consultation to discuss your organization\'s travel needs.',
    bk_btn: 'Schedule consultation (45 min) ✦',
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
    proc_s4_d: 'Your group travels with full support. Our team is available 24/7 throughout the experience.',
    dest_label: 'Global Destinations',
    dest_title: 'Travel beyond the <em>clichés.</em>',
    dest_subtitle: 'Explore our exclusive routes designed for institutional and corporate groups.',
    dest_c1_tag: 'Europe Collection',
    dest_c1_t: 'Paris & Madrid',
    dest_c1_d: 'Culture, art, and top-level logistics.',
    dest_c2_tag: 'North America',
    dest_c2_t: 'Miami & Orlando',
    dest_c2_d: 'Conventions and incentive trips.',
    dest_c3_tag: 'Exotic Asia',
    dest_c3_t: 'Tokyo & Kyoto',
    dest_c3_d: 'Tradition and technology for academic missions.',
    dest_c4_tag: 'South America',
    dest_c4_t: 'Cartagena de Indias',
    dest_c4_d: 'Corporate retreats with historical charm.',
    dest_c5_tag: 'Mediterranean Collection',
    dest_c5_t: 'Rome & Florence',
    dest_c5_d: 'Academic and humanities routes.',
    cred_label: 'International Backing',
    cred_title: 'Accreditations that guide us',
    cred_l1_t: 'IATA & ARC',
    cred_l1_d: 'We have IATA international accreditation (#05824840) and Airlines Reporting Corp., allowing us to issue tickets globally with the best guaranteed rates.',
    cred_l2_t: 'State Licenses (USA)',
    cred_l2_d: 'We operate under strict legal compliance with active licenses in Florida (#35395) and California (CST #2001330-10), protecting your investment.',
    cred_l3_t: 'Archer Travel Group',
    cred_l3_d: 'We are part of one of the world\'s most respected agency groups, giving us exclusive access to preferential rates and direct negotiations.',
    about_label: 'About us',
    about_title: 'Behind CS Travel Group',
    about_p1: 'CS Travel Group was born from a simple but powerful idea: to share our passion for discovering the world and accompany those who want to do it with real backing.',
    about_p2: 'Officially founded on October 27, 2025, and backed by Archer Travel Service Inc., our agency combines personal treatment with the solidity of the industry\'s most important international accreditations.',
    about_p3: 'With a presence in Doral, Florida (USA) and Barranquilla, Colombia, we serve organizations in both markets looking for a reliable partner to move groups professionally, safely, and at fair prices.',
    cont_label: 'Contact',
    cont_title: 'Ready to plan your organization\'s next trip?',
    cont_subtitle: 'Tell us about your group and destination. We will respond with a personalized proposal in less than 48 hours.',
    cont_email_t: 'Email Address',
    cont_col_t: 'Colombia',
    cont_col_d: 'Barranquilla, Atlántico',
    form_name_lbl: 'Full Name',
    form_name_ph: 'Your name',
    form_email_lbl: 'Email Address',
    form_email_ph: 'email@example.com',
    form_phone_lbl: 'Phone / WhatsApp',
    form_phone_ph: '+1 000 000 0000',
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
    form_budget_lbl: 'Estimated budget',
    form_budget_ph: 'Optional',
    form_msg_lbl: 'Tell us about your trip',
    form_msg_ph: 'Destination, approximate number of people, tentative dates, estimated budget...',
    form_btn: 'Send quote request →',
    foot_desc: 'Internationally accredited travel agency, specialized in planning group trips for educational institutions, companies, and organizations.',
    foot_nav_t: 'Navigation',
    foot_nav_h: 'Home',
    foot_nav_p: 'Profiles',
    foot_leg_t: 'Legal',
    foot_leg_t1: 'Terms & Conditions',
    foot_leg_t2: 'Privacy Policy',
    foot_leg_t3: 'Refund Policy',
    foot_leg_t4: 'Accessibility',
    foot_copy: '© 2025 CS Travel Group. All rights reserved.',
    foot_reg: 'Mercantile Registry No. 926484 · RNT No. 264837',
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

document.addEventListener('DOMContentLoaded', () => {
  let chatOpened = false;

  const getAttribution = () => {
    const params = new URLSearchParams(window.location.search);
    return {
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
    // Replace with the Wix/Velo endpoint when the client confirms the backend flow.
    console.info('Wix lead payload ready:', lead);
    return { ok: true, pendingIntegration: true };
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
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update all elements with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (translations[lang][key]) {
        el.placeholder = translations[lang][key];
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

  // Initial language load
  updateLanguage(currentLang);

  // --- Header scroll effect ---
  const header = document.querySelector('.header');
  const onScroll = () => {
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
      const target = document.querySelector(anchor.getAttribute('href'));
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
      if (dest) {
        const destinationInput = document.querySelector('#destination');
        const contactMsg = document.querySelector('#message');
        if (destinationInput) destinationInput.value = dest;
        if (contactMsg) contactMsg.value = `Hola, me gustaría cotizar un viaje para mi grupo hacia ${dest}.`;
      }
      const contactSection = document.querySelector('#contacto');
      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

    // --- GSAP Advanced Animations ---
    
    // 1. Hero Cinematic Flight Path
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroTexts = document.querySelectorAll('.hero-text-slide');
    const heroDots = document.querySelectorAll('.hero-progress-dot');
    const desktopMotion = window.matchMedia('(min-width: 769px)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const setStaticHeroStage = (index) => {
      heroSlides.forEach((slide, i) => slide.classList.toggle('active', i === index));
      heroTexts.forEach((text, i) => text.classList.toggle('active', i === index));
      heroDots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    };

    if (heroSlides.length > 0 && typeof MotionPathPlugin !== 'undefined' && desktopMotion) {
      let activeHeroStage = 0;
      gsap.set(heroSlides, { autoAlpha: 0 });
      gsap.set(heroTexts, { autoAlpha: 0, y: 18, filter: 'blur(3px)' });
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
        gsap.to(heroTexts, { autoAlpha: 0, y: -14, filter: 'blur(3px)', duration: 0.12, ease: 'power2.in', overwrite: true });
        gsap.fromTo(heroTexts[index],
          { autoAlpha: 0, y: 20, filter: 'blur(3px)' },
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
          end: '+=1600',
          pin: true,
          scrub: 0.28,
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

      // Fade in the initial elements on load
      gsap.from('.header', { y: -100, autoAlpha: 0, duration: 1, ease: 'power4.out' });
      gsap.from('.nav-links li', { y: -20, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.5 });
      gsap.from('.hero-kicker', { y: 18, autoAlpha: 0, duration: 0.7, ease: 'power3.out', delay: 0.25 });
      gsap.fromTo(heroTexts[0], { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out', delay: 0.4 });
      gsap.from('.hero-progress-dot', { y: 10, autoAlpha: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out', delay: 0.65 });
      gsap.from('.hero-search-bar', { y: 20, autoAlpha: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 });
      gsap.fromTo('.hero-search-bar > *',
        { x: -20, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 0.8 }
      );
    } else {
      setStaticHeroStage(0);
      gsap.set([...heroSlides, ...heroTexts], { clearProps: 'all' });
      const heroTl = gsap.timeline();
      heroTl.from('.hero-title', { y: 26, autoAlpha: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2')
            .from('.hero-desc', { y: 14, autoAlpha: 0, duration: 0.55, ease: 'power3.out' }, '-=0.35')
            .from('.hero-search-bar', { y: 14, autoAlpha: 0, duration: 0.55, ease: 'power3.out' }, '-=0.3');
    }

      // 2. Horizontal Scroll Destinations
      const scrollWrapper = document.querySelector('.scroll-wrapper');
      if (scrollWrapper && desktopMotion && scrollWrapper.scrollWidth > window.innerWidth) {
        gsap.to(scrollWrapper, {
          x: () => -(scrollWrapper.scrollWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: '.destinations-scroll',
            start: 'top top',
            end: () => `+=${scrollWrapper.scrollWidth - window.innerWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          }
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
                toggleActions: 'play none none reverse'
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

  // --- Custom Cursor ---
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');
  
  if (cursorDot && cursorOutline && window.innerWidth > 1024) {
    window.addEventListener('mousemove', (e) => {
      const posX = e.clientX;
      const posY = e.clientY;
      
      // Dot follows immediately
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
      
      // Outline follows with slight delay using GSAP if available
      if (typeof gsap !== 'undefined') {
        gsap.to(cursorOutline, {
          x: posX,
          y: posY,
          duration: 0.15,
          ease: 'power2.out'
        });
      } else {
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
      }
    });

    // Hover effect on interactables
    const interactables = document.querySelectorAll('a, button, input, select, textarea, .profile-card, .dest-item');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', () => cursorOutline.classList.add('hover-active'));
      el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hover-active'));
    });
  }

  // --- Magnetic Elements (Buttons & Nav) ---
  const magneticElements = document.querySelectorAll('.btn, .nav-links a, .nav-cta');
  if (window.innerWidth > 1024 && typeof gsap !== 'undefined') {
    magneticElements.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(el, {
          x: x * 0.4,
          y: y * 0.4,
          duration: 0.4,
          ease: 'power3.out'
        });
      });
      
      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: 'elastic.out(1, 0.3)'
        });
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
          const duration = 2000;
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
  form?.addEventListener('submit', async e => {
    e.preventDefault();
    const formData = new FormData(form);
    let valid = true;

    form.querySelectorAll('[required]').forEach(field => {
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

    if (valid) {
      const btn = form.querySelector('.form-submit');
      const originalText = btn.textContent;
      btn.textContent = currentLang === 'es' ? 'Enviando solicitud...' : 'Sending request...';
      btn.disabled = true;

      const lead = Object.fromEntries(formData.entries());
      lead.source = 'website_quote_form';
      lead.language = currentLang;

      try {
        await window.submitLeadToWix(lead);
        window.csTrack('Lead', {
          content_name: 'B2B quote request',
          organization_type: lead.type || '',
          travel_kind: lead.travel_kind || '',
          destination: lead.destination || ''
        });
        btn.textContent = currentLang === 'es' ? 'Solicitud recibida ✓' : 'Request received ✓';
        btn.style.background = '#183A63';
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

  // --- Active nav link highlight ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const activateLink = () => {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + id) {
            link.style.color = '#F4D068';
          }
        });
      }
    });
  };
  window.addEventListener('scroll', activateLink, { passive: true });

  // --- B2B Profile Selection ---
  const profileCards = document.querySelectorAll('.profile-card');
  const detailsWrapper = document.getElementById('profile-details-wrapper');
  const profileDetails = document.querySelectorAll('.profile-details');

  profileCards.forEach(card => {
    card.addEventListener('click', () => {
      const targetId = 'details-' + card.dataset.profile;
      
      // Toggle active class on cards
      profileCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      
      // Show wrapper
      detailsWrapper.classList.add('active');
      
      // Show specific details
      profileDetails.forEach(detail => {
        detail.classList.remove('active');
        if (detail.id === targetId) {
          detail.classList.add('active');
        }
      });
      
      // Scroll to details
      setTimeout(() => {
        const y = detailsWrapper.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 100);
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
      action: { textKey: "chat_act_emp", target: "#perfiles", onclick: () => { document.querySelector('[data-profile="corporate"]')?.click(); } },
      options: [
        { textKey: "chat_cot_now", next: "cotizar" },
        { textKey: "chat_back", next: "start" }
      ]
    },
    medico: {
      messageKey: "chat_msg_med",
      action: { textKey: "chat_act_med", target: "#perfiles", onclick: () => { document.querySelector('[data-profile="medical"]')?.click(); } },
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
      action: { textKey: "chat_act_call", target: "https://wa.me/19292728933?text=Hola%2C%20quiero%20agendar%20una%20asesoria%20para%20un%20viaje%20grupal%20con%20CS%20Travel%20Group." },
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
