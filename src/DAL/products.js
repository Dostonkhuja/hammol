import instance from "./api";

export const productsAPI = {
    getAllProducts(data) {
        return instance.get(`product?limit=${data.limit}&offset=${data.offset}`)
            .then((res) => res)
            .catch((e) =>e)
    },
    getProductsCategory(data) {
        return instance.get(`product?category=${data.category}&limit=${data.limit}&offset=${data.offset}`)
            .then((res) => res)
            .catch((e) =>e)
    },
    getSearchItem(data) {
        return instance.get(`product?name=${data.txt}&limit=${data.limit}&offset=${data.offset}`)
            .then((res) => res)
            .catch((e) =>e)
    }
}