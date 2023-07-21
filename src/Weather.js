import React from "react";

export default function Weather() {
  <div className="Weather">
    <div class="container">
      <div class="weather-app-wrapper">
        <div class="weather-app" id="color-experiment">
          <div class="location">
            <form id="search-form" class="mb-3">
              <div class="row">
                <div class="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city"
                    class="form-control"
                    id="city-input"
                    autocomplete="off"
                  />
                </div>
                <div class="col-3">
                  <input
                    type="submit"
                    value="Search"
                    class="btn btn-primary w-100"
                    id="button"
                  />
                </div>
              </div>
            </form>
            <h1 id="city">Düsseldorf</h1>
            <ul>
              <li>
                Last updated:<span id="date"></span>
              </li>
              <p></p>
              <li id="description"></li>
            </ul>
            <br />
          </div>
          <div class="row">
            <div class="col-6">
              <div class="d-flex weather-temp">
                <img src="" alt="cloudy" id="weather-icon" />
                <div class="float-left">
                  <strong id="temperature"> </strong>
                  <span class="units">
                    <a href="" id="celsius-link" class="active">
                      °C{" "}
                    </a>{" "}
                    |
                    <a href="#" id="fahrenheit-link">
                      °F
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-6">
              <ul>
                <li>
                  Humidity: <span id="humidity"></span>%
                </li>
                <li>
                  Wind: <span id="wind"></span> km/h
                </li>
              </ul>
            </div>
          </div>
          <div class="weather-forecast" id="forecast"></div>
        </div>
        <small>
          <a
            href="https://github.com/polinashkurat/react-weather-homework"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          by Polina Shkurat
        </small>
      </div>
    </div>
  </div>;
}
