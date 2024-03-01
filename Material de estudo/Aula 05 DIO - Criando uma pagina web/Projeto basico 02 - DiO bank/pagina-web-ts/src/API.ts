const account = {
    email: "felipe@email.com.br",
    password: "012",
    name: "Felipe"
};

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(account);
    }, 3000);
});