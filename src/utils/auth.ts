import { ITokens } from "./types";

export function setTokens (tokens: ITokens) {
    const tokensString = JSON.stringify(tokens);
    localStorage.setItem('tokens', tokensString);
}
  
export function getTokens (): ITokens | null {
    const tokensString = localStorage.getItem('tokens');
    return tokensString && JSON.parse(tokensString);
}

export function isAuthenticated () {
    return getTokens() !== null;
}

export function deleteTokens () {
    localStorage.clear();
}