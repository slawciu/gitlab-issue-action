const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require('node-fetch');

const main = async () => {
  try {
    const gitlabUrl = core.getInput('gitlab-url');
    const label = core.getInput('label-to-apply');
    const projectId = core.getInput('project-id');
    const accessToken = core.getInput('access-token');
    
    const ref = github.context.payload.ref;
    const issueId = ref.substring(ref.indexOf(`heads/`)+`heads/`.length, ref.indexOf('-'));
    
    await fetch(`https://${gitlabUrl}/api/v4/projects/${projectId}/issues/${issueId}?labels=${encodeURIComponent(label)}`, {
      method: 'PUT',
      headers: {
        "Private-Token": accessToken
      },
    });

  } catch (error) {
    core.setFailed(error.message);
  }
}

main();