// Define your Nextcloud app
OC.registerApp({
  id: "my_react_app",
  name: t("my_react_app", "My React App"),
  icon: OC.imagePath("my_react_app", "icon.png"),
  route: "/my_react_app",
});

// Mount your React app
const mountReactApp = () => {
  ReactDOM.render(<App />, document.getElementById("app"));
};

// Wait for DOM to load before mounting React app
if (document.readyState === "complete") {
  mountReactApp();
} else {
  window.addEventListener("load", mountReactApp);
}
