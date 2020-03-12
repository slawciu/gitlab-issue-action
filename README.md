# Gitlab issue action

This action moves related gitlab issue to provided column (sets the label) when PR is created.
Branch name should start with issue number, so for issue 1337, there should be `1337-my-branch`

## Inputs
### `gitlab-url`
**Required** Your Gitlab instance url. Default `gitlab.com`

### `label-to-apply`
**Required** Label to apply on PR creation. Default `Code Review`

### `project-id`
**Required** Your Gitlab project id
### `access-token`
**Required** Gitlab API access token
## Example usage

uses: actions/gitlab-issue-action@v2
with:
  gitlab-url: gitlab.com
  label-to-apply: Code Review
  project-id: 17425167
  access-token: accessToken
