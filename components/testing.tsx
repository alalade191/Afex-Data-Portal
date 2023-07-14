{
  const Login = (value: UserProps) => {
    axios
      .post("https://web-production-9c5b.up.railway.app/api/account/login/", {
        email: value.email,
        password: value.password,
      })
      .then(function (response) {
        const token = JSON.parse(localStorage.getItem("my-user") as string);
        console.log(response.data.profile_picture);

        if (response.data?.token) {
          localStorage.setItem("my-user", JSON.stringify(response.data));
          toast.success("You have successfully logged in");
          router.push("/homepage");
          setUserDetails({ email: "", password: "" });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}
