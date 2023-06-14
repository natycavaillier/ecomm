import { CategoryService } from "./CategoryService.js";

const path = process.argv;


async function performRequestedCommand(command) {
    switch (command) {
        case '--listarCategorias':
            return await CategoryService.findCategories();
        default:
            return 'Comando inválido';
    }
}

function printResult(resultToBePrinted, requestedCommand){
    console.log(`\n***** Resultado do comando: '${requestedCommand}' *****\n`, resultToBePrinted);
}

async function processarComando(commandLineArguments) {
    const requestedCommand = commandLineArguments[2];

    const result = await performRequestedCommand(requestedCommand);

    printResult(result, requestedCommand);
}


processarComando(path);