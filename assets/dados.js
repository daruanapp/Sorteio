// Lista fixa de participantes e seus tokens de acesso.
// A ordem dos grupos define a rotação semanal — não altere sem querer refazer o ciclo.
const GRUPOS = {
  mulheres: [
    { nome: "Daiane", token: "oudllfouregv" },
    { nome: "Karen", token: "zzfxwmfxjx5d" },
    { nome: "Rebeca", token: "myymdtdv7ria" },
    { nome: "Camila", token: "bm71a9rsya0l" },
    { nome: "Ariane", token: "qop3zwkg25af" },
    { nome: "Gabi", token: "lnz04j8zhk6d" },
    { nome: "Raquel", token: "a4swrw2fa2jr" },
  ],
  homens: [
    { nome: "Daruan", token: "s89y9nz3d3mm" },
    { nome: "Arthur", token: "ozfk2b6zsea5" },
    { nome: "Alan", token: "eofvna5iqgt0" },
    { nome: "João", token: "x41gp8bpfz94" },
    { nome: "Doni", token: "i4nsuy2gqmd9" },
    { nome: "Diego", token: "ys2yrayn81gz" },
    { nome: "Luiz", token: "2c44d1n7jkk4" },
    { nome: "Gustavo", token: "awevtts0h7rw" },
  ],
};

const TOKEN_ADMIN = "bd08a986a75afc01a270";

// Segunda-feira que marca a semana 0 do sorteio (horário de Brasília).
const SEMANA_ZERO = "2026-01-05";
