class UI {
  constructor() {
    this.render = document.getElementById('profile')
  }

  dispplayInfo(user) {
    console.log(user)
    this.render.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}" class='rounded-circle' width="200" height="200">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary p-2">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary p-2">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success p-2">Followers: ${user.followers}</span>
            <span class="badge badge-info p-2">Following: ${user.following}</span>
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
      <div id="repos"></div>`

  }
}
