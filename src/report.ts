interface Game {
    totalKills: number;
    players: string[];
    kills: Record<string, number>;
    killsByMeans: Record<string, number>;
}

export function printMatchReport(games: Record<string, Game>): void {
    for (const [gameName, data] of Object.entries(games)) {
        console.log(`${gameName}:`);
        console.log(`  Total de Kills: ${data.totalKills}`);
        console.log(`  Jogadores: ${data.players.join(', ')}`);
        console.log('  Kills por jogador:');
        for (const [player, kills] of Object.entries(data.kills)) {
            console.log(`    ${player}: ${kills}`);
        }
        console.log('  Mortes por causa:');
        for (const [cause, count] of Object.entries(data.killsByMeans)) {
            console.log(`    ${cause}: ${count}`);
        }
        console.log('-'.repeat(30));
    }
}
