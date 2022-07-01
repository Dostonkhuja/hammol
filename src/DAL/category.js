import instance from "./api";

export const categoryAPI = {
    getAllCategory() {
        return instance.get('category')
            .then((res) => res)
            .catch((e) => e)
    }
}