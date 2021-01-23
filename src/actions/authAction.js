export const authAction = (isLoggedIn, isAdmin, token) => {
  return { type: "TOGGLE_AUTH", isLoggedIn, isAdmin, token };
};
