import fs from 'fs';
import CategoryService from './CategoryService.js';

async function getFileContentByPath(filePath) {
  const encoding = 'utf-8';
  const content = await fs.promises.readFile(filePath, encoding);

  return content;
}

async function performRequestedCommand(commandLineArguments, requestedCommand) {
  switch (requestedCommand) {
    case '--listarCategorias':
      return CategoryService.findCategories();

    case '--recuperarCategoriaPorId': {
      const id = commandLineArguments[3];

      return CategoryService.findCategoryById(id);
    }

    case '--inserirCategoria': {
      const filePath = commandLineArguments[3];
      const jsonCategory = await getFileContentByPath(filePath);
      const category = JSON.parse(jsonCategory);

      return CategoryService.createCategory(category);
    }

    case '--atualizarCategoria': {
      const id = commandLineArguments[3];
      const filePath = commandLineArguments[4];
      const jsonCategory = await getFileContentByPath(filePath);
      const category = JSON.parse(jsonCategory);

      return CategoryService.updateCategory(id, category);
    }

    case '--excluirCategoria': {
      const id = commandLineArguments[3];

      return CategoryService.deleteCategory(id);
    }

    default:
      throw new Error('Comando inválido');
  }
}

function printResult(resultToBePrinted, requestedCommand) {
  console.log(`\n***** Resultado do comando: "${requestedCommand}" *****\n`, 'Response data: ', resultToBePrinted);
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

processarComando(process.argv);

/** Lista de comandos para testes
 * node ./src/cli/cli.js --listarCategorias
 * node ./src/cli/cli.js --recuperarCategoriaPorId 1
 * node ./src/cli/cli.js --inserirCategoria ./src/cli/novaCategoria.json
 * node ./src/cli/cli.js --atualizarCategoria 7 ./src/cli/categoriaAtualizada.json
 * node ./src/cli/cli.js --excluirCategoria 9
 */
