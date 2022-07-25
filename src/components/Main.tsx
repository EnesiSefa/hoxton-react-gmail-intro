import flaticonWelcomeImage from "./assets/images/flaticon-welcome-image.png";
import MainNavigation from "./Main-navigation";
import MainHeader from "./Main-header";

function Main (){
    return (<main className="email-view">
   <MainNavigation/>
    <article className="email-content">
      <div className="title">
        <h1>Welcome to Flaticon</h1>
      </div>
      <MainHeader/>
      <section className="email-body">
        <div className="content">
          <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
        </div>
      </section>
      <section className="email-actions">
        <button>Reply</button>
        <button>Forward</button>
      </section>
    </article>
  </main>)
}

export default Main