import React from "react";
export default function ReactStatic() {
  return (
    <div>
      <div className="">
        <div className="container bg-side">
          <h4 className="text-white">1.WHAT IS REACT?</h4>
          <p>
            It is a JavaScript library used for building UI(user interface). It
            is used to build a SPA(single page application). It allows us to
            create reusable components.
          </p>
        </div>
        <div className="container bg-side">
          <h4 className="text-white">2.WHAT ARE THE FEATURS OF REACT?</h4>
          <ul>
            <li>JSX (JavaScript XML)</li>
            <li>Component Based</li>
            <li>Virtual DOM</li>
            <li>Easy to understatnd</li>
            <li>Performance is good</li>
            <li>Uses Only View Part from (MVC)</li>

          </ul>
        </div>
        <div className="container bg-side">
          <h4 className="text-white">3.REACT vs ANGULAR?</h4>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">REACT</th>
                <th scope="col">ANGULAR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>It is JavaScript Library</td>
                <td>It is a Framework</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>It is simple to learn and many 3rd party library is used</td>
                <td>It is big, everything is build in no 3rd party library is used.</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>It is easy to understatnd</td>
                <td>It is tricky to understatnd</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Ex_FaceBook</td>
                <td>Ex_Google</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container bg-side">
          <h4 className="text-white">4.Library vs Framework?</h4>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">LIBRARY</th>
                <th scope="col">FRAMEWORK</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>There is Less Number of Rules</td>
                <td>There is More Number of Rules</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>You have the Power to call the code when ever we want</td>
                <td>You have no Power to call the code when ever we want</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>More Freedom to use</td>
                <td>Restricted to use</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Ex_Jquery,React</td>
                <td>Ex_Jango,Angular</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
