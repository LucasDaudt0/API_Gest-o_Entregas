async function updateStatus(idEntrega, status) {
    try {
        const response = await fetch(`${ENTREGAS}?id=eq.${idEntrega}&select=*`, {
            method: 'PATCH',
            headers: { ...HEADERS, 'Prefer': 'return=representation' },
            body: JSON.stringify({
                status: status
            })
        })

        const data = await response.json();
        console.log('Status da Entrega Atualizado com Sucesso:', data)
    } catch (error) {
        console.error(`Não foi possível realizar esta ação:`, error)
    }
}