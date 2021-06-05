/**
 * https://ruleoftech.com/2020/automate-versioning-and-changelog-with-release-it-on-gitlab-ci-cd
 * https://docs.gitlab.com/ee/ci/ssh_keys/#ssh-keys-when-using-the-docker-executor
 * https://www.geekyhacker.com/2019/11/09/how-to-use-node-js-release-it-plugin-with-travis-ci/
 */
const release = require("release-it");

const hooks = {
  //"before:init": ["npm run lint"], // run linting
  "after:bump": ["yarn build"], //, "npm run build-zip"], // build the project and generate the zip file
  //"after:release": "echo Successfully released ${name} v${version} to ${repo.repository}.", // prompt on build success
};

const git = {
  requireBranch: "master",
  push: true, // push the commit to upsteream
  tagName: "${version}", // tag name
  requireCleanWorkingDir: false, // perform release even if the directory has uncommitted files
  requireUpstream: false, // run release without Git upstream configured
  requireCommits: true, // ?
  addUntrackedFiles: false, // don't add untracked files
  commit: true, // commit the code
  commitMessage: "Release v${version}", // message of the commit
  commitArgs: "", // additional commit argument
  tag: true, // tag the release
  tagAnnotation: "Release v${version}", // tag annotation
  tagArgs: "", // additional tag argument
  pushArgs: "--follow-tags", // commit plus tag to upstream
  pushRepo: "origin", // the upstream name
};

const npm = {
  publish: false,
  publishPath: ".", // url of the npm artifactory
  access: null, // ?
  otp: null, // ?
};

const github = {
  release: false,
  releaseName: "v${version}",
  releaseNotes: null, // release not message
  preRelease: false, // it is not a prelease release
  draft: false, // it is not a draft release
  tokenRef: process.env.GITHUB_TOKEN, // GitHub token
  //assets: ["dist-zip/*.zip"], // assest, attach all zip files in `dist-zip` directory
};

const plugins = {
  "release-it-yarn-workspaces": {
    workspaces: ["src/util"],
  },
};

const options = {
  hooks,
  plugins,
  git,
  npm,
  github,
};

release(options).then((output) => {
  console.log(output);
  // { version, latestVersion, name, changelog }
});
