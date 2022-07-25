import "../stylesheets/Main-challenge.css";

function MainChallenge() {
  return (
    <div className="email-challenge-div">
      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        width={100}
        alt="user"
      />
      <section className="email-reply">
        <form action="" className="email-form">
          <div className="email-receiver">
            <input type="email" />
          </div>

          <div className="email-message">
            <label htmlFor="">
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </label>
          </div>
          <div className="email-reply-buttons">
            <div className="email-submit-button">
              <input type="submit" />

              <span className="material-symbols-outlined">text_format</span>
              <span className="material-symbols-outlined">attach_file</span>
              <span className="material-symbols-outlined">link</span>
              <span className="material-symbols-outlined">mood</span>
              <span className="material-symbols-outlined">add_to_drive</span>
              <span className="material-symbols-outlined">image</span>
              <span className="material-symbols-outlined">lock_clock</span>
              <span className="material-symbols-outlined">edit</span>
            </div>
            <div className="email-delete-button">
              <span className="material-symbols-outlined">more_vert</span>
              <span className="material-symbols-outlined">delete</span>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default MainChallenge;
