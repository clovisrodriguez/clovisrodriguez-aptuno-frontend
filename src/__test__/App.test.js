import React from "react";
import App from "../App";
import { shallow } from "enzyme";

describe("<App />", () => {
  const app = shallow(<App />);
  test("The App Component renders", () => {
    expect(app.length).toEqual(1);
  });
});
