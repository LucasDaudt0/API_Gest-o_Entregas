const SUPABASE_URL = '<SUA_URL_AQUI>';
const SUPABASE_KEY = '<SUA_CHAVE_AQUI>';

const MOTORISTAS = `${SUPABASE_URL}/rest/v1/motoristas`;
const ENTREGAS = `${SUPABASE_URL}/rest/v1/entregas`;
const VEICULOS = `${SUPABASE_URL}/rest/v1/veiculos`;

const HEADERS = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json'
};