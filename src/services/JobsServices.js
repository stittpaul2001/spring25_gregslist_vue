import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Job } from "@/models/Job.js"
import { AppState } from "@/AppState.js"


class JobsServices {

    async getJobs() {
        const response = await api.get('api/jobs')
        logger.log('Got jobs', response.data)
        const jobs = response.data.map(pojo => new Job(pojo))
        AppState.jobs = jobs
    }
}

export const jobsServices = new JobsServices()