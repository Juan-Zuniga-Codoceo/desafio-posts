async function getPosts() {
    try {
        
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        
        
        const posts = await respuesta.json();
        
        
        const div = document.querySelector('#post-data');
        
        
        div.innerHTML = '';
        
       
        const lista = document.createElement('ul');
        div.appendChild(lista);
        
        
        for (let post of posts) {
            const item = document.createElement('li');
            
            item.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
            
            lista.appendChild(item);
            
            const lineBreak = document.createElement('br');
            lista.appendChild(lineBreak);
        }
    } catch (error) {
        console.error('Ha ocurrido un error:', error);
    }
}


