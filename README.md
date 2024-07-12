# Products RAG Chat

This project is build with QvikChat. It enables you to run a server that exposes an endpoint where user queries related to the products data can be sent. This endpoint is configured with support for **chat history**, **caching** and **retreival augmented generation (RAG)**.

The test products data is stored in `src/data/knowledge-bases` directory. The `product-recommendation` endpoint is configured in the file `src/endpoints/products-endpoints.ts`.

## Setup

To clone the respository:

```bash copy
git clone https://github.com/pranav-kural/products-rag-chat.git
```

### Setup Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```env copy
GOOGLE_GENAI_API_KEY=
```

Alternatively, you can copy the `.env.tmp` file or rename it to `.env` and fill in the values.

### Install Dependencies

You can install the dependencies using the following command:

```bash copy
pnpm install
```

Or, you can use `npm` if pnpm not installed:

```bash copy
npm install
```

## Running the Project

To compile the source code and start the server in one command, you can run:

```bash copy
pnpm dev
```

This should start the server on `http://127.0.0.1:3400` by default.

### Generate Responses

If using the terminal, you can send query to the configured endpoint using the `curl` command to send POST requests:

```bash copy
curl -X POST "http://127.0.0.1:3400/product-recommendation" -H "Content-Type: application/json" -d '{ "data": { "query": "Could you suggest a shoe that mimics the shape of my foot?" } }'
```

Above example points to `http://127.0.0.1:3400`. You can change this port and host depending on where you are running the server and on which port.

You could also use the [Genkit Developer UI](#genkit-developer-ui) to test the endpoints.

### Testing

The starter template comes with Jest pre-configured to run your tests, and some tests predefined in the `src/tests` directory. You can run the tests using the following command:

```bash
npm run test # or pnpm test
```

Please ensure you have the environment variables set up before running the tests.

By default, Jest is configured to test the source code in the `src` directory. You can change the configuration in the `jest.config.js` file, along with any other Jest configurations you may want to change.

### Genkit Developer UI

You can run the Genkit developer UI to test the endpoints. Testing the endpoints using a graphical interface is probably the easiest way to get started. You can know more about the Genkit Developer UI [here](https://firebase.google.com/docs/genkit/devtools#genkit_developer_ui).

Start the Genkit developer UI:

```bash copy
npx genkit start
```

OR, you can install the Genkit CLI globally:

```bash copy
npm i -g genkit
```

Then start the Genkit developer UI:

```bash copy
genkit start
```

In the Genkit Developer UI, you should be able to see `product-recommendation` in the Flows section on the left sidebar. You can enter any test query and click the Run button to generate a response.

## Features

This project comes pre-configured with the following features:

- **QvikChat**: QvikChat installed and configured to start serving chat endpoints.
- **TypeScript**: TypeScript to allow you to write type-safe code efficiently.
- **ESLint**: ESLint to enforce code quality and consistency.
- **Prettier**: Prettier to format your code automatically and ensure consistent code style.
- **Jest**: Jest to run your tests and ensure your code works as expected.
- **GitHub Actions**: GitHub Actions to run your tests and lint your code automatically on every push.
- **SWC**: For faster and more efficient TypeScript compilation.
- **PNPM**: PNPM to manage your dependencies efficiently.
