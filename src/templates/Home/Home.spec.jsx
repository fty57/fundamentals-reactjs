import rest from "msw/rest";
import setupServer from "msw/node";
import {
  render,
  screen,
  userEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Home from ".";

const handlers = [
  rest.get(
    "https://jsonplaceholder.typicode.com/posts",
    async (req, res, ctx) => {
      console.log("A chamada foi interceptada");
      return res(
        ctx.json([
          {
            userId: 1,
            id: 1,
            title: "title 1",
            body: "body 1",
          },
          {
            userId: 2,
            id: 2,
            title: "title 2",
            body: "body 2",
          },
          {
            userId: 3,
            id: 3,
            title: "title 3",
            body: "body 3",
          },
        ])
      );
    }
  ),
];

const server = setupServer(...handlers);

describe("<Home />", () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
  });

  it("should render search, posts and load more", async () => {
    render(<Home />);
    const noMorePosts = screen.getByText("Não existem posts");

    expect.assertions(3);

    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getAllByPlaceholderText(/type your search/i);
    expect(search).toBeInTheDocument();

    const images = screen.getAllByRole("img", { name: /title/i });
    expect(images).toHaveLength(2);

    const button = screen.getByRole("button", { name: /load more posts/i });
    expect(button).toBeInTheDocument();
  });

  it("should search for posts", async () => {
    render(<Home />);
    const noMorePosts = screen.getByText("Não existem posts");

    //expect.assertions(3);

    const search = screen.getAllByPlaceholderText(/type your search/i);
    expect(
      search.getByRole("heading", { name: "title 1" })
    ).toBeInTheDocument();
    expect(
      search.getByRole("heading", { name: "title 2" })
    ).toBeInTheDocument();
    expect(
      search.queryByRole("heading", { name: "title 3" })
    ).not.toBeInTheDocument();

    userEvent.type(search, "title1");
    expect(
      search.getByRole("heading", { name: "title 1" })
    ).toBeInTheDocument();
    expect(
      search.getByRole("heading", { name: "title 2" })
    ).not.toBeInTheDocument();
    expect(
      search.queryByRole("heading", { name: "title 3" })
    ).not.toBeInTheDocument();
    expect(
      search.queryByRole("heading", { name: "Search value: 'title1" })
    ).not.toBeInTheDocument();

    userEvent.clear(search);
    expect(
      search.getByRole("heading", { name: "title 1" })
    ).toBeInTheDocument();
    expect(
      search.getByRole("heading", { name: "title 2" })
    ).toBeInTheDocument();

    userEvent.clear(search, "blabla");
    expect(screen.getByText("No more posts")).toBeInTheDocument();
  });

  it("should load more posts", async () => {
    render(<Home />);
    const noMorePosts = screen.getByText("Não existem posts");

    await waitForElementToBeRemoved(noMorePosts);

    const button = screen.getByRole("button", { name: /load more posts/i });
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    expect(
      search.getByRole("heading", { name: "title 3" })
    ).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
