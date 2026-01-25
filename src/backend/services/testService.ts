export const getMessage = () => {
    return {
        message: "Hello from the Backend! 🚀",
        timestamp: new Date().toISOString(),
        status: "success"
    };
};
