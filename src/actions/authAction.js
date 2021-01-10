export const authAction = (isLoggedIn, isAdmin) => {
  return { type: "TOGGLE_AUTH", isLoggedIn, isAdmin };
};
