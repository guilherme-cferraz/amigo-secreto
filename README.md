# 🎁 Amigo Secreto — Sorteador Automático

Projeto simples em **JavaScript** que permite criar uma lista de amigos e realizar automaticamente o sorteio de *Amigo Secreto*.  
O layout foi pré-fornecido, e toda a lógica do sorteio, adição de nomes e reinicialização foi desenvolvida em JavaScript.

---

## 🖼️ Preview

https://amigo-secreto-murex-iota.vercel.app/

---

## ✨ Funcionalidades

- **Adicionar amigo**  
  O usuário digita um nome e adiciona à lista de participantes.

- **Listagem dinâmica**  
  Os nomes são exibidos em tempo real conforme são adicionados.

- **Sorteio automático**  
  O sistema embaralha a lista e gera pares no formato:  
  `Amigo A → Amigo B`

- **Evita campo vazio**  
  Caso o usuário tente adicionar sem digitar um nome, aparece um alerta.

- **Reiniciar lista**  
  Limpa todos os nomes adicionados e a lista de sorteio.

---

## 🧠 Como funciona o sorteio

- A lista de amigos é embaralhada usando um **algoritmo de embaralhamento Fisher-Yates**.
- Depois, os pares são gerados ligando cada pessoa ao próximo nome da lista.
- O último da lista presenteia o primeiro — formando um ciclo válido.

Exemplo de saída:

Maria → João  
João → Pedro  
Pedro → Ana  
Ana → Maria  

---
