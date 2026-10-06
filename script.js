const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!patronCorreo.test(correo)) {
    document.getElementById("mensaje").textContent = "Correo con formato inválido.";
    return;
}
function agregarContacto(nombre, telefono, correo) {
    const div = document.createElement("div");
    div.className = "tarjeta-contacto";
    div.innerHTML = `
        <div>
            <strong>${nombre}</strong><br>
            📞 ${telefono}<br>
            ✉️ ${correo}
        </div>
        <button class="btn-eliminar">Eliminar</button>
    `;

    div.querySelector(".btn-eliminar").addEventListener("click", () => {
    if (confirm(`¿Eliminar a ${nombre}?`)) {
        div.remove();
    }
    });
    
    document.getElementById("listaContactos").appendChild(div);
}

document.getElementById("formContacto").addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();

    if (nombre === "" || telefono === "" || correo === "") {
        document.getElementById("mensaje").textContent = "Completa todos los campos.";
        return;
    }

    agregarContacto(nombre, telefono, correo);
    document.getElementById("mensaje").textContent = "Contacto agregado correctamente.";
    e.target.reset();
});