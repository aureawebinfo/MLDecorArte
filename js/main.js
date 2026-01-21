const btn = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");

// Toggle menu
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Close menu when clicking a link
function toggleMenu() {
  if (!menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
  }
}

function sendToWhatsapp() {
  // 1. Capturar valores
  const name = document.getElementById("frm-name").value;
  const phone = document.getElementById("frm-phone").value;
  const email = document.getElementById("frm-email").value;
  const type = document.getElementById("frm-type").value;
  const message = document.getElementById("frm-message").value;

  // 2. Validar campo mínimo (Nombre)
  if (!name) {
    alert("Por favor escribe tu nombre.");
    return;
  }

  // 3. Número de destino (CAMBIAR ESTE NÚMERO POR EL TUYO REAL)
  const phoneNumber = "573011959402";

  // 4. Crear mensaje
  const text = `*Nueva Solicitud Web*%0A%0A*Nombre:* ${name}%0A*Tel:* ${phone}%0A*Email:* ${email}%0A*Evento:* ${type}%0A*Mensaje:* ${message}`;

  // 5. Redirigir
  const url = `https://wa.me/${phoneNumber}?text=${text}`;
  window.open(url, "_blank");
}

// Funcionalidad de Modal para Galería
function openGalleryModal(container) {
  const modal = document.getElementById("gallery-modal");
  const modalImg = document.getElementById("modal-img");
  const clickedImg = container.querySelector("img");

  modalImg.src = clickedImg.src;

  // Mostrar modal con transición
  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.remove("opacity-0");
    modalImg.classList.remove("scale-95");
  }, 10);

  // Bloquear scroll del cuerpo
  document.body.style.overflow = "hidden";
}

function closeGalleryModal() {
  const modal = document.getElementById("gallery-modal");
  const modalImg = document.getElementById("modal-img");

  modal.classList.add("opacity-0");
  modalImg.classList.add("scale-95");

  setTimeout(() => {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }, 300);
}

// Cerrar modal al hacer clic fuera de la imagen
document.getElementById("gallery-modal").addEventListener("click", (e) => {
  if (
    e.target.id === "gallery-modal" ||
    e.target.parentElement.id === "gallery-modal"
  ) {
    closeGalleryModal();
  }
});
