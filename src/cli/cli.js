import { CategoryService } from "./CategoryService.js";
import fs from "fs";

const commandLineArguments = process.argv;

async function getFileContentByPath(filePath) {
    const encoding = 'utf-8';
    const content = await fs.promises.readFile(filePath, encoding);

    return content;
}

async function performRequestedCommand(commandLineArguments, requestedCommand) {
    switch (requestedCommand) {
        case "--listarCategorias":
            // node ./src/cli/cli.js --listarCategorias
            return await CategoryService.findCategories();

        case "--recuperarCategoriaPorId":
            // node ./src/cli/cli.js --recuperarCategoriaPorId 1
            var id = commandLineArguments[3];

            return await CategoryService.findCategoryById(id);

        case "--inserirCategoria":
            // node ./src/cli/cli.js --inserirCategoria ./src/cli/novaCategoria.json
            var filePath = commandLineArguments[3];
            var jsonCategory = await getFileContentByPath(filePath);
            var category = JSON.parse(jsonCategory);

            return await CategoryService.createCategory(category);

        case "--atualizarCategoria":
            // node ./src/cli/cli.js --atualizarCategoria 7 ./src/cli/categoriaAtualizada.json
            var id = commandLineArguments[3];
            var filePath = commandLineArguments[4];
            var jsonCategory = await getFileContentByPath(filePath);
            var category = JSON.parse(jsonCategory);

            return await CategoryService.updateCategory(id, category);

        case "--excluirCategoria":
            // node ./src/cli/cli.js --excluirCategoria 9
            var id = commandLineArguments[3];

            return await CategoryService.deleteCategory(id);

        default:
            throw new Error("Comando inválido");
    }
}

function printResult(resultToBePrinted, requestedCommand) {
    console.log(`\n***** Resultado do comando: "${requestedCommand}" *****\n`, `Response data: `, resultToBePrinted);
}

async function processarComando(commandLineArguments) {
    const requestedCommand = commandLineArguments[2];

    try {
        const result = await performRequestedCommand(commandLineArguments, requestedCommand);

        printResult(result, requestedCommand);
    } catch (error) {
        console.log(`Erro: ${error.message}`);
    }
}


processarComando(commandLineArguments);