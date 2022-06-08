export function setTokens (tokens) {
    const tokensString = JSON.stringify(tokens);
    localStorage.setItem('tokens', tokensString);
}
  
export function getTokens () {
    const tokensString = localStorage.getItem('tokens');
    return JSON.parse(tokensString);
}

export function isAuthenticated () {
    return getTokens() !== null;
}

export function deleteTokens () {
    localStorage.clear();
}