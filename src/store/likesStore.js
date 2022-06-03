import { makeAutoObservable } from "mobx";

class Likes {
  likesCount = 12;
  id = 1;
  comments = [];
  imageUrl = `https://rickandmortyapi.com/api/character/avatar/1.jpeg`;

  constructor() {
    makeAutoObservable(this);
  }

  updateCount() {
    this.likesCount++;
  }

  postComment(comment) {
    this.comments.push(comment);
  }

  get commentsCount() {
    return this.comments.length;
  }

  async fetchImage(param) {
    let characterId;
    if (param === "decrement" && this.id >= 2) {
      characterId = --this.id;
    } else if (param === "increment") {
      characterId = ++this.id;
    } else {
      return this.imageUrl;
    }

    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );
    const data = await response.json();
    this.imageUrl = data.image;
  }
}

export default new Likes();
