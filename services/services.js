
const apis = {
  GET_USERS: `https://gorest.co.in/public/v1/users`,
}

export function getUsers(name) {
  const url = `${apis.GET_USERS}`;
  return fetch(url).then(response => {
    return response.json();
  });
}

export function getUserById(id) {
  const url = `${apis.GET_USERS}/${id}`;
  return fetch(url).then(response => {
    return response.json();
  });
}
