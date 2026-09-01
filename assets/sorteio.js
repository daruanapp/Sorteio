// Lógica do sorteio semanal.
//
// Cada grupo tem N pessoas numa ordem fixa. Na semana W, a pessoa da posição i
// tira a pessoa da posição (i + deslocamento) % N, com deslocamento entre 1 e N-1.
// Isso garante, por construção:
//   - ninguém tira a si mesmo (deslocamento nunca é 0);
//   - ninguém é sorteado por duas pessoas na mesma semana (a função é uma bijeção);
//   - grupos nunca se misturam (o sorteio acontece dentro de cada lista);
//   - só repete um par depois de N-1 semanas, quando o ciclo fecha.

const MS_POR_SEMANA = 7 * 24 * 60 * 60 * 1000;

// Data "de hoje" no fuso de Brasília, como meia-noite UTC do mesmo dia civil.
function hojeBrasilia(agora = new Date()) {
  const partes = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(agora);
  return new Date(partes + "T00:00:00Z");
}

// Segunda-feira da semana corrente (a virada acontece toda segunda, 00h de Brasília).
function segundaDaSemana(data) {
  const diaDaSemana = (data.getUTCDay() + 6) % 7; // 0 = segunda
  return new Date(data.getTime() - diaDaSemana * 24 * 60 * 60 * 1000);
}

function numeroDaSemana(agora = new Date()) {
  const inicio = segundaDaSemana(hojeBrasilia(agora));
  const zero = segundaDaSemana(new Date(SEMANA_ZERO + "T00:00:00Z"));
  return Math.round((inicio - zero) / MS_POR_SEMANA);
}

function proximaSegunda(agora = new Date()) {
  const inicio = segundaDaSemana(hojeBrasilia(agora));
  return new Date(inicio.getTime() + MS_POR_SEMANA);
}

// Pares "quem tira quem" de um grupo numa dada semana.
function sorteioDoGrupo(pessoas, semana) {
  const n = pessoas.length;
  // Módulo positivo: funciona também para semanas anteriores à semana zero.
  const deslocamento = 1 + (((semana % (n - 1)) + (n - 1)) % (n - 1));
  return pessoas.map((pessoa, i) => ({
    de: pessoa,
    para: pessoas[(i + deslocamento) % n],
  }));
}

function buscarPorToken(token) {
  for (const [grupo, pessoas] of Object.entries(GRUPOS)) {
    const indice = pessoas.findIndex((p) => p.token === token);
    if (indice !== -1) return { grupo, pessoas, indice, pessoa: pessoas[indice] };
  }
  return null;
}

function formatarData(data) {
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: "UTC",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(data);
}
