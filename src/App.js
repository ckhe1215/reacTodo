import styles from "./App.module.css";
import Main from "./page/Main";
import Header from "./component/Header";

function App() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <Main></Main>
      {/*       
        <footer>
          <a href="https://www.freepik.com/free-photo/paper-texture_1034631.htm#query=paper%20texture&position=8&from_view=keyword#position=8&query=paper%20texture">
            Image by kues1
          </a>{" "}
          on Freepik
        </footer>
      */}
    </div>
  );
}

export default App;
