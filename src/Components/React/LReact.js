import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./learnReact.css";
import ReactProps from "./ReactProps";
import ReactState from "./ReactState";
import ReactStatic from "./ReactStatic";
export default function LReact({ match }) {
  return (
    <div className="mt-3">
      <div className="row m-auto ">
        <div className="col-lg-3 ">
          <div className="mb-4">
            <div className="">
              <div class="card bg-side">
                <Link style={{ textDecoration: "none" }} to="/react">
                  <h6 className="text-white m-3 text-center">React</h6>
                </Link>
              </div>
              <div class="card bg-side">
                <Link
                  style={{ textDecoration: "none" }}
                  to={`${match.url}/react_props`}
                >
                  <h6 className="text-white m-3 text-center">React Props</h6>
                </Link>
              </div>
              <div class="card bg-side">
                <Link
                  to={`${match.url}/react_state`}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <h6 className="text-white m-3 text-center">React State</h6>
                </Link>
              </div>
              <div class="card bg-side">
                <Link
                  to={`${match.url}/life_cyle_methods`}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <h6 className="text-white m-3 text-center">
                    Life Cycle Methods
                  </h6>
                </Link>
              </div>
              <div class="card bg-side">
                <Link
                  to={`${match.url}/life_cyle_methods`}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <h6 className="text-white m-3 text-center">
                    Life Cycle Methods
                  </h6>
                </Link>
              </div>
              <div class="card bg-side">
                <Link
                  to={`${match.url}/life_cyle_methods`}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <h6 className="text-white m-3 text-center">
                    Life Cycle Methods
                  </h6>
                </Link>
              </div>
              <div class="card bg-side">
                <Link
                  to={`${match.url}/life_cyle_methods`}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <h6 className="text-white m-3 text-center">
                    Life Cycle Methods
                  </h6>
                </Link>
              </div>
              <div class="card bg-side">
                <Link
                  to={`${match.url}/life_cyle_methods`}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <h6 className="text-white m-3 text-center">
                    Life Cycle Methods
                  </h6>
                </Link>
              </div>

              <div class="card bg-side">
                <Link
                  to={`${match.url}/life_cyle_methods`}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <h6 className="text-white m-3 text-center">
                    Life Cycle Methods
                  </h6>
                </Link>
              </div>
              <div class="card bg-side">
                <Link
                  to={`${match.url}/life_cyle_methods`}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <h6 className="text-white m-3 text-center">
                    Life Cycle Methods
                  </h6>
                </Link>
              </div>
              <div class="card bg-side">
                <Link
                  to={`${match.url}/life_cyle_methods`}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <h6 className="text-white m-3 text-center">
                    Life Cycle Methods
                  </h6>
                </Link>
              </div>
              <div class="card bg-side">
                <Link
                  to={`${match.url}/life_cyle_methods`}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <h6 className="text-white m-3 text-center">
                    Life Cycle Methods
                  </h6>
                </Link>
              </div>
              <div class="card bg-side">
                <Link
                  to={`${match.url}/life_cyle_methods`}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <h6 className="text-white m-3 text-center">
                    Life Cycle Methods
                  </h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <Switch>
            <Route
              exact
              path={match.path}
              render={() => (
                <>
                  <ReactStatic />
                </>
              )}
            />
            <Route path={`${match.path}/:slug`} component={AllReact} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

function AllReact({ match }) {
  if (match.params.slug === "react_props") {
    return (
      <div className="">
        <ReactProps />
      </div>
    );
  } else {
    if (match.params.slug === "react_state") {
      return (
        <div className="bg-light">
          <ReactState />
        </div>
      );
    } else {
      if (match.params.slug === "life_cyle_methods") {
        return (
          <>
            <p>life cyle method page</p>
          </>
        );
      } else {
        return (
          <>
            <h1>This Is Wrong Path Which Entered</h1>
          </>
        );
      }
    }
  }
}
