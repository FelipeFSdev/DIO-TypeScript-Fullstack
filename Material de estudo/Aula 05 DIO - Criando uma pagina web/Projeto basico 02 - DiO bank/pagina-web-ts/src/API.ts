const account = {
    email: "felipe@email.com.br",
    password: "012",
    name: "Felipe",
    balance: 2000.00,
    id: "1"
};

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(account);
    }, 3000);
});