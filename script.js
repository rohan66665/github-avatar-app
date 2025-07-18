async function getUser() {
  const username = document.getElementById("username").value;
  const result = document.getElementById("result");

  if (!username) {
    result.innerHTML = "<p>Please enter a GitHub username</p>";
    return;
  }

  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    if (data.message === "Not Found") {
      result.innerHTML = "<p>User not found</p>";
      return;
    }

    result.innerHTML = `
      <img src="${data.avatar_url}" alt="Avatar" />
      <h2>${data.name || "No Name"}</h2>
      <p>${data.bio || "No bio available"}</p>
      <p>Repos: ${data.public_repos}</p>
      <p>Followers: ${data.followers}</p>
    `;
  } catch (error) {
    result.innerHTML = "<p>Something went wrong</p>";
  }
}