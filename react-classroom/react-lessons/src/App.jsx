import logo from './logo.svg';
import './App.css';
import Header from './components/day01-challenge/Header';
import AboutMe from './components/day01-challenge/AboutMe';
import StudentInformation from './components/day01-challenge/StudentInformation';
import Footer from './components/day01-challenge/Footer';

function App() {
  const welcomeName = "Korrina";
  return (
    <div className="App">
      <h1>Welcome to React, {welcomeName}.</h1>
      <h2>We just modified our root app.</h2>
      {/* <p>This is a test</p> */}
      <Header />
      <h3>Create the following...</h3>
      <ul>
        <li>Create a new component in the day 1 challenges folder called "about me".</li>
        <li>h1 tag with your name</li>
        <li>p tag with following I grew up in City/State</li>
        <li>Have a ul with 3 places youve visited</li>
      </ul>
      <p>Export the component, and import the new component into the app.jsx file</p>
      <hr />
      <h1>Bonus</h1>
      <p>make the h1 tag be red in color using in line styling</p>
      <p>Make the li's no bullets - inline styling</p>
      <AboutMe />
      <StudentInformation studentName="Pam" grade="A" subject="English"/>
      <StudentInformation studentName="Tom" grade="C" subject="Health"/>
      <StudentInformation studentName="Frank" grade="F" subject="Chemistry"/>
      <Footer/>
    </div>
  );
}

export default App;
