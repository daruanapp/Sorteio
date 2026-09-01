# Cuidar Uns dos Outros — Ministério de Louvor · Paz Church Embu-Guaçu

> "Para que não haja divisão no corpo, mas, antes, tenham os membros igual cuidado uns pelos
> outros." — 1 Coríntios 12:25-26

Toda semana cada integrante do ministério tira uma pessoa (homens com homens, mulheres com
mulheres) para cuidar de forma especial: orar por ela, mandar mensagem perguntando como está e
se tem algum pedido de oração.

Site estático: cada pessoa abre o link individual dela e vê quem tirou naquela semana.
O sorteado muda automaticamente toda **segunda-feira, 00h (horário de Brasília)**.

Identidade visual (azul-marinho, degradê azul-claro e logo) tirada dos materiais da igreja.

## Regras garantidas pelo algoritmo

- Ninguém tira a si mesmo.
- Ninguém é sorteado por duas pessoas na mesma semana.
- Mulheres só tiram mulheres, homens só tiram homens (o sorteio roda dentro de cada grupo).
- Um mesmo par não se repete até o ciclo fechar: 6 semanas no grupo das mulheres (7 pessoas)
  e 7 semanas no grupo dos homens (8 pessoas).

Como funciona: cada grupo tem uma ordem fixa; na semana `W` a pessoa da posição `i` tira a da
posição `(i + deslocamento) % N`, com `deslocamento` girando entre `1` e `N-1`. Não há sorteio
aleatório em tempo de execução, então todo mundo vê sempre o mesmo resultado da semana.

## Páginas

| Página | Para quem | Endereço |
| --- | --- | --- |
| `index.html?t=TOKEN` | cada participante | link individual |
| `links.html` | você | lista todos os links para distribuir |
| `admin.html?k=TOKEN_ADMIN` | você | quem tirou quem na semana (`&semana=N` para outra semana) |

Os tokens ficam em `assets/dados.js`.

## Publicando no GitHub Pages

Settings → Pages → Source: `Deploy from a branch` → branch da publicação, pasta `/ (root)`.
Depois abra `https://SEU-USUARIO.github.io/Sorteio/links.html` para pegar os links.

Como o site é estático, quem entender de JavaScript consegue ler `assets/dados.js` e descobrir
os sorteios dos outros. Para o uso pretendido (confiança entre amigos) isso é suficiente; se
precisar de sigilo real, o cálculo teria que ficar num servidor.

## Alterando participantes

Edite `assets/dados.js`. Trocar a ordem ou o tamanho de um grupo muda todos os sorteios
seguintes. `SEMANA_ZERO` define a segunda-feira que conta como semana 0.
