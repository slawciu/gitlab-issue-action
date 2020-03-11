# Hello world javascript action

This action moves related gitlab issue to provided column (sets the label) when PR is created.

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