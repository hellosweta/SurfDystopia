export const logIn = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  })
);

export const signUp = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: user
  })
);

export const logOut = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

export const demo = () => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {
      user: {
        username: "Guest",
        name: "Guest Surfer",
        password: "password"
      }
    }
  })
);
