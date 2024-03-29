import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Register from './Register.js';
import Login from './Login.js';
import InfoTooltip from './InfoTooltip.js';
import ProtectedRoute from './ProtectedRoute.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import AddCardPopup from './AddCardPopup.js';
import PopupWithImage from './PopupWithImage.js';
import * as auth from '../utils/auth.js';
import {api} from '../utils/API.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
import '../index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isSuccessful, setIsSuccessful] = React.useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({avatar: '', name: '', about: ''});
  const [card, setCard] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isEditAvatarPopupOpen, setIsAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [imageCaption, setImageCaption] = React.useState("");
  const history = useHistory();

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      auth.getContent(jwt)
      .then((res) => {
        const userData = {username: res.username, email: res.email}

        setIsLoggedIn(true);
        setUserData(userData);
      })
      .then(() => {
        api.getCardList()
        .then(res => {
          setCards(res);
        })
      })
      .then(() => {
        api.getUserInfo()
        .then(res => {
          setCurrentUser(res);
        })
      })
      .then(() => {
        history.push('/');
      })
      .catch(err => console.log(err));
    }
  }, [history])

  function handleSignup(email, password) {
    auth.register(email, password)
    .then((res) => {
        if (!res || res.status === 400) {
          setIsInfoTooltipPopupOpen(true);
          throw new Error('Something is not right.');
        } else {
            setIsSuccessful(true);
            setIsInfoTooltipPopupOpen(true);
            history.push('/signin');
        }
        return res;
    })
    .catch(err => console.log(err));
  }

  function handleLogin(email, password) {
    if (!email || !password) {
      return;
    }

    auth.authorize(email, password)
    .then((data) => { 
      if (!data) { 
          throw new Error('Something is not right.'); 
      }
    }) 
    .then(() => {
      api.setToken();
    })
    .then(() => {
      api.getCardList()
      .then(res => {
        setCards(res);
      })
    })
    .then(() => {
      api.getUserInfo()
      .then(res => {
        setCurrentUser(res);
      })
    })
    .then(() => {
      const userData = {username: currentUser.name, email}

      setIsLoggedIn(true);
      setUserData(userData);
      history.push('/');
    })
    .catch(err => console.log(err));
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    history.push('/signin')
  }
  
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if (isLiked) {
      api.removeCardLike(card._id)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch(err => console.log(err));
    } else {
      api.addCardLike(card._id)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch(err => console.log(err));
    }
  }

  function handleCardDelete(e){
    e.preventDefault();
    api.removeCard(card._id)
    .then(() => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
    })
    .catch(err => console.log(err))
  }

  function closeAllPopups() {
    setIsInfoTooltipPopupOpen(false);
    setIsAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  function handleUpdateAvatar(avatar) {
    api.setUserAvatar(avatar)
    .then(() => {
      setCurrentUser({
      avatar,
      name: currentUser.name,
      about: currentUser.about
      })
    })
    .then(() => {
      closeAllPopups()
    })
    .catch(err => console.log(err));
  }

  function handleUpdateUser({name, about}) {
    api.setUserInfo(name, about)
    .then(() => {
      setCurrentUser({
      avatar: currentUser.avatar,
      name,
      about
      })
    })
    .then(() => {
      closeAllPopups()
    })
    .catch(err => console.log(err));
  }

  function handleAddCardSubmit({name, link}){
    api.addCard({name, link})
    .then((newCard) => {
      setCards([...cards, newCard])}
    )
    .then(() => {
      closeAllPopups()
    })
    .catch(err => console.log(err));
  }

  function handleEditAvatarClick() {
    setIsAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddCardClick() {
    setIsAddCardPopupOpen(true);
  }

  function handleCardClick(link, caption){
    setIsImagePopupOpen(true);
    setImage(link);
    setImageCaption(caption);
  }

  function handleDeleteCardClick(card) {
    setIsDeleteCardPopupOpen(true);
    setCard(card);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route path='/signup'>
            <Header link='/signin' linkText='Log in' />
            <Register handleSignup={handleSignup} />
          </Route>
          <Route path='/signin'>
            <Header link='/signup' linkText='Sign up' />
            <Login handleLogin={handleLogin} />
          </Route>
          <ProtectedRoute 
            exact path='/'
            isLoggedIn={isLoggedIn}
            userEmail={userData.email}
            onHandleSignOut={handleSignOut}
            component={Main}
            cards={cards}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddCard={handleAddCardClick}
            onCardLike={handleCardLike}
            onDeleteCard={handleDeleteCardClick}
            onCard={handleCardClick}
          />
        </Switch>
        <InfoTooltip valid={isSuccessful} isOpen={isInfoTooltipPopupOpen} onClose={closeAllPopups} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        <AddCardPopup isOpen={isAddCardPopupOpen} onClose={closeAllPopups} onAddCardSubmit={handleAddCardSubmit} />
        <PopupWithImage image={image} title={imageCaption} onClose={closeAllPopups} isOpen={isImagePopupOpen} />
        <PopupWithForm name="delete-card" action='Delete Card' title='Are you sure?' button='yes' onClose={closeAllPopups} isOpen={isDeleteCardPopupOpen} onSubmit={handleCardDelete} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
    
  );
}

export default App;

