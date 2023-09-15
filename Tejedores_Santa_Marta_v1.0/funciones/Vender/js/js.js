document.addEventListener('DOMContentLoaded', function () {
    const productoForm = document.getElementById('producto-form');
    const imagenInput = document.getElementById('imagen');
    const imagenPreview = document.getElementById('imagen-preview');

    // Creamos un objeto de FileReader
    const reader = new FileReader();

    // Escuchamos el evento 'load' del FileReader
    reader.onload = function (e) {
        // Creamos un elemento <img> para mostrar la vista previa
        const previewImage = document.createElement('img');
        previewImage.src = e.target.result;
        previewImage.style.maxWidth = '100%'; // Ajustamos el tamaño de la imagen al cuadro

        // Eliminamos cualquier vista previa anterior
        imagenPreview.innerHTML = '';
        // Agregamos la nueva vista previa al cuadro de vista previa
        imagenPreview.appendChild(previewImage);
    };

    // Escuchamos el evento 'change' del input de imagen
    imagenInput.addEventListener('change', function () {
        const file = imagenInput.files[0];
        if (file) {
            // Leemos el archivo seleccionado
            reader.readAsDataURL(file);
        } else {
            // Si no se selecciona un archivo, eliminamos la vista previa
            imagenPreview.innerHTML = '';
        }
    });

    productoForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtener los valores de los campos del formulario
        const nombre = document.getElementById('nombre').value;
        const precio = document.getElementById('precio').value;
        const descripcion = document.getElementById('descripcion').value;
        const genero = document.getElementById('genero').value;

        // Crear un objeto FormData para enviar los datos del formulario, incluida la imagen
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('precio', precio);
        formData.append('descripcion', descripcion);
        formData.append('genero', genero);
        formData.append('imagen', imagenInput.files[0]);

        // Aquí puedes enviar los datos al servidor utilizando una petición HTTP,
        // como una solicitud POST a través de XMLHttpRequest o Fetch API.

        // Por ejemplo, utilizando Fetch API:
        /*
        fetch('url-del-servidor', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            // Manejar la respuesta del servidor si es necesario
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        */
    });
});
