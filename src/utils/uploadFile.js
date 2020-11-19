function uploadFiles(event) {
  setFiles(event.target.files[0]);
}

function axiosUpdate(e) {
  e.preventDefault();

  const user = {
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    description: description,
  };
  const formData = new FormData();
  formData.append("firstName", user.firstName);
  formData.append("lastName", user.lastName);
  formData.append("userName", user.userName);
  formData.append("description", user.description);

  // Update the formData object
  formData.append("image", files, files.name);
  axios({
    method: "put",
    url: `${process.env.REACT_APP_URL}/users`,
    data: formData,
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => {
    console.log(res);
    history.push(`/${userName}`);
  });
}
