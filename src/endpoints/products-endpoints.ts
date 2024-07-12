import { defineChatEndpoint } from "@oconva/qvikchat/endpoints";
import { InMemoryChatHistoryStore } from "@oconva/qvikchat/history";
import { InMemoryCacheStore } from "@oconva/qvikchat/cache";

// Chat endpoints related to products
export const defineProductsEndpoints = () => {
  /**
   * Product recommendations endpoint with support for RAG, history and cache.
   *
   * If testing from terminal, can use the following command:
   * curl -X POST "http://127.0.0.1:3400/product-recommendation" -H "Content-Type: application/json" -d '{"data": { "query": "I am looking for a loose-fitting hoodie, black color" } }'
   *
   * For above example, update the port number to the one where the server is running.
   */
  defineChatEndpoint({
    endpoint: "product-recommendation",
    topic: "product recommendation",
    enableRAG: true,
    retrieverConfig: {
      dataType: "csv",
      filePath: "src/data/knowledge-bases/adidas-products-test-data.csv",
      generateEmbeddings: true,
      retrievalOptions: {
        k: 10, // number of matching results to return
      },
    },
    enableChatHistory: true,
    chatHistoryStore: new InMemoryChatHistoryStore(),
    enableCache: true,
    cacheStore: new InMemoryCacheStore({
      cacheQueryAfterThreshold: 2, // cache response after same query is made 2 times
    }),
  });
};
