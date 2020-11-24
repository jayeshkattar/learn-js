class User {
  constructor(name, age, city, email) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.email = email;
  }
  login() {
    console.log(this.email, "logged in");
    return this;
  }
  logout() {
    console.log(this.email, "logged out");
    return this;
  }
  print() {
    console.log("Welcome to Ubuntu ", this.name);
    return this;
  }
}

class Admin extends User {
  constructor(...args){
    super(...args);
    console.log(this);
  }
  deleteUser(user) {
    users = users.filter((u) => {
      return user.email != u.email;
    });
  }
}
const user1 = new User("dravit", 35, "ghaziabad", "dravit@gmail.com");
const user2 = new User("anurag", 28, "chennai", "anurag@outlook.com");
const user3 = new User("mohit", 54, "jaipur", "mohit@outlook.com");
const admin = new Admin("admin", 42, "bangalore", "admin@pb.com");
// user1.login().print().logout();
// user2.login().print().logout();
users = [user1, user2, user3];
//admin.deleteUser(user2);
//console.log(users);


