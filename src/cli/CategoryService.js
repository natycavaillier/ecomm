export class CategoryService {

    static async findCategories() {
        const response = await fetch('http://localhost:3000/categories');


        console.log(`Response status: ${response.status}`);

        if(response.status === 404) throw new Error('Nenhum categoria foi encontrada');

        return response.json();
    }

    static async findCategoryById(id) {

        const response = await fetch(`http://localhost:3000/categories/${id}`);


        console.log(`Response status: ${response.status}`);

        if(response.status === 404) throw new Error('Categoria não encontrada');

        return response.json();
    }

}