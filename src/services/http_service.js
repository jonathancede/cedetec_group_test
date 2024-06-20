import axios from "axios"

class HttpService {
  constructor(baseUrl, apiKey, generalCatch) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl ?? "",
      headers: {
        accept: "application/json",
        ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
      },
    })
    this.generalCatch = generalCatch
  }

  handleGeneralCatch(error) {
    if (this.generalCatch) this.generalCatch(error)
  }

  async get(url) {
    try {
      const response = await this.axiosInstance.get(url)
      return response.data
    } catch (error) {
      this.handleGeneralCatch(error)
      throw new Error(`Error al realizar la solicitud GET: ${error}`)
    }
  }

  async post(url, data) {
    try {
      const response = await this.axiosInstance.post(url, data)
      return response.data
    } catch (error) {
      this.handleGeneralCatch(error)
      throw new Error(`Error al realizar la solicitud POST: ${error}`)
    }
  }

  async put(url, data) {
    try {
      const response = await this.axiosInstance.put(url, data)
      return response.data
    } catch (error) {
      this.handleGeneralCatch(error)
      throw new Error(`Error al realizar la solicitud PUT: ${error}`)
    }
  }

  async patch(url, data) {
    try {
      const response = await this.axiosInstance.patch(url, data)
      return response.data
    } catch (error) {
      this.handleGeneralCatch(error)
      throw new Error(`Error al realizar la solicitud PATCH: ${error}`)
    }
  }

  async delete(url) {
    try {
      await this.axiosInstance.delete(url)
    } catch (error) {
      this.handleGeneralCatch(error)
      throw new Error(`Error al realizar la solicitud DELETE: ${error}`)
    }
  }
}

export default HttpService
