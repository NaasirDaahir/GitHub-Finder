const github = new Github;
const ui = new UI
const search = document.getElementById('searchUser')
const profile = document.getElementById('profile')

search.addEventListener('keyup', (e) => {
    let name = e.target.value
    // make http call
    getUserfun(name)
})

getUserfun = (user) => {
    if (user != "") {
        //make http call request
        github.getUser(user).then(data => {
            console.log(data.profile)
            if (data.profile.message != "Not Found") {
                //display info to the UI
                ui.dispplayInfo(data.profile)
            }
        })
    } else {
        //Clear profile & sty current profile..
    }
}

