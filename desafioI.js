async function getPosts() {
    try {
        // Realiza la consulta a la API
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Verifica si la respuesta es correcta
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        
        // Convierte la respuesta a JSON
        const posts = await respuesta.json();
        
        // Selecciona el elemento donde se mostrarán los posts
        const div = document.querySelector('#post-data');
        
        // Limpia el div
        div.innerHTML = '';
        
        // Crea una lista desordenada
        const lista = document.createElement('ul');
        div.appendChild(lista);
        
        // Añade cada post a la lista
        for (let post of posts) {
            const item = document.createElement('li');
            
            // Agrega el título en negrita y el cuerpo del post al elemento de lista
            item.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
            
            lista.appendChild(item);
            
            // Agrega un salto de línea después de cada post
            const lineBreak = document.createElement('br');
            lista.appendChild(lineBreak);
        }
    } catch (error) {
        console.error('Ha ocurrido un error:', error);
    }
}


