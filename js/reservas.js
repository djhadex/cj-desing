document.addEventListener('DOMContentLoaded', function() {
    const fechaReserva = document.getElementById('fechaReserva');
    const horaReserva = document.getElementById('horaReserva');
    const numeroPersonas = document.getElementById('numeroPersonas');

    // Configuración del restaurante
    const horaApertura = 12; // 12 PM
    const horaCierre = 22;   // 10 PM
    const intervaloReserva = 30; // minutos

    // Establecer la fecha mínima como hoy
    const hoy = new Date();
    fechaReserva.min = hoy.toISOString().split('T')[0];

    // Generar horas disponibles
    function generarHorasDisponibles() {
        horaReserva.innerHTML = '<option value="">Seleccione una hora</option>';
        for (let hora = horaApertura; hora < horaCierre; hora++) {
            for (let minuto = 0; minuto < 60; minuto += intervaloReserva) {
                const horaFormateada = `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}`;
                horaReserva.innerHTML += `<option value="${horaFormateada}">${horaFormateada}</option>`;
            }
        }
    }

    fechaReserva.addEventListener('change', function() {
        const fechaSeleccionada = new Date(this.value);
        if (fechaSeleccionada >= hoy) {
            generarHorasDisponibles();
            // Aquí podrías añadir lógica adicional para verificar disponibilidad real
        } else {
            horaReserva.innerHTML = '<option value="">Seleccione una fecha válida</option>';
        }
    });

    // Asegurar que el número de personas sea siempre 1 o más
    numeroPersonas.addEventListener('change', function() {
        if (this.value < 1) {
            this.value = 1;
        }
    });

    // Manejar el envío del formulario
    document.getElementById('reservaForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí iría la lógica para procesar la reserva
        alert('Reserva realizada con éxito!');
    });
});
