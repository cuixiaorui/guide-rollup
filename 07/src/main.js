import answer from "the-answer";

class User {
  constructor() {
    this.name = "name";
  }
}

export default () => {
  const user = new User();
  console.log(user.name);
  console.log(`the answer is ${answer}`);
};
