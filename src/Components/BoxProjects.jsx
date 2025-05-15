import './styles/BoxProjects.scss';
import imgProject1 from '../assets/images/img-project-1.png';

const BoxProjects = () => {
  return (
    <article>
      <section className="card">
        <div className="text-content">
          <h3>Quizz Game</h3>
          <p>
            In this app I make use of my React, javaScript, HTML, CSS, Saas and API consumption skills to create a scalable, neat and fully functional app including a score system that is stored locally.
          </p>
          <a href="#">Join now</a>
        </div>
        <div className="visual">
          <img
            src={imgProject1} alt="" className="project-image"
          />
        </div>
      </section>

      <section className="card">
        <div className="text-content">
          <h3>Responsive Design for Every Screen Size</h3>
          <p>
            We specialize in creating responsive designs that look great on
            desktop, tablet, and mobile devices, ensuring your site is
            accessible to all your visitors.
          </p>
          <a href="#">Join now</a>
        </div>
        <div className="visual">
          <img
            src="https://images.unsplash.com/photo-1564460576398-ef55d99548b2?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzgzMDU1NDY&ixlib=rb-4.0.3&q=80"
            alt=""
          />
        </div>
      </section>

      <section className="card">
        <div className="text-content">
          <h3>Design that Speaks to Your Audience</h3>
          <p>
            We work closely with you to understand your brand and your
            customers, so we can create a website that speaks directly to your
            target audience.
          </p>
          <a href="#">Join now</a>
        </div>
        <div className="visual">
          <img
            src="https://images.unsplash.com/photo-1631085274261-0ace0296eaa0?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzgzMTExMDg&ixlib=rb-4.0.3&q=80"
            alt=""
          />
        </div>
      </section>

      <section className="card">
        <div className="text-content">
          <h3>Design that Drives Results for Your Business</h3>
          <p>
            We specialize in creating websites that not only look great but also
            drive traffic and conversions. Let us help you create a website that
            delivers real business value.
          </p>
          <a href="#">Join now</a>
        </div>
        <div className="visual">
          <img
            src="https://images.unsplash.com/photo-1611703372231-02ffff8abee6?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzgzMTEyNTU&ixlib=rb-4.0.3&q=80"
            alt=""
          />
        </div>
      </section>
    </article>
  );
};

export default BoxProjects;
