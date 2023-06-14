export class CategoryService {

    static async findCategories() {
        const response = await fetch('http://localhost:3000/categories');


        console.log(`Response status: ${response.status}`);

        return response.json();
    }

}