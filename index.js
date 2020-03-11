const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require('node-fetch');

try {
  const gitlabUrl = core.getInput('gitlab-url');
  const label = core.getInput('label');
  const projectId = core.getInput('project-id');
  const accessToken = core.getInput('access-token');
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
  const ref = github.context.payload.ref;
  const issueId = ref.substring(ref.indexOf(`heads/`)+`heads/`.length, ref.indexOf('-'));
  
  console.log(`The branch: ${ref}`);

  fetch(`https://${gitlabUrl}/${projectId}/issues/${issueId}?labels=${label}`, {
    method: 'PUT',
    headers: {
      "Private-Token": accessToken
    },
  });

} catch (error) {
  core.setFailed(error.message);
}