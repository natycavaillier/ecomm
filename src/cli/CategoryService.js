const categoryBaseEndpoint = "http://localhost:3000/categories";

export class CategoryService {

    static async findCategories() {
        const response = await fetch(`${categoryBaseEndpoint}`);


        console.log(`Response status: ${response.status}`);

        if (response.status === 404) throw new Error('Nenhum categoria foi encontrada');

        return response.json();
    }

    static async findCategoryById(id) {
        const response = await fetch(`${categoryBaseEndpoint}/${id}`);


        console.log(`Response status: ${response.status}`);

        if (response.status === 404) throw new Error('Categoria não encontrada');

        return response.json();
    }

    static async createCategory(category) {
        const response = await fetch(`${categoryBaseEndpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(category)
        });

        console.log(`Response status: ${response.status}`);

        if (response.status === 400) throw new Error('Erro ao criar categoria');

        return response.json();
    }

    static async updateCategory(id, newCategory) {
        const response = await fetch(`${categoryBaseEndpoint}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCategory)
        });

        console.log(`Response status: ${response.status}`);

        if (response.status === 404) throw new Error('Categoria não encontrada');

        return response.json();
    }

    static async deleteCategory(id) {
        const response = await fetch(`${categoryBaseEndpoint}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });

        console.log(`Response status: ${response.status}`);

        if (response.status === 404) throw new Error('Categoria não encontrada');

        return response.json();
    }
}