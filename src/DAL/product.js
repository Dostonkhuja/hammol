import instance from "./api";

export const productAPI = {
    getProduct(id) {
        return instance.get(`product/${id}`)
            .then((res) => res)
            .catch((e) =>e)
    }
}