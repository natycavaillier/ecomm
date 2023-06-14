import { CategoryService } from "./CategoryService.js";

const commandLineArguments = process.argv;


async function performRequestedCommand(command, additionalParameter = null) {
    switch (command) {
        case '--listarCategorias':
            // node ./src/cli/cli.js --listarCategorias
            return await CategoryService.findCategories();
        case '--recuperarCategoriaPorId':
            // node ./src/cli/cli.js --recuperarCategoriaPorId 1
            const id = additionalParameter;
            return await CategoryService.findCategoryById(id);
        default:
            throw new Error('Comando inválido');
    }
}

function printResult(resultToBePrinted, requestedCommand) {
    console.log(`\n***** Resultado do comando: '${requestedCommand}' *****\n`, resultToBePrinted);
}

async function processarComando(commandLineArguments) {
    const requestedCommand = commandLineArguments[2];
    const additionalParameter = commandLineArguments[3];

    try {
        const result = await performRequestedCommand(requestedCommand, additionalParameter);

        printResult(result, requestedCommand);
    } catch (error) {
        console.log(`Erro: ${error.message}`);
    }
}


processarComando(commandLineArguments);