const { Octokit } = require("@octokit/action");

const octokit = new Octokit();

const createRelease = async () => {
  try {
    const response = await octokit.request(
      "post /repos/{owner}/{repo}/releases",
      {
        body: process.env.BODY,
        draft: process.env.DRAFT,
        generate_release_notes: true,
        name: process.env.NAME,
        owner: "lukehedger",
        prerelease: process.env.PRERELEASE,
        repo: "actions-auto-release",
        tag_name: process.env.TAG_NAME,
        target_commitish: process.env.TARGET_COMMITISH,
      }
    );
  } catch (error) {
    console.error(error);
  }
};

createRelease();
