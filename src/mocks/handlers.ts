import { rest } from "msw";

export const handlers = [
  // Handles a GET /hello request
  rest.get("https://jsonplaceholder.typicode.com/users/1", (_req, res, ctx)=> {
    return res(ctx.status(200), ctx.json({
      id: 1,
      name: "MSW mocked name",
      username: "MSWUser",
    }))
  }),
];
