# Copia sin publicar de cstravelgroup.com

Réplica en HTML de las páginas públicas del sitio publicado, tomada del repositorio
`theo272004/cstravelgroup` (commit `9d734e3`, 23 oct 2026). No está conectada al sitio en vivo:
lo que se cambie aquí no se publica.

## Cómo abrirla
Doble clic en `index.html`. Se navega entre páginas igual que en el sitio.

## Qué incluye
- Inicio, Empresas, Médicos, Contacto y Reservas.
- Legales: Términos, Privacidad, Reembolso, Accesibilidad, Aviso de privacidad,
  Código de conducta y Cookies.
- `css/`, `js/` y solo las imágenes que usan estas páginas (`assets/`).

## Qué no incluye (y qué pasa al tocarlo)
- El portal/panel, el programa de aliados y los pagos: esos enlaces llevan al sitio publicado.
- Los formularios (contacto, banners) no envían nada: el servidor no está en la copia,
  así que no llegan clientes falsos al panel.

## Rebranding de las demás páginas (24 oct 2026)
Empresas, Médicos, Contacto, Reservas y las siete legales siguen la estética del inicio nuevo
(`css/cs-home.css`) con sus piezas propias en `css/cs-pages.css`. Los textos, enlaces y
formularios son los del sitio: solo cambió la forma. Empresas y Médicos se rehicieron por
secciones (hero con foto, bloques azules, tarjetas, carrusel del inicio para las
especialidades); Contacto, Reservas y legales conservan su estructura con el estilo nuevo.

## Diferencias con el original
- Las rutas son relativas para que abra sin servidor.
- Cada página tiene `noindex` para que Google no la indexe si algún día se sube.
- En `js/main.js`, los saltos a Contacto/Empresas/Médicos y la barra de contacto en
  móvil usan `window.__COPIA_BASE` / `window.__COPIA_RUTA` (definidos en cada página).
