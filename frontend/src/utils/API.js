class API {
    constructor({baseURL, headers}) {
      this._baseURL = baseURL;
      this._headers = headers;
    }
  
    getUserInfo() {
      return fetch(this._baseURL + '/users/me', {
        headers: this._headers
      })
      .then(res => res.ok ? res.json() : Promise.reject(res.status + ' Error: ' + res.statusText))
    };
  
    setUserInfo(name, about) {
      return fetch(this._baseURL + '/users/me', {
        headers: this._headers,
        method: "PATCH",
        body: JSON.stringify({
          name,
          about
        })
      })
      .then(res => res.ok ? res.json() : Promise.reject(res.status + ' Error: ' + res.statusText))
    };
  
    setUserAvatar(avatar) {
      return fetch(this._baseURL + '/users/me/avatar', {
        headers: this._headers,
        method: "PATCH",
        body: JSON.stringify({
          avatar
        })
      })
      .then(res => res.ok ? res.json() : Promise.reject(res.status + ' Error: ' + res.statusText))
    };
  
    getCardList() {
      return fetch(this._baseURL + '/cards', {
        headers: this._headers
      })
      .then(res => res.ok ? res.json() : Promise.reject(res.status + ' Error: ' + res.statusText))
    };
  
    addCard({name, link}) {
      return fetch(this._baseURL + '/cards', {
        headers: this._headers,
        method: "POST",
        body: JSON.stringify({
          name: name,
          link: link
        })
      })
      .then(res => res.ok ? res.json() : Promise.reject(res.status + ' Error: ' + res.statusText))
    };
  
    removeCard(_id) {
      return fetch(this._baseURL + '/cards/' + _id, {
        headers: this._headers,
        method: "DELETE"
      })
      .then(res => res.ok ? res.json() : Promise.reject(res.status + ' Error: ' + res.statusText))
    };
  
    addCardLike(_id) {
      return fetch(this._baseURL + '/cards/likes/' + _id, {
        headers: this._headers,
        method: "PUT",
      })
      .then(res => res.ok ? res.json() : Promise.reject(res.status + ' Error: ' + res.statusText))
    };
  
    removeCardLike(_id) {
      return fetch(this._baseURL + '/cards/likes/' + _id, {
        headers: this._headers,
        method: "DELETE",
      })
      .then(res => res.ok ? res.json() : Promise.reject(res.status + ' Error: ' + res.statusText))
    };
  }
  const token = localStorage.getItem('jwt');

  const api = new API({
    baseURL: "https://api.malcolmxavier.students.nomoreparties.site",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  });
  
  export {api};