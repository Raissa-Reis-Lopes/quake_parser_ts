import * as readlineSync from 'readline-sync';
import { parseLog } from './parser';
import { printMatchReport } from './report';

const logPath = 'logs/qgames.log';
const games = parseLog(logPath);

function printMenu(): void {
    console.log('\n===== MENU DE RELATÓRIOS =====');
    console.log('1 - Relatório Completo (Todos os jogos)');
    console.log('2 - Relatório de um Jogo Específico');
    console.log('3 - Relatório de Jogos sem Mortes');
    console.log('4 - Relatório de Kills por Jogador');
    console.log('5 - Relatório de Jogos Ordenados por Número de Kills');
    console.log('6 - Sair');
    console.log('==============================');
}

function reportSpecificGame(): void {
    const gameChoice = readlineSync.question('Digite o nome do jogo (ex: game_1): ');
    if (games[gameChoice]) {
        console.log(`\nRelatório para ${gameChoice}:`);
        printMatchReport({ [gameChoice]: games[gameChoice] });
    } else {
        console.log('Jogo não encontrado!');
    }
}

function reportGamesWithoutKills(): void {
    const noKillGames = Object.fromEntries(
        Object.entries(games).filter(([_, data]) => data.totalKills === 0)
    );
    if (Object.keys(noKillGames).length > 0) {
        printMatchReport(noKillGames);
    } else {
        console.log('Não existem jogos sem mortes.');
    }
}

function reportKillsByPlayer(): void {
    const playerKills: Record<string, number> = {};
    for (const game of Object.values(games)) {
        for (const [player, kills] of Object.entries(game.kills)) {
            playerKills[player] = (playerKills[player] || 0) + kills;
        }
    }

    const sortedKills = Object.entries(playerKills)
        .sort((a, b) => b[1] - a[1]);

    console.log('\nRelatório de Kills por Jogador:');
    sortedKills.forEach(([player, kills]) => {
        console.log(`${player}: ${kills} kills`);
    });
}

function reportGamesSortedByKills(): void {
    const sortedGames = Object.entries(games)
        .sort(([, a], [, b]) => b.totalKills - a.totalKills);

    console.log('\nRelatório de Jogos Ordenados por Número de Kills:');
    sortedGames.forEach(([gameName, data]) => {
        console.log(`${gameName}: ${data.totalKills} kills`);
    });
}

function main(): void {
    while (true) {
        printMenu();
        const choice = readlineSync.question('Escolha uma opção: ');

        switch (choice) {
            case '1':
                printMatchReport(games);
                break;
            case '2':
                reportSpecificGame();
                break;
            case '3':
                reportGamesWithoutKills();
                break;
            case '4':
                reportKillsByPlayer();
                break;
            case '5':
                reportGamesSortedByKills();
                break;
            case '6':
                console.log('Saindo...');
                return;
            default:
                console.log('Opção inválida!');
        }
    }
}

main();
