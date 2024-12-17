import * as fs from 'fs';

interface Game {
    totalKills: number;
    players: string[];  // Usando string[] ao invés de Set<string>
    kills: Record<string, number>;
    killsByMeans: Record<string, number>;
}

export function parseLog(filePath: string): Record<string, Game> {
    const games: Record<string, Game> = {};
    let currentGame: Game | null = null;
    let gameNumber = 0;

    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.split('\n');

    for (const line of lines) {
        // Identificar o início de uma nova partida
        if (line.includes('InitGame')) {
            if (currentGame) {
                games[`game_${gameNumber}`] = currentGame;
            }
            gameNumber++;
            currentGame = {
                totalKills: 0,
                players: [],  // Mudando para um array vazio
                kills: {},
                killsByMeans: {}
            };
        }

        // Contar kills
        if (line.includes('Kill:')) {
            currentGame!.totalKills++;

            const match = line.match(/Kill: \d+ (\d+) (\d+): (.*?) killed (.*?) by (\w+)/);
            if (match) {
                const [, , , killer, victim, deathCause] = match;

                if (killer === "<world>") {
                    currentGame!.kills[victim] = (currentGame!.kills[victim] || 0) - 1;
                } else {
                    currentGame!.kills[killer] = (currentGame!.kills[killer] || 0) + 1;
                    currentGame!.players.push(killer);  // Usando push para adicionar ao array
                }
                currentGame!.players.push(victim);  // Usando push para adicionar ao array
                currentGame!.killsByMeans[deathCause] = (currentGame!.killsByMeans[deathCause] || 0) + 1;
            }
        }
    }

    // Salvar o último jogo
    if (currentGame) {
        games[`game_${gameNumber}`] = currentGame;
    }

    return games;
}
