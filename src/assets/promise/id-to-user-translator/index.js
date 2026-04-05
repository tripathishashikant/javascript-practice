// Mock API: User ID leta hai aur 1s baad user object deta hai
const fetchUser = (id) =>
  new Promise((res) => {
    setTimeout(() => {
      res({ id: id, name: `User_${id}` });
    }, 1000);
  });

const userIds = [101, 102, 103, 104];

function fetchAllUsers(ids) {
  // Hint 1: ids.map() use karke promises ki ek array banao
  // Hint 2: Promise.all() ka use karo un sabka wait karne ke liye
}

// Expected Usage:
fetchAllUsers(userIds).then((users) => {
  console.log('All Users Data:', users);
  // Output: [{id: 101, name: "User_101"}, {id: 102, ...}, ...]
});
