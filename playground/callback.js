var getUser = (id, callback) => {
  const user = {
    id,
    name: 'Weslley'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(31, user => {
  console.log(user);
});
