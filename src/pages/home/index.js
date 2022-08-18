import "./home.css"

export const Home = () => {
  return (
    <div class="hero-container">
      <div class="content">
        <h1 class="title">
          Check How Much Authentic Is Your NCERT Book with DupiTool
        </h1>
        <p class="sub-title">
          DupiTool is the devtool which checks the authencity of the book with the help of piracy and plagarism tools.
        </p>

        <div class="btn-container">
            <button class="get-started-btn">Check Piracy</button>
         
            <button class="btn outline-primary">Check Plagarism</button>
          
        </div>
      </div>

      <div class="hero-img">
        <img
          class="responsive-image"
          src="https://res.cloudinary.com/debanftke/image/upload/v1657799390/118_dpyfkz.png"
          alt=""
        />
      </div>
    </div>
  );
};
