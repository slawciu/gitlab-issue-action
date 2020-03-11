const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require('node-fetch');

try {
  const gitlabUrl = core.getInput('gitlab-url');
  const label = core.getInput('label-to-apply');
  const projectId = core.getInput('project-id');
  const accessToken = core.getInput('access-token');
  
  console.log(gitlabUrl, label, projectId, accessToken);
  
  // Get the JSON webhook payload for the event that triggered the workflow
  const ref = github.context.payload.ref;
  const issueId = ref.substring(ref.indexOf(`heads/`)+`heads/`.length, ref.indexOf('-'));
  
  console.log(`The branch: ${ref}`);

  fetch(`https://${gitlabUrl}/${projectId}/issues/${issueId}?labels=${encodeURIComponent(label)}`, {
    method: 'PUT',
    headers: {
      "Private-Token": accessToken
    },
  });

} catch (error) {
  core.setFailed(error.message);
}