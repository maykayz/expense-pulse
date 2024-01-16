import {render, screen} from "@testing-library/react";
import ActionCard from "./ActionCard";

// Arrange
test("Action Card should render properly ", () => {

render(<ActionCard title="Test Title" buttonText="Test Button" handleClick={() => {}} />);

  // Assert
  const labelElement = screen.getByText("test title", {exact: false});
  expect(labelElement).toBeInTheDocument();

  const buttonText = screen.getByText("Test Button", {exact: false});
  expect(buttonText).toBeInTheDocument();

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();

});
// Act

// Assert
