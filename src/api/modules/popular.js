// @flow
import type { ReqTypeT } from "../index";
import API from "../base/api";
import config from "../../constants/config";

class SomeApi extends API {
  async getpopularMovies() {
    return this.r({
      method: "GET",
      url: `/movie/popular?${config.apiKey}`
    });
  }

  async addPopularMovies(page) {
    return this.r({
      method: "GET",
      url: `/movie/popular?${config.apiKey}&page=${page}`
    });
  }
}

export default function someApi(request: ReqTypeT) {
  return new SomeApi(request);
}
