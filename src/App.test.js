import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn /i);
  expect(linkElement).toBeInTheDocument();
});
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/react /i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/from /i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/modify /i);
  expect(linkElement).toBeInTheDocument();
});
