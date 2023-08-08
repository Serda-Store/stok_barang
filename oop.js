class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  userLogin() {
    console.log(`${this.username} ${this.password} berhasil login`);
  }

  userLogout() {
    console.log(`${this.username} berhasil logout`);
  }
}

const user1 = new User("Yolanda", 20102003);
const user2 = new User("Srimul", 11042002);

console.log(user1);
console.log(user2);

user1.userLogin();
user1.userLogout();

user2.userLogin();
user2.userLogout();
