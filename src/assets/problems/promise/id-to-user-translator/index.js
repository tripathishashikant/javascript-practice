// Mock API: User ID leta hai aur 1s baad user object deta hai
const fetchUser = (id) =>
  new Promise((res) => {
    setTimeout(() => {
      res({ id, name: `User_${id}` });
    }, 1000);
  });

const userIds = [101, 102, 103, 104];

function fetchAllUsers(ids) {
  return Promise.all(ids.map((id) => fetchUser(id)));
}

// Expected Usage:
fetchAllUsers(userIds).then((users) => {
  console.log('All Users Data:', users);
  // Output: [{id: 101, name: "User_101"}, {id: 102, ...}, ...]
});
