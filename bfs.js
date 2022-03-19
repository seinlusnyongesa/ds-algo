let graph = {};

graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peegy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

class Que {
  constructor() {
    this.storage = [];
  }
  enque(data) {
    this.storage.push(data);
    return data;
  }
  deque() {
    let p = this.storage.shift();
    return p;
  }
  isEmpty() {
    if (this.storage.length == 0) {
      return true;
    }
    return false;
  }
}

function bfs(name) {
  let que = new Que();
  graph[name]?.forEach((element) => {
    que.enque(element);
  });
  searched = [];

  while (que.storage.length) {
    let person = que.deque();
    if (!searched.includes[person]) {
      if (seller(person) == "seller") {
        console.log(`${person} is a seller`);
        return true;
      } else {
        graph[person]?.forEach((element) => {
          que.enque(element);
        });
      }
    }
    console.log(que);
  }
  return false;
}
function seller(p) {
  return p.endsWith("m") ? "seller" : "not seller";
}

console.log(bfs("you"));
