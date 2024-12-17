# Quake Log Parser (English version)

This project implements a log parser for the Quake 3 Arena server, grouping match data, collecting information about kills, players, and means of death, and generating detailed reports.

## 📋 Features

1. **Log Reading and Parsing**
   - Reads the Quake 3 Arena server log file.
   - Groups data for each individual match.
   - Identifies players, kills, and causes of death.

2. **Reports**
   - Full report with data from all matches.
   - Report for a specific match.
   - Report of matches with no kills.
   - Player kills report.
   - Matches sorted by total kills.

3. **Death Causes Report**
   - Displays death causes grouped and counted per match.

---

## 🚀 How to Run the Project

### Prerequisites

- Node.js installed (version 14 or higher).
- `npm` package manager.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Raissa-Reis-Lopes/quake_parser_ts.git
   cd quake_parser_ts
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Make sure the log file is in the correct path (`logs/qgames.log`).

### Running the Program

Run the program:
```bash
npm start
```

The interactive menu will be displayed in the terminal, allowing you to choose which report to generate.

---

## 📂 Project Structure

```bash
quake-log-parser/
├── logs/
│   └── qgames.log             # Quake 3 Arena log file
├── src/
│   ├── parser.ts              # Log parser (collects and organizes data)
│   ├── report.ts              # Report generation
│   ├── main.ts                # Main entry point
├── package.json               # Project dependency manager
├── tsconfig.json              # TypeScript compiler configuration
└── README.md                  # Project documentation
```

---

## 🧩 Data Structure

Log data is grouped in the following format:

```json
{
  "game_1": {
    "totalKills": 45,
    "players": ["Dono da bola", "Isgalamido", "Zeh"],
    "kills": {
      "Dono da bola": 5,
      "Isgalamido": 18,
      "Zeh": 20
    },
    "killsByMeans": {
      "MOD_SHOTGUN": 10,
      "MOD_RAILGUN": 2,
      "MOD_TRIGGER_HURT": 1
    }
  }
}
```

### Field Details
- `totalKills`: Total deaths in the match (including <world> kills).
- `players`: List of players who participated in the match.
- `kills`: Number of kills per player (<world> kills subtract 1 point from the killed player).
- `killsByMeans`: Number of deaths grouped by cause (e.g., MOD_SHOTGUN, MOD_RAILGUN).

---

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime environment.
- **TypeScript**: Typed superset of JavaScript.
- **readline-sync**: Library for terminal user interaction.
- **fs**: Node.js module for file reading.

---

## 🔍 Usage Examples

### Interactive Menu

```bash
===== REPORT MENU =====
1 - Full Report (All matches)
2 - Specific Match Report
3 - Matches with No Kills
4 - Player Kills Report
5 - Matches Sorted by Total Kills
6 - Exit
========================
Choose an option:
```

### Match Report
**Example:**
```
game_1:
  Total Kills: 45
  Players: Dono da bola, Isgalamido, Zeh
  Player Kills:
    Dono da bola: 5
    Isgalamido: 18
    Zeh: 20
  Death Causes:
    MOD_SHOTGUN: 10
    MOD_RAILGUN: 2
    MOD_TRIGGER_HURT: 1
------------------------------
```

---

## 📄 License

This project is licensed under the MIT License. Feel free to use and adapt it as needed.

---

## 🤝 Contribution

Contributions are welcome! If you'd like to contribute:
1. Fork the project.
2. Create a branch with your feature or fix.
3. Open a Pull Request.

---

🎮 Have fun exploring Quake 3 Arena match data! 🚀



___

# Quake Log Parser (Versão em Português)

Este projeto implementa um parser de logs do servidor Quake 3 Arena, agrupando dados de cada partida, coletando informações sobre mortes, jogadores e meios de morte, e apresentando relatórios detalhados.

## 📋 Funcionalidades

1. **Leitura e Parsing do Log**
   - Lê o arquivo de log do servidor Quake 3 Arena.
   - Agrupa os dados de cada partida individualmente.
   - Identifica jogadores, mortes e causas de mortes.

2. **Relatórios**
   - Relatório completo com dados de todas as partidas.
   - Relatório de uma partida específica.
   - Relatório de partidas sem mortes.
   - Relatório de kills por jogador.
   - Relatório de partidas ordenadas pelo número total de kills.

3. **Relatório de Causas de Mortes**
   - Apresenta as causas de morte agrupadas e contabilizadas por partida.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js instalado (versão 14 ou superior).
- Gerenciador de pacotes `npm`.

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Raissa-Reis-Lopes/quake_parser_ts.git
   cd quake_parser_ts
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Certifique-se de ter o arquivo de log no caminho correto (`logs/qgames.log`).

### Execução

Execute o programa:
```bash
npm start
```

O menu interativo será exibido no terminal, permitindo escolher qual relatório gerar.

---

## 📂 Estrutura do Projeto

```bash
quake-log-parser/
├── logs/
│   └── qgames.log            # Arquivo de log do Quake 3 Arena
├── src/
│   ├── parser.ts             # Parser do log (coleta e organiza os dados)
│   ├── report.ts             # Geração dos relatórios
│   ├── main.ts               # Ponto de entrada principal
├── package.json              # Gerenciador de dependências do projeto
├── tsconfig.json             # Configuração do compilador TypeScript 
└── README.md                 # Documentação do projeto
```

---

## 🧩 Estrutura dos Dados

Os dados do log são agrupados no seguinte formato:

```json
{
  "game_1": {
    "totalKills": 45,
    "players": ["Dono da bola", "Isgalamido", "Zeh"],
    "kills": {
      "Dono da bola": 5,
      "Isgalamido": 18,
      "Zeh": 20
    },
    "killsByMeans": {
      "MOD_SHOTGUN": 10,
      "MOD_RAILGUN": 2,
      "MOD_TRIGGER_HURT": 1
    }
  }
}
```

### Detalhes dos Campos
- `totalKills`: Total de mortes na partida (incluindo <world> kills).
- `players`: Lista de jogadores que participaram da partida.
- `kills`: Número de kills por jogador (as mortes causadas pelo `<world>` subtraem 1 ponto do jogador morto).
- `killsByMeans`: Número de mortes agrupadas pela causa (ex.: MOD_SHOTGUN, MOD_RAILGUN).

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **TypeScript**: Superset tipado do JavaScript.
- **readline-sync**: Biblioteca para interações com o usuário no terminal.
- **fs**: Módulo do Node.js para leitura de arquivos.

---

## 🔍 Exemplos de Uso

### Menu Interativo

```bash
===== MENU DE RELATÓRIOS =====
1 - Relatório Completo (Todos os jogos)
2 - Relatório de um Jogo Específico
3 - Relatório de Jogos sem Mortes
4 - Relatório de Kills por Jogador
5 - Relatório de Jogos Ordenados por Número de Kills
6 - Sair
==============================
Escolha uma opção:
```

### Relatório de uma Partida
**Exemplo:**
```
game_1:
  Total de Kills: 45
  Jogadores: Dono da bola, Isgalamido, Zeh
  Kills por jogador:
    Dono da bola: 5
    Isgalamido: 18
    Zeh: 20
  Mortes por causa:
    MOD_SHOTGUN: 10
    MOD_RAILGUN: 2
    MOD_TRIGGER_HURT: 1
------------------------------
```

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Sinta-se livre para utilizá-lo e adaptá-lo conforme necessário.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Caso queira contribuir:
1. Faça um fork do projeto.
2. Crie uma branch com sua feature ou correção.
3. Abra um Pull Request.

---

🎮 Divirta-se explorando os dados das partidas do Quake 3 Arena! 🚀
