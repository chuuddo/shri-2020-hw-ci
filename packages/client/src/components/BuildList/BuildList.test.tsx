import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { BuildModel, BuildStatus } from "@shri-ci/types";
import BuildList from "./BuildList";

const builds: BuildModel[] = [
  {
    id: "f7981650-50c6-4eb2-a357-f112910a3eb7",
    configurationId: "952b0cf1-948a-4f95-b6ce-ee225d36c24c",
    buildNumber: 37,
    commitMessage: "test update",
    commitHash: "0cab04f6b0894e775e66224469fde0309f8eb284",
    branchName: "master",
    authorName: "Ilya Chudin",
    status: BuildStatus.Waiting
  },
  {
    id: "01d78ffb-dae2-4bb9-9457-233fc8700c7e",
    configurationId: "952b0cf1-948a-4f95-b6ce-ee225d36c24c",
    buildNumber: 36,
    commitMessage: "test update",
    commitHash: "0cab04f6b0894e775e66224469fde0309f8eb284",
    branchName: "master",
    authorName: "Ilya Chudin",
    status: BuildStatus.Success,
    start: new Date("2020-04-04T08:32:53.442"),
    duration: 12375
  }
];

describe("BuildList component", () => {
  it.each([
    [true, true],
    [true, false],
    [false, true],
    [false, false]
  ])("should renders correctly", (showMore, isLoading) => {
    const fn = jest.fn();
    const tree = renderer
      .create(
        <MemoryRouter>
          <BuildList builds={builds} showMore={showMore} isLoading={isLoading} onShowMoreClick={fn} />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
