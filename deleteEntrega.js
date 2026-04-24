async function deleteEntrega(idEntrega) {
    try {
        const response = await fetch(`${ENTREGAS}?id=eq.${idEntrega}&select=*`, {
            method: 'DELETE',
            headers: { ...HEADERS, 'Prefer': 'return=representation' }
        })

        const data = await response.json();

        if (data[0]?.id != undefined) {
            console.log(`Entrega removida com sucesso:`, data)
        } else {
            console.log(`Id de entrega inexistente.`)
        }

    } catch (error) {
        console.error(`Não foi possível realizar esta ação:`, error)
    }
}