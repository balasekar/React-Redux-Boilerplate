export const selectUser = (user) =>{
  console.log('clicked on user:', user.first);
  return {
    type: "USER_SELECTED", payload: user
  }
};
