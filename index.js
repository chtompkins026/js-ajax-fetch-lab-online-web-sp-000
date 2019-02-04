const baseURL = 'https://api.github.com';
const user = 'chtompkins026';

function getToken() {
  return ''
}

function getIssues() {
  const repo ='learn-co-curriculum/js-ajax-fetch-lab';
  const token = getToken();
  const url = `${baseURL}/repos/${repo}/forks`;

    fetch(`https://api.github.com/repos/${repo}/issues/`, {
      headers: {
        Authorization: `token ${token}`
      }
    })
    .then(res => res.json())
    .then(json => showIssues(json))
}

function showIssues(json) {
  const issues = json.map(issue => `<li><b>Title: </b><span>${issue.title}</span><br>
    <b>URL: </b><span>${issue.html_url}</span><br></li>`)

  $('#issues').html(`<ul>${issues}</ul`)
}

function createIssue() {
  const repo =`${user}/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${repo}/issues`;
  const data = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  const token = getToken()
  fetch(url {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      Authorization: `token ${token}`
    }
  })
  getIssues()
}

function showResults(json) {
  $('#results').append(json.html_url);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken()

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json))
}

