// functions.js

// Functie ce genereaza un UUID random
export function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Functie care transforma un string in Base64
export function toBase64(str) {
  return window.btoa(str);
}

// Functie care decodeaza un string din Base64
export function fromBase64(str) {
  return window.atob(str);
}

// Functie ce returneaza un JSON cu datele unui user
export function getUserData(user) {
  return {
    id: generateUUID(),
    username: toBase64(user.username),
    password: toBase64(user.password),
    role: "user",
  };
}

// Functie de login
export function login(username, password) {
  const users = [
    {
      username: "test",
      password: "1234",
    },
  ];

  return (
    users.find(
      (user) => user.username === username && user.password === password
    ) !== undefined
  );
}

// Functie de register
export function register(username, password) {
  // in mod normal aici s-ar face un apel catre server sau s-ar verifica intr-o baza de date
  if (username === "test" && password === "1234") {
    return getUserData({ username, password });
  }

  return null;
}
