import swaggerJSDoc from "swagger-jsdoc";

export default swaggerJSDoc({
    definition: {
        openapi: "3.0.0",
        info: { title: "El-Hajjam API", version: "1.0.0" },
        servers: [{ url: "http://localhost:3000/api/v1" }],
        components: {
            securitySchemes: {
                bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" }
            }
        },
        security: [{ bearerAuth: [] }],
    },
    apis: ["./routes/*.js"],
});