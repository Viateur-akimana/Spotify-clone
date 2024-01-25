export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://localhost:3000/callback";
const clientId = "f3a00c75bb374e4f933aa81aa0f9d9e6";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
