import HttpService from "./http_service"

class AlumnosApiService extends HttpService {
  async getList() {
    return await this.get("students")
  }
}

const API_URL = process.env.REACT_APP_API_URL
const API_AUTH_TOKEN = process.env.REACT_APP_API_AUTH_TOKEN ?? null
const instance = new AlumnosApiService(API_URL, API_AUTH_TOKEN)
export default instance
