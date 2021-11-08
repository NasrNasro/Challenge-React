import img2 from '../Images/proj1.jpg'
import img3 from '../Images/proj2.jpg'
import img4 from '../Images/proj3.jpg'
import img5 from '../Images/proj4.jpg'

function Proj() {
    return(
        <div>
        <section id="projects">
      <h2 class="text-important">Projects</h2>
      <div class="projects-container">

        <div class="project-card">
          <img src={img2} alt="project" />
          <h3>Project 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>

        <div class="project-card">
          <img src={img3} alt="project" />
          <h3>Project 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>

        <div class="project-card">
          <img src={img4} alt="project" />
          <h3>Project 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>

        <div class="project-card">
          <img src={img5} alt="project" />
          <h3>Project 4</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>
      </div>
    </section>
    </div>
    )
}
export default Proj