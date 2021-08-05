// init github
const github = new Github();
// catch input
const searchUser = document.querySelector('#searchUser');
// init ui
const ui = new UI();
// search event lister
searchUser.addEventListener('keyup', e => {
  // get input value
  const userText = e.target.value;
  if (userText !== '') {
    // make http call
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        // show alert
        ui.showAlert('user not found', 'alert alert-danger');
      } else {
        // show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
});
