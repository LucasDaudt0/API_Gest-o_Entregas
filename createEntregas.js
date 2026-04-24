async function createEntrega(motorista, veiculo, status, destino) {
    try {
        const mResponse = await fetch(`${MOTORISTAS}?nome=eq.${motorista}&select=id`, { headers: HEADERS })
        const mData = await mResponse.json()

        const vResponse = await fetch(`${VEICULOS}?modelo=eq.${veiculo}&select=id`, { headers: HEADERS })
        const vData = await vResponse.json()

        const eResponse = await fetch(`${ENTREGAS}`, {
            method: 'POST',
            headers: { ...HEADERS, 'Prefer': 'return=representation' },
            body: JSON.stringify({
                motorista_id: mData[0]?.id,
                veiculo_id: vData[0]?.id,
                status: status,
                destino: destino
            })
        })

        const eData = await eResponse.json()

        console.log(eData)

    } catch (error) {
        console.error(`Não foi possível realizar esta operação:`, error)
    }
}