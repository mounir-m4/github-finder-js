class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
            <div class="card card-body mb-3">
            <div class="row">
            <div class="col-md-3">
                <img class="img-fluid m-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn w-100 btn-primary btn-block mx-2"><i class="far fa-eye"></i> View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge bg-primary m-1">Public Repos: ${user.public_repos}</span>
                <span class="badge bg-success m-1">Public Gists: ${user.public_gists}</span>
                <span class="badge bg-danger m-1">Followers: ${user.followers}</span>
                <span class="badge bg-info m-1"> Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
            </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
    `;
  }
  // show repos
  showRepos(repos) {
    let output = '';
    repos.forEach(repo => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge bg-info">Stars: ${repo.stargazers_count}</span>
            <span class="badge bg-info">Watchers: ${repo.watchers_count}</span>
            <span class="badge bg-info">Forks: ${repo.forks_count}</span>
            <span class="badge bg-info">Language Used: ${
              repo.language === null ? 'unknown' : repo.language
            }</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output repos
    document.getElementById('repos').innerHTML = output;
  }
  //Show alert msg
  showAlert(message, className) {
    // clear any alerts left
    this.clearAlert();
    // create a div
    const div = document.createElement('div');
    // set class
    div.className = className;
    //add text
    div.appendChild(document.createTextNode(message));
    //get the parent el
    const container = document.querySelector('.searchContainer');
    // get search box
    const search = document.querySelector('.search');
    //insert alert
    container.insertBefore(div, search);
    // timeout after 3 secs
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
  // clear alerts
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  // clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}
