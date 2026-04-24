async function readEntregas(status) {
    try {
        if (status) {
            const response = await fetch(`${ENTREGAS}?status=eq.${status}&select=*`, { headers: HEADERS });
            const data = await response.json();


            if (data.length === 0) {
                console.log(`Id de entrega inexistente.`)
            } else {
                console.log(`Entrega encontrada:`, data)
            }
        } else {
            const response = await fetch(`${ENTREGAS}?select=*`, { headers: HEADERS });
            const data = await response.json();

            console.log(data)
        }
    } catch (error) {
        console.error(`Não foi possível realizar esta ação:`, error)
    }
}