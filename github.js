class Github {
  constructor() {
    // you can get your own key and id if u create a new Oauth app
    //folow this link : https://github.com/settings/developers
    this.client_id = 'your client id';
    this.client_secret = 'your client password';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  async getUser(user) {
    const profileRes = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoRes = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileRes.json();
    const repos = await repoRes.json();
    return {
      profile,
      repos,
    };
  }
}
