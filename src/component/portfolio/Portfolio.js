import pic1 from './background.png';
import pic2 from './bullet.jpg';
import pic3 from './duck.jpg';
import pic4 from './games.jpg';
import pic5 from './tictactoe.jpg';
import pic6 from './wood.jpg';

export const Portfolio = () => {
  return (
      <>
        
<h2 id="portfolio" class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
  Portfolio</h2>

        <div class="grid-cols-1 sm:grid md:grid-cols-3 ">
        <div class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src={pic1}
                alt="Hollywood Sign on The Hill" />
            </a>
        <div class="p-6">
          <h5
            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            My Portfolio
          </h5>
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            App that showcases project portfolio. Created in React. 
          </p>
        </div>
        </div>
  <div
    class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    <a href="https://pwa-t-editor-aafa34e5160b.herokuapp.com/" target="_blank" >
      <img
        class="rounded-t-lg"
        src={pic2}
        alt="Palm Springs Road" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Progressive Web Applications (PWA): Text Editor
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      The JATE text editor is application accessible via the browser. It allows users to add code snippets that runs online and offline. This integrates a service worker and cache api that enables the application to function online. 
      </p>
    </div>
  </div>

  <div
    class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    <a href="https://drive.google.com/file/d/15b5g4Y-4jMM7oGvqH9FiCjkCHGQK_UFB/view" target="_blank">
      <img
        class="rounded-t-lg"
        src={pic3}
        alt="Skyscrapers" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        NoSQL: Social Network API
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      This is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This API is build using Express.js for routing, a MongoDB database, and the Mongoose ODM. 
      </p>
    </div>
  </div>

  <div
    class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    <a href="https://myworkoutpal-fb26ea75640f.herokuapp.com/" target="_blank">
      <img
        class="rounded-t-lg"
        src={pic4}
        alt="Los Angeles Skyscrapers" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        My Workout Pal
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      MyWorkoutPal is a web application that allows users to log their workouts and keep track of their exercise sessions. It provides a simple interface for users to input workout details and displays a record of the logged workouts. Users also have the ability to post their workouts to a community page where they can see what everyone else is up to.
      </p>
    </div>
  </div>

  <div
    class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    <a href="https://github.com/mayperalta/week-13-ecommerce" target="_blank">
      <img
        class="rounded-t-lg"
        src={pic5}
        alt="Los Angeles Skyscrapers" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Object-Relational Mapping (ORM): E-Commerce Back End
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      The challenge is to build a back-end for an e-commerce site by modifying the starter code. It involves configuring a working Express.js API to use Sequelize to interact with a MySql database.
      </p>
    </div>
  </div>

  <div
    class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    <a href="https://gist.github.com/mayperalta/07c32814b18b0fc8866b8d8f308c6cfa" target="_blank">
      <img
        class="rounded-t-lg"
        src={pic6}
        alt="Los Angeles Skyscrapers" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Match an Email - Regex Tutorial
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      This tutorial is going to explain the use of regex to match emails using expresions. 
      </p>
    </div>
  </div>

</div>
      </>
  );
}
